---
title: 函数进阶
createTime: 2024/10/02 14:53:08
---

## 函数提升

函数提升与变量提升比较类似, 是指函数在声明之前即可被调用.

举个例子:

```javascript
fn()
function fn() {
    console.log("函数提升")
}
```

JS只提升函数声明, 不提升函数调用.

```javascript
fun()
var fun = function () {
    console.log("函数提升")
}
```

这个是函数表达式, 不是声明变量, 是赋值, 这样写会报错的.

## 函数参数

### 动态参数

比如: 写一个求和参数.

不管用户传入几个实参, 都要把和求出来.

```javascript
getSum(2, 3)
getSum(1, 2, 3)
getSum(1, 2, 3, 4, 5, 6)
```

`arguments`是函数内部内置的==伪数组==变量, 他包含了调用函数时传入的所有实参.

```javascript
function getSum() {
    console.log(arguments)
}

getSum(2, 5, 6, 7, 8, 5)
```

返回: `Arguments(6) [2, 5, 6, 7, 8, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]`.

```javascript
function getSum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(getSum(2, 5, 6, 7, 8, 5))
// 33
```

### 剩余参数

剩余参数允许我们将一个不定数量的参数表示为一个数组.

`...`是语法符号, 置于最末函数形参之前, 用于获取==多余==的实参.

借助`...`获取的剩余实参, 是个==真数组==.

```javascript
function getSum(...Arr) {
    let sum = 0
    for (let i = 0; i < Arr.length; i++) {
        sum += Arr[i]
    }
    return sum
}

console.log(getSum(2, 5, 6, 7, 8, 5))
// 33
```

开发中, 还是提倡多使用==剩余参数==.

### 展开运算符

展开运算符`...`, 将一个数组进行展开.

```javascript
const ARR = [1, 5, 6, 1, 2]
console.log(...ARR)
// 1 5 6 1 2
```

这个方式不会修改原数组.

常见用法: 求数值最大值, 最小值, 合并数组等.

```javascript
const ARR = [1, 5, 6, 1, 2]
console.log(Math.max(...ARR))
// 6
```

#### 展开运算符和剩余参数区别

剩余参数: ==函数参数使用, 得到真数组==.

展开运算符: ==数组中使用, 数组展开==.

## 箭头函数

> 终于写到箭头函数了, 你们肯定已经见过了, 我之前很多文章的函数, 都是用箭头函数的, 而不是用`function`.

箭头函数的目的是更简短的函数写法并且不绑定`this`, 箭头函数的语法比函数表达式更简洁.

箭头函数更适用于那些本来==需要匿名函数的地方==.

```javascript
const fn = (num) => {
    console.log(num)
}

fn(114514)
// 114514
```

只有一个形参的时候, 可以省略小括号.

```javascript
const fn = num => {
    console.log(num)
}

fn(114514)
// 114514
```

只有一行代码的时候, 可以省略大括号.

```javascript
const fn = (num) => console.log(num)

fn(114514)
// 114514
```

只有一行代码的时候, 可以省略`return`.

```javascript
const fn = (num) => num + num

console.log(fn(114514))
// 229028
```

可以直接返回一个对象.

```javascript
const fn = (num) => ({num: num})

console.log(fn(114514))
// {num: 114514}
```

回调函数也可以使用.

```html
<div></div>
<script>
    const TEST = document.querySelector(".Test")
    TEST.addEventListener("click",  () => console.log("被点击"))
</script>
```

综上所述, 你就说方不方便.

:::warning
箭头函数没有`arguments`动态参数, 但是有剩余参数`...args`.
:::

### 箭头函数的 this

在箭头函数出现之前, 每一个新函数根据它是被==如何调用的==来定义这个函数的`this`值, 非常令人讨厌.

```javascript
// window
console.log(this)

// 普通函数
function fn() {
    // window
    console.log(this)
}
window.fn()

// 对象方法里面的this
const OBJ = {
    name: "test",
    getNum: function () {
        // OBJ
        console.log(this)
    }
}
OBJ.getNum()
```

==箭头函数不会创建自己的this==, 它只会从自己的作用域链的上一层沿用`this`.

```javascript
// 箭头函数的this, 是上一层作用域的this
const fn = () => {
    // window
    console.log(this)
}
fn()

// 对象方法的箭头函数this
const OBJ1 = {
    name: "test",
    getNum: () => {
        // window
        console.log(this)
    }
}
OBJ1.getNum()

const OBJ2 = {
    name: "test",
    getNum: function () {
        // obj
        console.log(this)
        const count = () => {
            // obj
            console.log(this)
        }
        count()
    }
}
OBJ2.getNum()
```

也就是说.

```html
<div></div>
<script>
    const TEST = document.querySelector(".Test")
    TEST.addEventListener("click", () => console.log(this))
</script>
```

`this`指向的是`window`, 所以回调函数为了简便, 还是不太推荐使用箭头函数的, 除非不需要使用`this`.
