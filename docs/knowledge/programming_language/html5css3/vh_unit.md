---
title: vh 单位
createTime: 2024/10/02 14:53:07
---

vh单位, 是==相对视口高度==的计算结果, 可以直接实现移动端适配效果.

1vh=1/100 视口高度.

例子:

::::demo

:::code-tabs
@tab:active HTML
```html
<div></div>
```

@tab CSS
```css
div {
	width: 50vh;
	height: 50vh;
	background-color: red;
}
```
:::

::::

## 问题

vw和vh不能混用, vh是视口高度, ==全面屏视口高度尺寸大==, 如果混用可能导致==盒子变形==.
