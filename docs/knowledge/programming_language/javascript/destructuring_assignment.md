---
title: 解构赋值
createTime: 2024/10/02 14:53:08
---

## 数组解构

先看两个代码块.

```javascript
const ARR = [100, 60, 80]

// 最大值
console.log(ARR[0])
// 最小值
console.log(ARR[1])
// 平均值
console.log(ARR[2])
```

```javascript
const ARR = [100, 60, 80]
const Max = ARR[0]
const Min = ARR[1]
const Avg = ARR[2]

// 最大值
console.log(Max)
// 最小值
console.log(Min)
// 平均值
console.log(Avg)
```

以上两个代码块的, 要么容易忘记数组内记的值, 要么太麻烦, 有什么两全其美的方法呢?

```javascript
const [Max, Min, Avg] = [100, 60, 80]

// 最大值
console.log(Max)
// 最小值
console.log(Min)
// 平均值
console.log(Avg)
```

### 基本语法

1. 赋值运算符`=`左侧的`[]`用于批量声明变量, 右侧数组的单元值将被赋值给左侧的变量.
2. 变量的顺序对应数组单元值的位置依次进行赋值操作.

```javascript
// 普通的数组
const ARR = [1, 2, 3]
// 批量声明变量
// 同时将1 2 3赋值给A B C
const [A, B, C] = ARR
```

也可以用于交换两个变量.

```javascript
let A = 1
let B = 3;
[A, B] = [B, A]
console.log(A)
console.log(B)
```

:::warning
`let B = 3;`尾部的分号是必须要加的, 不加会报错.
:::

如果引用了没有的值, 返回`undefined`.

```javascript
const [A, B, C, D] = [1, 2, 3]

console.log(A)
// 1
console.log(B)
// 2
console.log(C)
// 3
console.log(D)
// undefined
```

可以使用剩余参数.

```javascript
const [A, B, ...C] = [1, 2, 3, 4, 5]

console.log(A)
// 1
console.log(B)
// 2
console.log(C)
// [3, 4, 5]
```

可以设置默认值.

```javascript
const [A, B = "aaa"] = [1]

console.log(A)
// 1
console.log(B)
// aaa
```

可以按需引入.

```javascript
const [A, , , , B] = [1, 2, 3, 4, 5]

console.log(A)
// 1
console.log(B)
// 5
```

支持多维度数组的结构.

```javascript
const [A, [B, C]] = [1, [2.1, 2.2]]

console.log(A)
// 1
console.log(B)
// 2.1
console.log(C)
// 2.2
```

## 对象结构

1. 赋值运算符 = 左侧的 {} 用于批量声明变量, 右侧对象的属性值将被赋值给左侧的变量.
2. 对象属性的值将被赋值给与属性名==相同的==变量.
3. 注意解构的变量名不要和外面的变量名冲突, 否则会报错.
4. 对象中找不到与变量名一致的属性时, 变量值为`undefined`.

```javascript
const User = {
    Name: "张三",
    Age: 18
}

const { Name, Age } = User

console.log(Name)
// 张三
console.log(Age)
// 18
```

也可以在引用的时候改名.

```javascript
const User = {
    Name: "张三",
    Age: 18
}
const { Name: A, Age: B } = User

console.log(A)
// 张三
console.log(B)
// 18
```

解构数组对象.

```javascript
const Users = [
    {
        Name: "张三",
        Age: 18
    }
]
const [{ Name, Age }] = Users

console.log(Name)
// 张三
console.log(Age)
// 18
```

解构多级对象.

```javascript
const Users = {
    "A": {
        Name: "张三"
    },
    "B": [
        {
            Age: 18
        }
    ]
}
const { A: { Name }, B: [{ Age }] } = Users

console.log(Name)
// 张三
console.log(Age)
// 18
```

