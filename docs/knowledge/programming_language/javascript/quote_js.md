---
title: 引用 JS
createTime: 2024/10/02 14:53:08
---

## 内部 JS

直接写在html文件里, 用`script`标签包住.

例子:

:::demo
```html
<script>
	function test() {
		alert("Hello World!")
    }
</script>
<button onclick="test()">测试按钮</button>
```
:::

## 外部 JS

代码写在以`.js`后缀的文件里, 通过`script`标签引入到html页面中.

例子:

::::demo

:::code-tabs
@tab:active HTML
```html
<script src="assets/quote_js"></script>
<button onclick="test()">测试按钮</button>
```

@tab JS
```javascript
function test() {
	alert("Hello World!")
}
```
:::

::::

## 内联 JS

代码写在标签内部(了解即可, 后面Vue框架才是重点).

例子:

::::demo
```html
<button onclick="alert('Hello World!')">测试按钮</button>
```
::::
