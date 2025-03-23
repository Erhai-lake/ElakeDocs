# 函数进阶

## 函数提升

函数提升与变量提升比较类似, 是指函数在声明之前即可被调用

举个例子:

```js
Fn()
function Fn() {
    console.log('函数提升')
}
```

JS只提升函数声明, 不提升函数调用

```js
Fun()
var Fun = function () {
    console.log('函数提升')
}
```

这个是函数表达式, 不是声明变量, 是赋值, 这样写会报错的

## 函数参数

### 动态参数

比如:写一个求和参数

不管用户传入几个实参, 都要把和求出来

```js
getSum(2, 3)
getSum(1, 2, 3)
getSum(1, 2, 3, 4, 5, 6)
```

`arguments`是函数内部内置的**伪数组**变量, 他包含了调用函数时传入的所有实参

```js
function getSum() {
    console.log(arguments)
}

getSum(2, 5, 6, 7, 8, 5)
```

返回: `Arguments(6) [2, 5, 6, 7, 8, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]`

```js
function getSum() {
    let Sum = 0
    for (let i = 0; i < arguments.length; i++) {
        Sum += arguments[i]
    }
    return Sum
}

console.log(getSum(2, 5, 6, 7, 8, 5))
// 33
```

### 剩余参数

剩余参数允许我们将一个不定数量的参数表示为一个数组

`...`是语法符号, 置于最末函数形参之前, 用于获取**多余**的实参

借助`...`获取的剩余实参, 是个**真数组**

```js
function getSum(...Arr) {
    let Sum = 0
    for (let i = 0; i < Arr.length; i++) {
        Sum += Arr[i]
    }
    return Sum
}

console.log(getSum(2, 5, 6, 7, 8, 5))
// 33
```

开发中, 还是提倡多使用**剩余参数**

### 展开运算符

展开运算符`...`, 将一个数组进行展开

```js
const Arr = [1, 5, 6, 1, 2]
console.log(...Arr)
// 1 5 6 1 2
```

这个方式不会修改原数组

常见用法: 求数值最大值, 最小值, 合并数组等

```js
const Arr = [1, 5, 6, 1, 2]
console.log(Math.max(...Arr))
// 6
```

#### 展开运算符和剩余参数区别

剩余参数: **函数参数使用, 得到真数组**

展开运算符: **数组中使用**, 数组展开

## 箭头函数

> 终于写到箭头函数了, 你们肯定已经见过了, 我之前很多文章的函数, 都是用箭头函数的, 而不是用`function`

箭头函数的目的是更简短的函数写法并且不绑定`this`, 箭头函数的语法比函数表达式更简洁

箭头函数更适用于那些本来**需要匿名函数的地方**

```js
const Fn = (Num) => {
    console.log(Num)
}

Fn(114514)
// 114514
```

只有一个形参的时候, 可以省略小括号, 但是...真的好看么...

```js
const Fn = Num => {
    console.log(Num)
}

Fn(114514)
// 114514
```

只有一行代码的时候, 可以省略大括号

```js
const Fn = (Num) => console.log(Num)

Fn(114514)
// 114514
```

只有一行代码的时候, 可以省略`return`

```js
const Fn = (Num) => Num + Num

console.log(Fn(114514))
// 229028
```

可以直接返回一个对象

```js
const Fn = (Num) => ({Num: Num})

console.log(Fn(114514))
// {Num: 114514}
```

回调函数也可以使用

```html
<div></div>
<script>
    const Test = document.querySelector('.Test')
    Test.addEventListener('click',  () => console.log('被点击'))
</script>
```

综上所述, 你就说方不方便

:::warning
箭头函数没有`arguments`动态参数, 但是有剩余参数`...args`
:::

### 箭头函数的this

在箭头函数出现之前, 每一个新函数根据它是被**如何调用的**来定义这个函数的`this`值, 非常令人讨厌

```js
// window
console.log(this)

// 普通函数
function Fn() {
    // window
    console.log(this)
}
window.Fn()

// 对象方法里面的this
const Obj = {
    name: 'test',
    getNum: function () {
        // Obj
        console.log(this)
    }
}
Obj.getNum()
```

**箭头函数不会创建自己的this**, 它只会从自己的作用域链的上一层沿用`this`

```js
// 箭头函数的this, 是上一层作用域的this
const Fn = () => {
    // window
    console.log(this)
}
Fn()

// 对象方法的箭头函数this
const Obj1 = {
    name: 'test',
    getNum: () => {
        // window
        console.log(this)
    }
}
Obj1.getNum()

const Obj2 = {
    name: 'test',
    getNum: function () {
        // obj
        console.log(this)
        const Count = () => {
            // obj
            console.log(this)
        }
        Count()
    }
}
Obj2.getNum()
```

也就是说

```html
<div></div>
<script>
    const Test = document.querySelector('.Test')
    Test.addEventListener('click', () => console.log(this))
</script>
```

`this`指向的是`window`, 所以回调函数为了简便, 还是不太推荐使用箭头函数的, 除非不需要使用`this`
