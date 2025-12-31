---
title: 操作表单元素
createTime: 2024/10/02 14:53:08
---

表单很多情况, 也需要修改属性, 比如密码框, 点击小眼睛, 显示密码, 本质就是将密码框, 改为了文本框.

正常的有属性有取值的, 跟其他标签属性没有任何区别.

获取: `对象.属性名`.

设置: `对象.属性名 = 新值`.

## 获取输入框值

`对象.value`

:::demo
```html
<input type="text" value="测试内容">
<button onclick="test()">测试</button>
<script>
	function test() {
		const INPUT = document.querySelector("input")
		alert(INPUT.value)
		// 也可以用innerHTML获取, 但是innerHTML是获取标签内部的内容, 而value是获取输入框的值
		console.log(INPUT.value)
		console.log(INPUT.innerHTML)
    }
</script>
```
:::

所以要拿到输入框内容, 只能用`value`.

## 修改输入框值

`对象.value = 新值`

:::demo
```html
<input type="text" value="测试内容">
<button onclick="test()">测试</button>
<script>
	function test() {
		const INPUT = document.querySelector("input")
		INPUT.value = "不是测试的测试内容"
		alert(INPUT.value)
		console.log(INPUT.value)
		console.log(INPUT.innerHTML)
    }
</script>
```
:::

## 获取表单类型

`对象.type`

:::demo
```html
<input type="text" value="测试内容">
<button onclick="test()">测试</button>
<script>
	function test() {
		const INPUT = document.querySelector("input")
		alert(INPUT.type)
    }
</script>
```
:::

## 修改表单类型

`对象.type = 新值`

:::demo
```html
<input type="text" value="测试内容">
<button onclick="test()">测试</button>
<script>
	function test() {
		const INPUT = document.querySelector("input")
		INPUT.type = "password"
		alert(INPUT.type)
    }
</script>
```
:::

## 获取选择框选择

我们学H5的时候都知道, 下面这个是多选框, 并且用`checked`默认勾选了.

```html
<input type="checkbox" checked>
```

我们打印一下, 看看`checked`属性发生了什么变化.

:::demo
```html
<input type="checkbox">
<button onclick="test()">测试</button>
<script>
	function test() {
		const INPUT = document.querySelector("input")
		alert(INPUT.checked)
    }
</script>
```
:::

可以看见, 没有写`checked`的时候, `checked`属性是`false`, 写了就是`true`了.

## 修改选择框选择

那么同样的, 我们一样是可以使用JS控制这个属性.

`对象.checked = true|false`

:::demo
```html
<input type="checkbox">
<button onclick="test()">测试</button>
<script>
	function test() {
		const INPUT = document.querySelector("input")
		INPUT.checked = !INPUT.checked
    }
</script>
```
:::

## 获取按钮禁用状态

`对象.checked`

都是些和上面重复的东西, 不想写这么多了...

这是按钮

`<button>按钮</button>`

这是按钮, 但是禁用

`<button disabled>按钮</button>`

用JS获取状态.

:::demo
```html
<button onclick="test()">测试</button>
<script>
	function test() {
		const BUTTON = document.querySelector("button")
		alert(BUTTON.disabled)
    }
</script>
```
:::

## 修改按钮禁用状态

`对象.checked = true|false`

:::demo
```html
<button class="test">按钮</button>
<button onclick="test()">测试</button>
<script>
	function test() {
		const BUTTON = document.querySelector(".test")
		BUTTON.disabled = !BUTTON.disabled
    }
</script>
```
:::