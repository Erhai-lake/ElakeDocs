---
title: 第一个程序
createTime: 2025/12/27 01:39:49
---

是的, 你要开始编写你的第一个程序了, 让你有点成就感, 以便后期我们斩尽杀绝.

我们第一个项目不使用IDEA, 而是使用记事本加命令行的方式编写和运行.

## 第一步创建项目

创建一个存放项目的文件夹.

然后创建一个名为`HelloWorld.java`的文本文件.

用记事本打开.

## 第二步编写代码

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

保存文本文件.

## 第三步编译代码

在路径输入框这里输入cmd来打开cmd窗口.

![ffa6eb74328ebe8adf2e58234728cdab1ac69091](assets/ffa6eb74328ebe8adf2e58234728cdab1ac69091.png)

输入以下命令(用javac编译工具编译刚刚的代码).

```shell
javac HelloWorld.java
```

回车后不会返回任何消息, 但是刚刚的目录下多了一个`HelloWorld.class`.

## 第四步运行程序

在cmd窗口输入以下命令(用java运行刚刚编译好的程序).

```java
java HelloWorld
```

如果操作没问题, cmd窗口就输出`Hello World!`了.

## 我报错了

### 文件名和类名不一致

![7e06fabff395b6e160ce86c194b25bce19c1d6ac](assets/7e06fabff395b6e160ce86c194b25bce19c1d6ac.png)

这个报错是因为你的文件名和你的类名不是同一个.

![d8250545f5b8df277b6bab3ad1f607e93b3e0ef4](assets/d8250545f5b8df277b6bab3ad1f607e93b3e0ef4.png)

### 引号没写

![9dfd6392d1970564dbbee344db9a045c36db9053](assets/9dfd6392d1970564dbbee344db9a045c36db9053.png)

这是因为Java没一行的结尾都需要加一个英文引号.

![532b8bc466c6ff12e25b21e1e81d94b55e8be5a6](assets/532b8bc466c6ff12e25b21e1e81d94b55e8be5a6.png)

### 运行时报错

![f3bf339aa9808f0950bdc776fdd2b9edf7f8d8b9](assets/f3bf339aa9808f0950bdc776fdd2b9edf7f8d8b9.png)

这是因为java运行时没有`HelloWorld.class`这个类.

![458db3ae21b5fe45083360fd0aeff003de0e6bc0](assets/458db3ae21b5fe45083360fd0aeff003de0e6bc0.png)

## 扩展

在新版JDK中, 不在需要先编译在运行了, 可以直接`java HelloWorld.java`.
