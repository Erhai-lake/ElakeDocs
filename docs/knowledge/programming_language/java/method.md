---
title: 方法
createTime: 2025/12/27 01:39:49
---

方法是一种用于执行特定任务或操作的代码块, 代表**一个功能**, 他可以接收数据进行处理, 并返回一个处理后的结果.

## 定义方法

方法的定义包括方法的名称, 参数列表和返回类型. 方法可以有参数, 也可以没有参数, 也可以有返回值, 也可以没有返回值.

```java
修饰符 返回类型 方法名(参数列表) {
    方法体代码(执行具体操作)
    return 返回值; // 如果有返回值, 则需要使用 return 语句返回结果
}
```

例子:

```java
public class MethodExample {
    // 定义一个没有参数和返回值的方法
    public void sayHello() {
        System.out.println("Hello, World!");
    }

    // 定义一个有参数和返回值的方法
    public int add(int a, int b) {
        return a + b;
    }

    // 定义一个有参数但没有返回值的方法
    public void printSum(int a, int b) {
        System.out.println("Sum: " + (a + b));
    }
}
```

## 调用方法
方法可以在类的其他方法中被调用, 也可以在主方法中被调用. 调用方法时, 需要使用方法名和参数列表.

```java
public class MethodExample {
    public static void main(String[] args) {
        MethodExample example = new MethodExample();
        example.sayHello(); // 调用没有参数和返回值的方法
        int result = example.add(5, 10); // 调用有参数和返回值的方法
        System.out.println("返回: " + result);
        example.printSum(5, 10); // 调用有参数但没有返回值的方法
    }
}
```

::: tip
如果定义的方法和调用的方法在同一个类中, 可以直接使用方法名调用, 前提是方法是静态的. 如果在不同的类中, 需要先创建对象, 然后通过对象调用方法.

以下是在同一个类中定义和调用方法的完整例子:

```java
public class MethodExample {
    public static void main(String[] args) {
        sayHello(); // 调用没有参数和返回值的方法
        int result = add(5, 10); // 调用有参数和返回值的方法
        System.out.println("返回: " + result);
        printSum(5, 10); // 调用有参数但没有返回值的方法
    }

    // 定义一个没有参数和返回值的方法
    public static void sayHello() {
        System.out.println("Hello, World!");
    }

    // 定义一个有参数和返回值的方法
    public static int add(int a, int b) {
        return a + b;
    }

    // 定义一个有参数但没有返回值的方法
    public static void printSum(int a, int b) {
        System.out.println("Sum: " + (a + b));
    }
}

```
:::

## 方法重载
方法重载是指在同一个类中, 可以定义多个同名的方法, 但参数列表不同. 方法重载可以提高代码的可读性和可维护性.

```java
public class MethodExample {
    public static void main(String[] args) {
        MethodExample example = new MethodExample();
        System.out.println("2个数的和: " + example.add(5, 10)); // 调用第一个 add 方法
        System.out.println("3个数的和: " + example.add(5, 10, 15)); // 调用第二个 add 方法
    }

    // 定义一个方法, 接收两个整数参数
    public int add(int a, int b) {
        return a + b;
    }

    // 定义一个方法, 接收三个整数参数
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}
```

## 无关内容

:::: details 其他东西
Java的方法与js的`function`类似.

因为这是柒月说的, 柒月原话:

::: chat title="柒月和洱海的聊天记录"
{:2025-04-08 00:06:00}

{柒月}
要不

{柒月}
你加一个

{柒月}
这个东西和JS的function很像

{.}
![6ff286f6a0e10718baba88150a06436464eec8ee](assets/6ff286f6a0e10718baba88150a06436464eec8ee.png)

其实一点也不像(

{.}
没理解哪里像

{柒月}
你看

{柒月}
函数

{.}
嗯哼

{柒月}
```javascript
function name(参数名) {
        执行
}
```

```java
省略修饰符name (参数类型 参数名) {
        执行
}
```

用法上差不多嘛

{.}
emmm

{.}
逆天

{.}
可以

{.}
一会加

{柒月}
就连调用都差不多

{柒月}
都是直接调用name

{柒月}
然后写参数

{.}
樂, 无敌了
:::

不知道怎么解释, 所以丢聊天记录.
::::
