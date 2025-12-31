---
title: 处理 this
createTime: 2024/10/02 14:53:08
---

`this`是JS中最具魅惑的知识点, 不同的应用场合, `this`的取值可能会有意想不到的结果, 在此我们以往都是根据**`this`默认的取值的情况下, 进行的归纳和总结.

这篇文档, 我们就来专门写写`this`(这里同一在浏览器环境下).

## this 指向

### 普通函数

普通函数的调用方式决定了`this`的值, 也就是谁调用的, `this`就指向谁.

```javascript
function test1() {
    console.log(this)
    // window
}
test1()

const test2 = function () {
    console.log(this)
    // window
}
test2()

const OBJ = {
    test3: function () {
        console.log(this)
        // Object
    }
}
OBJ.test3()

document.querySelector("button").addEventListener("click", function () {
    console.log(this)
    // button
})
```

```javascript
"use strict"
function test1() {
    console.log(this)
    // undefined
}
test1()

const test2 = function () {
    console.log(this)
    // undefined
}
test2()

const OBJ = {
    test3: function () {
        console.log(this)
        // Object
    }
}
OBJ.test3()

document.querySelector("button").addEventListener("click", function () {
    console.log(this)
    // button
})
```

普通函数没有明确调用者时`this`值为`window`, 严格模式下没有调用者时`this`的值为`undefined`.

### 箭头函数

箭头函数中的`this`与普通函数完全不同, 也不受调用方式的影响, 事实上**箭头函数中并不存在`this`**.

1. 箭头函数会默认帮我们绑定外层`this`的值, 所以在箭头函数中`this`的值和外层的`this`是一样的.
2. 箭头函数中的`this`引用的就是最近作用域中的`this`.
3. 向外层作用域中, 一层一层查找`this`, 直到有`this`的定义.

```javascript
const test1 = () => {
    console.log(this)
    // window
}
test1()

const OBJ = {
    test2:  () => {
        console.log(this)
        // window
    }
}
OBJ.test2()

document.querySelector("button").addEventListener("click", () => {
    console.log(this)
    // window
})
```

:::warning
由于箭头函数的特殊性.

事件回调函数里和基于原型的面向对象都不推荐使用箭头函数.
:::

## 改变 this

JS中允许指定函数中的`this`指向, 共有3个方法.

### call

`fun.call(thisArg, arg1, arg2, ...)`

`thisArg`: 在函数运行时指向的`this`值.

`arg`: 传递的其他参数.

返回值: 就是返回函数的返回值, 因为他就是调用函数.

```javascript
const OBJ = {
    Name: "柒月"
}
function fun(X, Y) {
    console.log(this)
    // window
    return X + Y
}

console.log(fun.call(Obj, 2, 3))
```

### apply

`fun.apply(thisArg, argsArray)`

`thisArg`: 在函数运行时指向的`this`值.

`argsArray`: 传递的其他参数, 必须用数组包着.

返回值: 就是返回函数的返回值, 因为他就是调用函数.

```javascript
const OBJ = {
    Name: "柒月"
}
function fun(X, Y) {
    console.log(this)
    // window
    return X + Y
}

console.log(fun.apply(OBJ, [2, 3]))
```

`apply`主要与数组有关, 例如使用`Math.max()`去数组最大值.

```javascript
const ARR = [1, 5, 66, 448, 3, 114514]
const MAX = Math.max.apply(Math, ARR)
const MIN = Math.min.apply(Math, ARR)

console.log(MAX, MIN)
// 114514 1
```

### bind

`fun.bind(thisArg, arg1, arg2, ...)`

`thisArg`: 在函数运行时指向的`this`值.

`arg`: 传递的其他参数.

返回值: 由指定的`this`值和初始化参数改造原函数拷贝(新函数).

```javascript
const OBJ = {
    Name: "柒月"
}
function fun1(X, Y) {
    console.log(this)
    // window
    return X + Y
}

const FUN2 = fun1.bind(OBJ, 2, 3)
console.log(FUN2())
```

因此, 当我们只想改变`this`指向, 并且不想调用这个函数时, 可以使用`bind`, 比如改变定时器内部的`this`执行.

例如:有一个按钮, 点击禁用, 3秒后恢复.

```javascript
const BUT = document.querySelector("button")
BUT.addEventListener("click", function () {
    // 禁用按钮
    this.disabled = true
    setTimeout(function () {
        // 在这里面, 我们要将原来的window改成button
        this.disabled = false
    }.bind(But), 3000)
})
```

### 总结

* 相同点.
  * 都可以改变函数内部的`this`指向.
* 区别点.
  * `call`和`apply`会调用函数, 并且改变函数内部`this`指向.
  * `call`和`apply`传递的参数不一样, `call`传递参数`Aru1`, `Aru2...`形式, `apply`必须数组形式`[Arg]`.
  * **`bing`不会调用函数, 可以改变函数内部`this`指向.
* 主要应用场景.
  * `call`调用函数并且可以传递参数.
  * `apply`经常跟数组有关系.比如借助与数学对象实现数组最大值最小值.
  * **bind不调用函数, 但是还想改变`this`指向.比如改变定时器内部的`this`指向**.
