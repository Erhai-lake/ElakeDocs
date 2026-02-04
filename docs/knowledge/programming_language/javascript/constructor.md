---
title: 构造函数
createTime: 2024/10/02 14:53:08
---

==构造函数==是一种特殊的函数, 主要用来初始化对象.

可以通过==构造函数==来快速创建多个类似的对象.

使用`new`关键词调用的函数行为被称为==实体化==.

举个例子:

不使用构造函数:

```javascript
// 创建洱海的对象
const Erhai_lake = {
    Name: "洱海",
    Age: 18,
    Gender: "男"
}
// 创建柒月的对象
const Qi_Month = {
    Name: "柒月",
    Age: 18,
    Gender: "女"
}
// 创建小良的对象
const XiaoLiang = {
    Name: "小良",
    Age: 18,
    Gender: "男"
}
```

使用构造函数:

```javascript
function ELake(Name, Age, Gender) {
    this.Name = Name
    this.Age = Age
    this.Gender = Gender
}

// 创建洱海的对象
const Erhai_lake = new ELake("洱海", 18, "男")
// 创建柒月的对象
const Qi_Month = new ELake("柒月", 18, "女")
// 创建小良的对象
const XiaoLiang = new ELake("小良", 18, "男")
```

:::warning
1. 构造函数的命名以大写字母开头.
2. 构造函数只能由`new`操作符执行.
3. 构造函数内部写`return`是无效的.
:::

## 实例成员

通过构造函数创建的对象, 被称为实例对象, ==实例对象中==的属性和方法称为==实例成员==(实例属性和实例方法).

:::warning
1. 为构造函数传入参数, 创建结构相同但值==不同的对象==.
2. 构造函数创建的实例对象==彼此独立==互不影响.
:::

```javascript
function ELake(Name) {
    this.Name = Name
}
const Erhai_lake = new ELake("洱海")
const Qi_Month = new ELake("柒月")
// 实例属性
Erhai_lake.Name = "Erhai_lake"
// 实例方法
Erhai_lake.sayHi = () => {
    console.log("Hi~")
}
console.log(Erhai_lake)
console.log(Qi_Month)
console.log(Erhai_lake === Qi_Month)
```

## 静态成员

==构造函数==的属性和方法被称为==静态成员==(静态属性和静态方法).

:::warning
1. 静态成员只能构造函数来访问.
2. 静态方法中的`this`指向构造函数.
:::

```javascript
function ELake(Name) {
    this.Name = Name
}
// 静态属性
ELake.Age = 18
// 静态方法
ELake.sayHi = function () {
    console.log(this)
}
ELake.sayHi()
console.log(ELake.Age)
```
