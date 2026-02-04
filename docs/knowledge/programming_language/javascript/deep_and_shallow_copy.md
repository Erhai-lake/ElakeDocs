---
title: 深浅拷贝
createTime: 2024/10/02 14:53:08
---

开发中我们经常需要复制一个对象, 如果直接用赋值, 会出现一下问题.

```javascript
const OBJ = {
    Name: "柒月",
    Age: 18
}
// 直接使用赋值
const O = OBJ

// 复制成功了
console.log(O)
// {Name: "柒月", Age: 18}

// 这个时候我们修改一下对象O
O.Name = "洱海"

console.log(O)
// {Name: "洱海", Age: 18}
console.log(OBJ)
// {Name: "洱海", Age: 18}
```

发现了么, 我修改对象`O`, 会导致对象`Obj`一起被修改, 这是因为, 虽然复制成功了, 实际上是将`Obj`对象的引用复制给了变量`O`, 因此, `O`和`Obj`指向内存中的同一个对象, 修改`O`会导致`Obj`也发生变化.

这个时候就要使用拷贝了, 拷贝有浅拷贝和深拷贝.

浅拷贝和深拷贝只针对引用类型.

## 浅拷贝

拷贝的是地址.

常见的方法:

1. 拷贝对象.
   1. `Object.assgin()`
   2. `{...OBJ}`
2. 拷贝数组.
   1. `Array.prototype.concat()`
   2. `[...ARR]`

```javascript
const OBJ = {
    Name: "柒月",
    Age: 18
}
// 浅拷贝-拷贝对象

// 方法1
// const O = {}
// Object.assign(O, OBJ)

// 方法2
const O = { ...OBJ }

console.log(O)
// {Name: "柒月", Age: 18}

// 这个时候我们修改一下对象O
O.Name = "洱海"

console.log(O)
// {Name: "洱海", Age: 18}
console.log(OBJ)
// {Name: "柒月", Age: 18}
```

看起来似乎解决问题了, 但是还是有问题的:

```javascript
const OBJ = {
    Name: "柒月",
    Age: 18,
    Two: {
        A: "B"
    }
}
const O = { ...OBJ }
// 这个时候我们修改一下对象O
O.Name = "洱海"
O.Two.A = "洱海"

console.log(O)
// {Name: "洱海", Age: 18, Two: {A: "洱海}}
console.log(OBJ)
// {Name: "柒月", Age: 18, Two: {A: "洱海}}
```

发现了么, 修改对象`O`里的对象`Two`里面的属性还是会影响对象`Obj`(绕绕的).

浅拷贝它确实创建了一个新的对象, 但是这个新对象中的属性如果是基本类型则直接复制值.

如果是对象(`Two`), 则复制的是对象的引用.

这就是所谓的==浅拷贝==.

简单来说, 单层对象没问题, 如果是多层对象就有问题了.

## 深拷贝

拷贝的是对象.

常见的方法:.

1. 通过递归实现深拷贝.
2. 通过`JSON.stringify()`实现.

### 通过递归实现

```javascript
// 我在这里写的递归是通用的, 你完全可以直接复制粘贴走
// 这个代码块就当做使用说明了
const DeepCopy = (OldObj) => {
    let NewObj = {}
    for (let K in OldObj) {
        if (OldObj[K] instanceof Array) {
            // 处理数组
            NewObj[K] = []
            DeepCopy(OldObj[K])
        } else if (OldObj[K] instanceof Object) {
            // 处理对象
            NewObj[K] = {}
            DeepCopy(OldObj[K])
        } else {
            // 处理正常
            NewObj[K] = OldObj[K]
        }
    }
    return NewObj
}

const 浅拷贝 = {
    Name: "柒月",
    Age: 18,
    A: ["柒", "月"],
    O: {
        A: "B"
    }
}
const O = DeepCopy(浅拷贝)

O.Name = "洱海"
O.A[0] = "洱"
O.A[1] = "海"
O.O.A = "C"

console.log(O)
// { Name: "洱海", Age: 18, A: [ "洱", "海" ], O: { A: "C" } }
console.log(浅拷贝)
// { Name: "柒月", Age: 18, A: [ "柒", "月" ], O: { A: "B" } }
```

### 通过`JSON.stringify()`实现

这个方法可谓是十分简单.

经常洗钱的朋友应该会觉得亲切.

```javascript
const 浅拷贝 = {
    Name: "柒月",
    Age: 18,
    A: ["柒", "月"],
    O: {
        A: "B"
    }
}

// 将对象转换为字符串在转换为对象
// 转回为字符串的时候就已经和原版的对象没有任何关系了
const O = JSON.parse(JSON.stringify(浅拷贝))
O.Name = "洱海"
O.A[0] = "洱"
O.A[1] = "海"
O.O.A = "C"

console.log(O)
// { Name: "洱海", Age: 18, A: [ "洱", "海" ], O: { A: "C" } }
console.log(浅拷贝)
// { Name: "柒月", Age: 18, A: [ "柒", "月" ], O: { A: "B" } }
```
