---
layout:     post
title:      Mybatis乐观锁实现以解决并发问题
subtitle:   Mybatis乐观锁实现以解决并发问题
date: 	      2018-06-12
author:     ChaleMa
header-img: img/post-bg-unix-linux.jpg
catalog: true
tags:
    - JAVA
---
>在项目中不可避免会遇到并发的情况，今天介绍mybatis乐观锁解决并发问题，转自：http://blog.csdn.net/zhouzhiwengang/article/details/54973509

# 情景展示

银行两操作员同时操作同一账户就是典型的例子。

比如A、B操作员同时读取一余额为1000元的账户，A操作员为该账户增加100元，B操作员同时为该账户扣除50元，A先提交，B后提交。最后实际账户余额为1000-50=950元，但本该为1000+100-50=1050。这就是典型的并发问题。

乐观锁机制在一定程度上解决了这个问题。乐观锁，大多是基于数据版本(Version)记录机制实现。何谓数据版本？即为数据增加一个版本标识，在基于数据库表的版本解决方案中，一般是通过为数据库表增加一个 “version” 字段来实现。

读取出数据时，将此版本号一同读出，之后更新时，对此版本号加一。此时，将提交数据的版本数据与数据库表对应记录的当前版本信息进行比对，如果提交的数据版本号大于数据库表当前版本号，则予以更新，否则认为是过期数据。

对于上面修改用户帐户信息的例子而言，假设数据库中帐户信息表中有一个version字段，当前值为1；而当前帐户余额字段(balance)为1000元。假设操作员A先更新完，操作员B后更新。 
a、操作员A此时将其读出(version=1)，并从其帐户余额中增加100(1000+100=1100)。 
b、在操作员A操作的过程中，操作员B也读入此用户信息(version=1)，并从其帐户余额中扣除50(1000-50=950)。 
c、操作员A完成了修改工作，将数据版本号加一(version=2)，连同帐户增加后余额(balance=1100)，提交至数据库更新，此时由于提交数据版本大于数据库记录当前版本，数据被更新，数据库记录version更新为2。 
d、操作员B完成了操作，也将版本号加一(version=2)试图向数据库提交数据(balance=950)，但此时比对数据库记录版本时发现，操作员B提交的数据版本号为2，数据库记录当前版本也为2，不满足 “提交版本必须大于记录当前版本才能执行更新 “的乐观锁策略，因此，操作员B的提交被驳回。 
这样，就避免了操作员B用基于version=1的旧数据修改的结果覆盖操作员A的操作结果的可能。
#示例代码
*account建库脚本:

```javascript
drop table if exists account_wallet;

/*==============================================================*/
/* Table: account_wallet                                        */
/*==============================================================*/
create table account_wallet(
   id                   int not null comment '用户钱包主键',
   user_open_id         varchar(64) comment '用户中心的用户唯一编号',
   user_amount          decimal(10,5),
   create_time          datetime,
   update_time          datetime,
   pay_password         varchar(64),
   is_open              int comment '0:代表未开启支付密码，1:代表开发支付密码',
   check_key            varchar(64) comment '平台进行用户余额更改时，首先效验key值，否则无法进行用户余额更改操作',
   version              int comment '基于mysql乐观锁，解决并发访问'
   primary key (id)
);
```

* DAO层

```java
AccountWallet selectByOpenId(String openId);

int updateAccountWallet(AccountWallet record);
```

* Service层

```javascript
AccountWallet selectByOpenId(String openId);

int updateAccountWallet(AccountWallet record);
```

* ServiceImpl层

```javascript
public AccountWallet selectByOpenId(String openId) {    
    return accountWalletMapper.selectByOpenId(openId);
}

public int updateAccountWallet(AccountWallet record) {  
     return accountWalletMapper.updateAccountWallet(record);
}
```
* Sql.xml

```xml
<!--通过用户唯一编号，查询用户钱包相关的信息  -->
<select id="selectByOpenId" resultMap="BaseResultMap" parameterType="java.lang.String">
    select <include refid="Base_Column_List" />
    from account_wallet
    where user_open_id = #{openId,jdbcType=VARCHAR}
</select>

<!--用户钱包数据更改 ，通过乐观锁(version机制)实现 -->
<update id="updateAccountWallet" parameterType="com.settlement.model.AccountWallet">
     <![CDATA[
        update account_wallet 
        set user_amount = #{userAmount,jdbcType=DECIMAL}, version = version + 1 
        where id = #{id,jdbcType=INTEGER} and version = #{version,jdbcType=INTEGER} 
     ]]> 
</update>
```

* controller 层:

```java
package com.settlement.controller;

import java.math.BigDecimal;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.settlement.commons.base.BaseController;
import com.settlement.model.AccountWallet;
import com.settlement.service.AccountWalletService;
import com.taobao.api.internal.util.StringUtils;

/**
 * 用户钱包Controller
 */
@Controller
@RequestMapping(value = "/wallet")
public class WalletController extends BaseController {

    @Autowired
    private AccountWalletService accountWalletService;

    /**
     * 针对业务系统高并发-----修改用户钱包数据余额，采用乐观锁
     * 
     * @return
     */
    @RequestMapping(value = "/walleroptimisticlock.action", method = RequestMethod.POST)
    @ResponseBody
    public String walleroptimisticlock(HttpServletRequest request) {

        String result = "";

        try {
            // 用户唯一编号
            String openId = request.getParameter("openId") == null?null:request.getParameter("openId").trim(); 
            // 1:代表增加，2：代表减少
            String openType = request.getParameter("openType") == null ? null: request.getParameter("openType").trim(); 
            // 金额
            String amount = request.getParameter("amount") == null ? null: request.getParameter("amount").trim(); 

            if (StringUtils.isEmpty(openId)) {
                return "openId is null";
            }
            if (StringUtils.isEmpty(openType)) {
                return "openType is null";
            }
            if (StringUtils.isEmpty(amount)) {
                return "amount is null";
            }

            AccountWallet wallet = accountWalletService.selectByOpenId(openId);

            // 用户操作金额
            BigDecimal cash = BigDecimal.valueOf(Double.parseDouble(amount));
            cash.doubleValue();
            cash.floatValue();
            if (Integer.parseInt(openType) == 1) {
                wallet.setUserAmount(wallet.getUserAmount().add(cash));
            } else if (Integer.parseInt(openType) == 2) {
                wallet.setUserAmount(wallet.getUserAmount().subtract(cash));
            }

            int target = accountWalletService.updateAccountWallet(wallet);
            System.out.println("修改用户金额是否：" + (target == 1 ? "成功" : "失败"));

        } catch (Exception e) {
            e.printStackTrace();
            result = e.getMessage();
            return result;
        }

        return "success";
    }
}
```

# 模拟并发访问:

```javascript
package com.settlement.concurrent;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.CountDownLatch;

import com.settlement.commons.utils.HttpRequest;


/**
 * 模拟用户的并发请求，检测用户乐观锁的性能问题
 * 
 */
public class ConcurrentTest {

    final static SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 

    public static void main(String[] args){
        CountDownLatch latch=new CountDownLatch(5);//模拟5人并发请求，用户钱包

        for(int i=0;i<5;i++){//模拟5个用户
            AnalogUser analogUser = new AnalogUser("user"+i,"58899dcd-46b0-4b16-82df-bdfd0d953bfb","1","20.024",latch);
            analogUser.start();
        }
        latch.countDown();//计数器減一  所有线程释放 并发访问。
        System.out.println("所有模拟请求结束  at "+sdf.format(new Date()));  

    }

    static class AnalogUser extends Thread{
        String workerName;//模拟用户姓名
        String openId;
        String openType;
        String amount;
        CountDownLatch latch;

        public AnalogUser(String workerName, String openId, String openType, String amount,
                CountDownLatch latch) {         
            this.workerName = workerName;
            this.openId = openId;
            this.openType = openType;
            this.amount = amount;
            this.latch = latch;
        }

        @Override
        public void run() {         
            try {  
                latch.await(); //一直阻塞当前线程，直到计时器的值为0  
            } catch (InterruptedException e) {  
                e.printStackTrace();  
            }           
            post();//发送post 请求          
        } 

        public void post(){

            System.out.println("模拟用户： "+workerName+" 开始发送模拟请求  at "+sdf.format(new Date()));  

            String url = "http://localhost:8080/Settlement/wallet/walleroptimisticlock.action";
            String data="openId="+openId+"&openType="+openType+"&amount="+amount;

            String result = HttpRequest.sendPost(url, data);

            System.out.println("操作结果："+result);
            System.out.println("模拟用户： "+workerName+" 模拟请求结束  at "+sdf.format(new Date())); 

        }


    }

}
```

>  本章小结： 处理并发，数据库增加version字段，加以版本对比控制解决问题；






































