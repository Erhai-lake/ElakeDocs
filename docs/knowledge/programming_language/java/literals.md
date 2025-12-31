---
title: 字面量
createTime: 2025/12/27 01:39:49
---

**字面量**就是程序能直接书写的数据, 这个的重点是, 搞清楚不同数据在代码中的书写格式.

字面量的分类:

|  常用数据   |    生活中的写法    |       代码中该怎么写       |        说明        |
|:-------:|:------------:|:-------------------:|:----------------:|
|   整数    |   666, -88   |    `666`, `-88`     |      写法一致.       |
|   小数    | 13.14, -5.21 |  `13.14`, `-5.21`   |      写法一致.       |
|   字符    |   A, 0, 我    | `'A'`, `'0'`, `'我'` | 必须使用单引号且只能有一个字符. |
|   字符串   |  洱海,  喵喵喵~   |  `"洱海"`, `"喵喵喵~"`   | 必须使用双引号, 内容可有可无. |
|   布尔值   |     真, 假     |   `true`, `false`   |      只有两个值.      |
|   空值    |      -       |       `null`        | 一个特殊的值(后面在讲这个).  |
| 特殊字符字面量 |      -       |     `\t`,  `\n`     |        -         |

```java
public static void main(String[] args) {
    pintLiteral();
}

public static void pintLiteral() {
    System.out.println(666);
    System.out.println(13.14);
    System.out.println('A');
    System.out.println("喵喵喵~");
    System.out.println(true);

    // \t(Tab缩进)
    // \n(换行)
    System.out.println("Hello\nWorld");
}
```

![8f2e55c64b8a58883c60d009b93c4f5aefb22d1d](assets/8f2e55c64b8a58883c60d009b93c4f5aefb22d1d.png)
