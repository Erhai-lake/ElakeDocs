---
title: location 对象
createTime: 2024/10/02 14:53:08
---

location的数据类型是对象, 他拆分并保存了URL地址的各个组成部分.

## 常用的属性和方法

### `href`

获取完整的URL地址, 对其赋值时用于地址的跳转.

:::demo
```html
<style>
	div {
		height: 300px;
	}
</style>
<div>B站</div>
<script>
    const DIV = document.querySelector("div")
	DIV.addEventListener("click", () => {
        location.href = "https://www.bilibili.com"
    })
</script>
```
:::

### `search`

获取地址中携带的参数, 就是符号`?`后面的内容.

:::demo
```html
<style>
	div {
		height: 300px;
	}
</style>
<div>带参</div>
<script>
    console.log(location.search)
    const Div = document.querySelector("div")
    Div.addEventListener("click", () => {
        location.search = "?c=b&encode=text"
    })
</script>
```
:::

### `hash`

获取地址中的哈希值, 就是符号`#`后面的内容.

了解就好, 现在用不到, 就是根据这个哈希值, 获取页面组件的(Vue路由).

:::demo
```html
<a href="#/A">锚点A</a>
<a href="#/B">锚点B</a>
<a href="#/C">锚点C</a>
<div>读取</div>
<script>
    const Div = document.querySelector("div")
    Div.addEventListener("click", () => {
    	alert(location.hash)
	})
</script>
```
:::

### `reload`

刷新页面.

如果传入`true`, 可以强制刷新.

:::demo
```html
<style>
    body {
		height: 500px;
        background: url("https://www.loliapi.com/acg/");
    }
</style>
<div>刷新</div>
<br>
<script>
    const DIV = document.querySelector("div")
    // 刷新
    DIV.addEventListener("click", () => {
        location.reload()
    })
</script>
```
:::
