---
layout:     post
title:      fastjson的使用API
subtitle:   fastjson的相关使用
date: 	      2018-06-12
author:     ChaleMa
header-img: img/post-bg-debug.png
catalog: true
tags:
    - JAVA
---
>输出数据的格式化有时候会花费一部分时间，然而使用fastjson就可以节省时间，提升效率。

# 重新定义POJO输出的json字段

```java
import com.alibaba.fastjson.annotation.JSONField;  
import java.util.Date;  
  
/** 
 * @auther: chalema 
 * @date: 2018/6/12 13:58 
 * @description: 重新定义POJO输出的json字段 
 * @modify by: 
 */  
public class JsonPojo {  
  
  private int id;  
  //默认输出json字段---配置在field上  
  @JSONField(name = "userName")  
  private String name;  
  
  // 配置date序列化和反序列使用yyyyMMdd日期格式  
  @JSONField(format = "yyyy-MM-dd")  
  private Date date;  
  
  //默认输出json字段---配置在getter/setter上  
  @JSONField(name = "ID")  
  public int getId() {  
    return id;  
  }  
  
  @JSONField(name = "ID")  
  public void setId(int value) {  
    this.id = id;  
  }  
  
  public String getName() {  
    return name;  
  }  
  
  public void setName(String name) {  
    this.name = name;  
  }  
  
  public Date getDate() {  
    return date;  
  }  
  
  public void setDate(Date date) {  
    this.date = date;  
  }  
  
  public JsonPojo() {  
  }  
}  
```

# 测试字段的输出

```java
import com.alibaba.fastjson.JSON;  
    import java.util.Date;  
  
/** 
 * @auther: chalema 
 * @date: 2018/6/12 13:45 
 * @description:测试字段输出 
 * @modify by: 
 */  
public class Jsontest {  
  
  public static void main(String[] args) {  
    JsonPojo jsonPojo=new JsonPojo();  
    jsonPojo.setDate(new Date());  
    jsonPojo.setName("张三");  
    String json= JSON.toJSONString(jsonPojo);  
    System.out.println(json);  
  }  
}  
```

# 输出结果展示

```java
{"ID":0,"date":"2018-05-19","userName":"张三"}
```