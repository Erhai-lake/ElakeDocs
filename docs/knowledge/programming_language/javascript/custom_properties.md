---
title: 自定义属性
createTime: 2024/10/02 14:53:08
---

标准属性: 标签天生自带的属性, 比如`class`, `id`, `title`等, 可以直接使用点语法操作的, 比如`disabled`, `checked`, `selected`.

自定义属性: `data-自定义`, 这些属性前面是`data-`开头的就是自定义属性.

## 获取自定义属性对象

`对象.dataset`

:::demo
```html
<!-- data-xx="这是自定义属性" -->
<p data-a1="这是自定义属性1" data-a2="这是自定义属性2">TEST</p>
<button onclick="test()">测试</button>
<script>
	function test() {
		const P = document.querySelector("p")
		console.log(P.dataset)
		// 不用在意这个遍历, 我只是为了他能将对象正确显示在弹窗里...
		alert(Object.keys(P.dataset).map(key => `${key}: ${P.dataset[key]}`).join("\n"))
    }
</script>
```
:::

## 获取自定义属性

`对象.dataset.自定义属性名`

:::demo
```html
<!-- data-xx="这是自定义属性" -->
<p data-a1="这是自定义属性1">TEST</p>
<button onclick="test()">测试</button>
<script>
	function test() {
		const P = document.querySelector("p")
		alert(P.dataset.a1)
    }
</script>
```
:::

## 修改自定义属性

`对象.dataset.自定义属性名 = 新值`

:::demo
```html
<!-- data-xx="这是自定义属性" -->
<p data-a1="这是自定义属性1">TEST</p>
<button onclick="test()">测试</button>
<script>
	function test() {
		const P = document.querySelector("p")
		P.dataset.a1 = "这是修改后的自定义属性1"
		alert(P.dataset.a1)
    }
</script>
```
:::

::::warning
如果你的自定义属性有大写字母, 那么你应该用小写才能引用, 例子可以看下面的.

我这个例子写了一个`data-A`的自定义属性, 那么我引用的时候, 就需要`P.dataset.a`.

如果写成`P.dataset.A`, 你将获取不到任何值.

你不信试试:

:::demo
```html
<p data-A="这是自定义属性1">TEST</p>
<button onclick="test('A')">使用 A 获取</button>
<button onclick="test('a')">使用 a 获取</button>
<script>
	function test(attr) {
		const P = document.querySelector("p")
		alert(P.dataset[attr])
    }
</script>
```
:::
::::

## 写点东西玩一下

p标签的内容就是自定义属性的内容.

:::demo
```html
<p data-a="这是自定义属性">点击按钮</p>
<button onclick="test()">测试</button>
<script>
	function test() {
		const P = document.querySelector("p")
		P.textContent = P.dataset.a
	}
</script>
```
:::
