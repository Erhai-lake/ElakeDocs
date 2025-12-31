---
title: 逻辑中断
createTime: 2024/10/02 14:53:08
---

在之前那篇具名函数的文档中, 我们写了一个简单的加法函数, 如下:

```javascript
function getSum(Num1 = 0, Num2 = 0) {
    console.log(Num1 + Num2)
}

getSum()

// 输出 0
```

这里是用了参数默认值的方式, 避免了不传参返回`NaN`, 还有另一种写法:

```javascript
function getSum(Num1, Num2) {
    Num1 = Num1 || 0
    Num2 = Num2 || 0
    console.log(Num1 + Num2)
}

getSum()

// 输出 0
```

这种写法类似于参数默认值的写法, 下面就来解释一下, 什么是逻辑中断.

## 逻辑运算符里的断路

断路: 只存在于`&&`和`||`中, 但满足一定条件会让右边代码不执行.

|   符号   |      断路条件      |
|:------:|:--------------:|
|  `&&`  | 左边为`false`就断路. |
| `\|\|` | 左边为`true`就断路.  |

原因: 通过左边能得到整个式子的结果, 因此没必要再判断右边.

运算结果: 无论`&&`还是`||`, 运算结果都是被最后执行的表达式, 一般用变量赋值.

### 举个例子

```javascript
console.log(false && 5 + 5)
// 返回 false && 的左边是false, 所以不会在执行右边的代码了

console.log(true && 5 + 5)
// 返回 10 && 的左边是true, 所以不会在执行左边的代码了

console.log(10 && 20)
// 返回 20 如果两侧都是true, 则返回最后一个

console.log(false|| 5 + 5)
// 返回 10 && 的左边是false, 所以不会在执行左边的代码了

console.log(true || 5 + 5)
// 返回 true && 的左边是true, 所以不会在执行右边的代码了

console.log(10 || 20)
// 返回 10 返回第一个true
```

### 回到刚刚的例子

```javascript
function getSum(Num1, Num2) {
    Num1 = Num1 || 0
  	// 如果Num1有值, 就执行Num1 = Num1, 否则执行Num1 = 0
    Num2 = Num2 || 0
  	// 如果Num2有值, 就执行Num2 = Num2, 否则执行Num2 = 0
    console.log(Num1 + Num2)
}

getSum()

// 输出 0
```
