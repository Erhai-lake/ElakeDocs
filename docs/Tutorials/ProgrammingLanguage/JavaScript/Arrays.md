---
id: Arrays
title: 数组
---

# 数组

数组(Array),是一种将**一组数据存储在单个变量下**的存储方式(优雅~)

在上一篇已经讲述了如何声明变量了,这篇就不重复讲一遍了

## 声明语法

```js showLineNumbers
const 变量名 = []

// 例子:
const Name = ['小米', '小明', '张三', '李四', '小天']
```

:::warning
数组是可以使用`const`声明的,尽管有增加或删除的操作
:::

## 读取数组

```js showLineNumbers
// 打印整个数组
console.log(Name)
// 输出 ['小米', '小明', '张三', '李四', '小天']

// 打印数组里的其中一项
console.log(Name[0])
// 输出 小米

console.log(Name[4])
// 输出 小天
```

在数组中,数据的编号,也就是什么的0和4,被称为**索引**,或者**下标**

数组第一项的索引是0,第二项的索引是1,以此类推

## 一些术语

元素:数组中保存的每个数据都叫数组元素

索引,下标:数组中数据的编号

长度:数组中时数据的个数,可以通过数组的length属性获取`console.log(Name.length)`

## 操作数组

数组本质是数据集合,操作数据无非就是**增删改查**语法

### 增

```js showLineNumbers
// 将一个或多个元素添加到数组的末尾,并返回该数组的新长度
Name.push(新增的内容1, 新增的内容2)

// 将一个或多个元素添加到数组的开头,并返回该数组的新长度
Name.unshift(新增的内容1, 新增的内容2)
```

### 删

删除数组中数据

```js showLineNumbers
// 删除数组中最后一个元素,并返回该元素的值
Name.pop()

// 删除数组中开头的元素,并返回该元素的值
Name.shift()

// 删除指定的元素
Name.splice(操作的下标, 删除的个数)
```

### 改

重新赋值

```js showLineNumbers
Name[下标] = 新值
```

### 查

查询数组数据

```js showLineNumbers
Name[下标]
```

## 遍历数组

使用循环语句,访问数组中的所有元素

### For循环

```js showLineNumbers
for (let i = 0; i < Name.length; i++) {
  console.log(Name[i])
}
```

### ForEach方法

> 了解即可,详细以后在写

```js showLineNumbers
Name.forEach((Item) => {
  console.log(Item)
})
```

### For...of循环

```js showLineNumbers
for (let Item of Name) {
  console.log(Item)
}
```

### Map方法

```js showLineNumbers
Name.map((Item) => {
  console.log(Item)
})
```

以上4种方法,都可以遍历数组,用的最多的是For循环
