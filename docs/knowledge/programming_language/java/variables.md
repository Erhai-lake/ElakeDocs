---
title: 变量
createTime: 2025/12/27 01:39:49
---

变量就是内存中的一块区域, 可以理解成一个箱子, 用来存储程序要处理的数据.

格式: `数据类型 变量名称 = 数据`.

例子: `int age = 18;`, `String Name = "名字喵";`.

**数据类型**是用于限制变量只能存储某种数据形式.

`=`是赋值运算符.

举个例子:

```java
public static void main(String[] args) {
    String name = "World";
    System.out.println("Hello " + name);
    // Hello World
}
```

为什么要使用变量呢?

减少重复代码, 编写起来更方便.

变量里面的数据是可以被改变的, 举个例子:

```java
public static void main(String[] args) {
    String name = "World";
    System.out.println("Hello " + name);
    // Hello World

    // 改变变量的值
    name = "JAVA";
    System.out.println("Hello " + name);
    // Hello JAVA

    // 改变变量的值
    name = "C++";
    System.out.println("Hello " + name);
    // Hello C++
}
```

在举个例子:

```java
public static void main(String[] args) {
    int money = 10;
    System.out.println(money);
    // 10

    // 改变变量的值
    money = 15;
    System.out.println(money);
    // 15

    // 改变变量的值
    money = money + 5;
    System.out.println(money);
    // 20
}
```
