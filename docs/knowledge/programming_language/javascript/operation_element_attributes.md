---
title: 操作元素属性
createTime: 2024/10/02 14:53:08
---

除了操作元素内容外, 还可以通过JS设置或修改标签元素属性, 比如通过`src`更换图片.

`对象.属性名 = 属性值`

:::demo
```html
<script>
	function switchImg() {
		const IMG = document.querySelector("img")
		IMG.src = "https://www.loliapi.com/acg"
		IMG.width = 1000
    }
</script>
<img src="assets/304ba504f27b147a71e00dd072a6be3dbb43138e.gif" width="700" alt="img">
<button onclick="switchImg()">切换图片</button>
```
:::
