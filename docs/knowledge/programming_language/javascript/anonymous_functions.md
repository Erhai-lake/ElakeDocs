---
title: 匿名函数
createTime: 2024/10/02 14:53:08
---

有具名函数, 那也会有匿名函数, 匿名函数就是没有名字的函数.

```javascript
// 具名函数
function fun() { }
fun()

// 匿名函数
function() { }
```

匿名函数无法直接使用, 只能通过以下两种方法使用.

1. 函数表达式.
2. 立即执行函数.

## 函数表达式

将匿名函数赋值给一个变量, 并且通过变量名词进行调用, 我们将这个称为==函数表达式==.

```javascript
let fun = function (A) => {
    console.log(A)
}
fun("我是函数表达式")
```

可以看见函数表达式与具名函数书写类似.

:::warning
具名函数的调用可以写在任意位置, 函数表达式只能在声明后调用.

```javascript
fun("我是具名函数")
function fun(A) {
	console.log(A)
}
fun("我可以在任意位置调用, 厉不厉害你具哥~")
```

```javascript
fun("我是函数表达式") // 报错(不能在声明前调用)
let fun = function (A) => {
 	console.log(A)
}
fun("我只能在声明后调用qwq")
```
:::

### 使用场景

还没有写到, 要等WebAPI, 没事先认识一下也可以.

```html
<button>点我</button>
<script>
    let Btn = document.querySelector("button")
    Btn.onclick = function () {
        alert("我是匿名函数")
    }
</script>
```

大致意思就是, 我在网页上写了一个按钮, js里获取了这个按钮的元素, 并且做了一个点击事件.

感兴趣的可以自己复制到`html`里试试, 之前有写H5C3的, 别和我说不会(恼).

## 立即执行函数

场景: 避免全局变量直接的污染.

立即执行函数, 会在加载后立即执行, 不需要调用.

```javascript
// 方法1:可以先敲两个小括号, 然后在第一个小括号里写一个匿名函数
(function () {
    console.log("方法一")
})();

// 方法2:可以先敲一个小括号, 在小括号里写一个匿名函数, 最后在匿名函数后面在敲一个小括号
(function () {
    console.log("方法二")
}());
```

:::warning
立即执行函数结尾必须加分号, 否则他没法结束, 会报错.
:::

如果要跟参数, 可以这样写.

```javascript
// 方法1
(function (A, B) {
    console.log(A + B)
})(10, 5);

// 方法2
(function (A, B) {
    console.log(A + B)
}(10, 5));
```

