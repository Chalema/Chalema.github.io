---
layout:     post
title:      Fastjson的使用API
subtitle:   Fastjson的相关使用
date: 	      2018-06-12
author:     ChaleMa
header-img: img/home-bg-art.jpg
catalog: true
tags:
    - JAVA
---
>关于Collections.sort()排序，一般的话有两种方式：第一种使用Comparable排序接口；第二种Comparator比较器接口；接下来，跟大家分享一下两种排序的方法。

# 一.使用Comparable排序接口

若一个类实现了Comparable接口，就意味着“该类支持排序”。 假设“有一个List列表(或数组)，里面的元素是实现了Comparable接口的类”，则该List列表(或数组)可以通过 Collections.sort（或 Arrays.sort）进行排序。
此外，“实现Comparable接口的类的对象”可以用作“有序映射(如TreeMap)”中的键或“有序集合(TreeSet)”中的元素，而不需要指定比较器。

```java
class T implements Comparable<T>{  
    private String name;  
    private Integer order;  
    public String getName() {  
        return name;  
    }  
    public void setName(String name) {  
        this.name = name;  
    }  

    public Integer getOrder() {  
        return order;  
    }  
    public void setOrder(Integer order) {  
        this.order = order;  
    }  
    @Override  
    public String toString() {  
        return "name is "+name+" order is "+order;  
    }  
    @Override  
    public int compareTo(T t) {  
        return this.order.compareTo(a.getOrder());  
    }  

} 
```

```java
List<T> list = new ArrayList<T>(); 
```
-类T实现接口Comparable，并实现compareTo()方法
-调用Collections.sort(lists)即可实现排序

# 二.Comparator比较器接口

我们若需要控制某个类的次序，而该类本身不支持排序(即没有实现Comparable接口)；我们可以建立一个“比较器”来进行排序。这个“比较器”只需要实现Comparator接口即可。

- Collections.sort(list, new PriceComparator())

    - 参数一：需要排序的list
    - 参数二：比较器，实现Comparator接口的类，返回一个int型的值，就相当于一个标志，告诉sort方法按什么顺序来对list进行排序。
- Comparator是个接口，可重写compare()及equals()这两个方法,用于比较功能；如果是null的话，就是使用元素的默认顺序，如a,b,c,d,e,f,g，就是a,b,c,d,e,f,g这样，当然数字也是这样的。

    - compare（a,b）方法:根据第一个参数小于、等于或大于第二个参数分别返回负整数、零或正整数。
    - equals（obj）方法：仅当指定的对象也是一个 Comparator，并且强行实施与此 Comparator 相同的排序时才返回 true。

# 两种方法示例

```java
package com.springmvc.test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class TestSort {

    static class A implements Comparable<A> {
        private String name;
        private Integer order;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Integer getOrder() {
            return order;
        }

        public void setOrder(Integer order) {
            this.order = order;
        }

        @Override
        public String toString() {
            return "name is " + name + " order is " + order;
        }

        public int compareTo(A a) {
            return this.order.compareTo(a.getOrder());
        }

    }

    static class B {
        private String name;
        private String order;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getOrder() {
            return order;
        }

        public void setOrder(String order) {
            this.order = order;
        }

        @Override
        public String toString() {
            return "name is " + name + " order is " + order;
        }
    }

    public static void main(String[] args) {

        //第一种方法示例：
        List<String> lists = new ArrayList<String>();
        lists.add("5");
        lists.add("2");
        lists.add("9");
        //lists中的对象String 本身含有compareTo方法，所以可以直接调用sort方法，按自然顺序排序，即升序排序
        Collections.sort(lists);

        //第一种方法示例：
        List<A> listA = new ArrayList<A>();
        A a1 = new A();
        a1.setName("a1");
        a1.setOrder(1);
        A a2 = new A();
        a2.setName("a2");
        a2.setOrder(2);
        listA.add(a1);
        listA.add(a2);
        //list中的对象A实现Comparable接口
        Collections.sort(listA);

        //第二种方法示例：
        List<B> listB = new ArrayList<B>();
        B b1 = new B();
        b1.setName("b1");
        b1.setOrder("a");
        B b2 = new B();
        b2.setName("b2");
        b2.setOrder("b");
        listB.add(b1);
        listB.add(b2);
        //根据Collections.sort重载方法来实现
        Collections.sort(listB, new Comparator<B>() {
            public int compare(B b1, B b2) {
                return b1.getOrder().compareTo(b2.getOrder());
            }
        });

        System.out.println(lists);
        System.out.println(listA);
        System.out.println(listB);
    }
}

```
## 结果
```
[2, 5, 9]
[name is a1 order is 1, name is a2 order is 2]
[name is b1 order is a, name is b2 order is b]

Process finished with exit code 0
```

# 方法一示例

```java
package com.springmvc.pojo;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class Book implements Comparable { // 定义名为Book的类，默认继承自Object类
    public int id;// 编号
    public String name;// 名称
    public double price; // 价格
    private String author;// 作者
    public GregorianCalendar calendar;// 出版日期

    public Book() {
        this(0, "X", 0.0, new GregorianCalendar(), "");
    }

    public Book(int id, String name, double price, GregorianCalendar calender,
                String author) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.calendar = calender;
        this.author = author;
    }

    // 重写继承自父类Object的方法，满足Book类信息描述的要求
    public String toString() {
        String showStr = id + "\t" + name; // 定义显示类信息的字符串
        DecimalFormat formatPrice = new DecimalFormat("0.00");// 格式化价格到小数点后两位
        showStr += "\t" + formatPrice.format(price);// 格式化价格
        showStr += "\t" + author;
        SimpleDateFormat formatDate = new SimpleDateFormat("yyyy年MM月dd日");
        showStr += "\t" + formatDate.format(calendar.getTime()); // 格式化时间
        return showStr; // 返回类信息字符串
    }

    public int compareTo(Object obj) {// Comparable接口中的方法
        Book b = (Book) obj;
        return this.id - b.id; // 按书的id比较大小，用于默认排序
    }

    public static void main(String[] args) {
        Book b1 = new Book(10000, "红楼梦", 150.86, new GregorianCalendar(2009,
                01, 25), "曹雪芹、高鄂");
        Book b2 = new Book(10001, "三国演义", 99.68, new GregorianCalendar(2008, 7,
                8), "罗贯中 ");
        Book b3 = new Book(10002, "水浒传", 100.8, new GregorianCalendar(2009, 6,
                28), "施耐庵 ");
        Book b4 = new Book(10003, "西游记", 120.8, new GregorianCalendar(2011, 6,
                8), "吴承恩");
        Book b5 = new Book(10004, "天龙八部", 10.4, new GregorianCalendar(2011, 9,
                23), "搜狐");
        TreeMap tm = new TreeMap();
        tm.put(b1, new Integer(255));
        tm.put(b2, new Integer(122));
        tm.put(b3, new Integer(688));
        tm.put(b4, new Integer(453));
        tm.put(b5, new Integer(40));
        Iterator it = tm.keySet().iterator();
        Object key = null, value = null;
        Book bb = null;
        while (it.hasNext()) {
            key = it.next();
            bb = (Book) key;
            value = tm.get(key);
            System.out.println(bb.toString() + "\t库存：" + tm.get(key));
        }
    }
}
```
## 方法一示例结果
```java
10000	红楼梦	150.86	曹雪芹、高鄂	2009年02月25日	库存：255
10001	三国演义	99.68	罗贯中 	2008年08月08日	库存：122
10002	水浒传	100.80	施耐庵 	2009年07月28日	库存：688
10003	西游记	120.80	吴承恩	2011年07月08日	库存：453
10004	天龙八部	10.40	搜狐	2011年10月23日	库存：40

Process finished with exit code 0
```

# 方法二示例
```java
package com.springmvc.pojo;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class Book{ // 定义名为Book的类，默认继承自Object类
    public int id;// 编号
    public String name;// 名称
    public double price; // 价格
    private String author;// 作者
    public GregorianCalendar calendar;// 出版日期

    public Book() {
        this(0, "X", 0.0, new GregorianCalendar(), "");
    }

    public Book(int id, String name, double price, GregorianCalendar calender,
                String author) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.calendar = calender;
        this.author = author;
    }

    // 重写继承自父类Object的方法，满足Book类信息描述的要求
    public String toString() {
        String showStr = id + "\t" + name; // 定义显示类信息的字符串
        DecimalFormat formatPrice = new DecimalFormat("0.00");// 格式化价格到小数点后两位
        showStr += "\t" + formatPrice.format(price);// 格式化价格
        showStr += "\t" + author;
        SimpleDateFormat formatDate = new SimpleDateFormat("yyyy年MM月dd日");
        showStr += "\t" + formatDate.format(calendar.getTime()); // 格式化时间
        return showStr; // 返回类信息字符串
    }
    

    public static void main(String args[]) {
        List<Book> list = new ArrayList<Book>(); // 数组序列
        Book b1 = new Book(10000, "红楼梦", 150.86, new GregorianCalendar(2009,
                01, 25), "曹雪芹、高鄂");
        Book b2 = new Book(10001, "三国演义", 99.68, new GregorianCalendar(2008, 7,
                8), "罗贯中 ");
        Book b3 = new Book(10002, "水浒传", 100.8, new GregorianCalendar(2009, 6,
                28), "施耐庵 ");
        Book b4 = new Book(10003, "西游记", 120.8, new GregorianCalendar(2011, 6,
                8), "吴承恩");
        Book b5 = new Book(10004, "天龙八部", 10.4, new GregorianCalendar(2011, 9,
                23), "搜狐");
        list.add(b1);
        list.add(b2);
        list.add(b3);
        list.add(b4);
        list.add(b5);
        // Collections.sort(list); //没有默认比较器，不能排序
        System.out.println("数组序列中的元素:");
        myprint(list);

        Collections.sort(list, new PriceComparator()); // 根据价格排序
        System.out.println("按书的价格排序:");
        myprint(list);

        Collections.sort(list, new CalendarComparator()); // 根据时间排序
        System.out.println("按书的出版时间排序:");
        myprint(list);
    }

    // 自定义比较器：按书的价格排序
    static class PriceComparator implements Comparator {
        public int compare(Object object1, Object object2) {// 实现接口中的方法
            Book p1 = (Book) object1; // 强制转换
            Book p2 = (Book) object2;
            return new Double(p1.price).compareTo(new Double(p2.price));
        }
    }

    // 自定义比较器：按书出版时间来排序
    static class CalendarComparator implements Comparator {
        public int compare(Object object1, Object object2) {// 实现接口中的方法
            Book p1 = (Book) object1; // 强制转换
            Book p2 = (Book) object2;
            return p2.calendar.compareTo(p1.calendar);
        }
    }

    // 自定义方法：分行打印输出list中的元素
    public static void myprint(List<Book> list) {
        Iterator it = list.iterator(); // 得到迭代器，用于遍历list中的所有元素
        while (it.hasNext()) {// 如果迭代器中有元素，则返回true
            System.out.println("\t" + it.next());// 显示该元素
        }
    }
}
```
## 方法二示例结果

```java
数组序列中的元素:
	10000	红楼梦	150.86	曹雪芹、高鄂	2009年02月25日
	10001	三国演义	99.68	罗贯中 	2008年08月08日
	10002	水浒传	100.80	施耐庵 	2009年07月28日
	10003	西游记	120.80	吴承恩	2011年07月08日
	10004	天龙八部	10.40	搜狐	2011年10月23日
按书的价格排序:
	10004	天龙八部	10.40	搜狐	2011年10月23日
	10001	三国演义	99.68	罗贯中 	2008年08月08日
	10002	水浒传	100.80	施耐庵 	2009年07月28日
	10003	西游记	120.80	吴承恩	2011年07月08日
	10000	红楼梦	150.86	曹雪芹、高鄂	2009年02月25日
按书的出版时间排序:
	10004	天龙八部	10.40	搜狐	2011年10月23日
	10003	西游记	120.80	吴承恩	2011年07月08日
	10002	水浒传	100.80	施耐庵 	2009年07月28日
	10000	红楼梦	150.86	曹雪芹、高鄂	2009年02月25日
	10001	三国演义	99.68	罗贯中 	2008年08月08日

Process finished with exit code 0
```

>本章小结：两种方法的目的是让List里面存放的内容进行排序，两种方法中 第一种是类实现了Comparable接口，在类中覆写了compareTo方法；而第二种是在让其排序的时候调用的Collections.sort(list,new Comparator<T>())再覆写compare方法.