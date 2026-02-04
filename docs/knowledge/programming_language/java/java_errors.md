---
title: 怎么看懂Java的报错
createTime: 2025/12/27 01:39:49
---

这个简单, 来几个例子.

:::warning
Java的报错只能看懂简单的, 过于复杂的可以丢给AI帮忙分析.

因为正常的Java项目中, 一旦报错, 报错的内容可谓是五花八门, 巨长无比.
:::

## 第一个

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!")
    }
}
```

执行`javac HelloWorld.java`时报错.

```shell
HelloWorld.java:3: 错误: 需要';'
        System.out.println("Hello World!")
                                          ^
1 个错误
```

首先看第一行, 他告诉你了`HelloWorld.java`文件的第3行报错了.

报了个需要冒号, 第二行还给你指出来了.

最后一行, 告诉你了一共有几个报错.

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

## 第二个

```java
public class HelloWorl {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

执行`javac HelloWorld.java`时报错.

```shell
HelloWorld.java:1: 错误: 类 HelloWorl 是公共的, 应在名为 HelloWorl.java 的文件中声明
public class HelloWorl {
       ^
1 个错误
```

看第一个, 是`HelloWorld.java`这个文件的第一行报错了, 他说`HelloWorl是公共,  应在名为 HelloWorl.java 的文件中声明`.

这个实在不知道怎么解释了, 眼睛好的都看的出来, 我们执行的是`HelloWorld.java`, 代码里写的是`HelloWorl`.

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```
