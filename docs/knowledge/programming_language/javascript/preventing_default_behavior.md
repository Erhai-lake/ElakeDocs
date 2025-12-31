---
title: 阻止默认行为
createTime: 2024/10/02 14:53:08
---

之前讲了阻止传播, 来补个知识点, 阻止默认行为.

我们在某些情况下需要阻止默认行为的发生, 比如阻止链接跳转, 表单域跳转等.

`event.preventDefault()`

## 表单域跳转

:::demo
```html
<style>
	div {
		height: 200px;
	}
</style>
<div>
	<label for="checkbox">是否阻止默认行为: <input type="checkbox" id="checkbox" checked></label>
	<form action="https://www.bilibili.com">
		<input type="submit" value="打开B站">
	</form>
</div>
<script>
	const CHECKBOX = document.querySelector("#checkbox")
    document.querySelector("form").addEventListener("submit", (event) => {
		if (CHECKBOX.checked) event.preventDefault()
    })
</script>
```
:::

## 链接跳转

:::demo
```html
<style>
	div {
		height: 200px;
	}
</style>
<div>
	<label for="checkbox">是否阻止默认行为: <input type="checkbox" id="checkbox" checked></label>
	<a href="https://www.bilibili.com">打开B站</a>
</div>
<script>
	const CHECKBOX = document.querySelector("#checkbox")
    document.querySelector("a").addEventListener("click", (event) => {
		if (CHECKBOX.checked) event.preventDefault()
    })
</script>
```
:::
