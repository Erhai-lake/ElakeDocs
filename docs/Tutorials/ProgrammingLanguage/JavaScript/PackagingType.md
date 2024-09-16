---
id: PackagingType
title: 包装类型
---

# 包装类型

在JS中**最主要**的数据类型有6种:

* 基本数据类型
    * 字符串
    * 数值
    * 布尔
    * understand
    * null

* 引用类型
    * 对象

    但是,会有特殊情况:
    ```js showLineNumbers
    // 普通字符串
    const Str = '洱海之畔'
    console.log(Str.length)
    // 4
    ```

    其实字符串,数值,布尔等基本类型也都有专门的构造函数,这些被称为包装类型

    JS中几乎所有类型的数据都可以基于构成函数创建
