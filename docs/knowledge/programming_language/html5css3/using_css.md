---
title: 使用 CSS
createTime: 2024/10/02 14:53:07
---

目标: 使用**CSS**画两个方块.

::::demo

:::code-tabs
@tab:active HTML
```html
<div class="a">div-a</div>
<div class="b">div-b</div>
```

@tab CSS
```css
.a{
    width: 100px;
    height: 100px;
    background-color: orange;
}
.b{
    width: 200px;
    height: 200px;
    background-color: blue;
}
```
:::

::::

## 解析

`width`: 宽度, 数值.

`height`: 高度, 数值.

`background-color`: 背景颜色, 颜色值.

将`class`为`a`的`div`标签 的宽设置为`100px`, 高也设置为`100px`, 并将背景颜色设置为`orange`.

将`class`为`b`的`div`标签 的宽设置为`200px`, 高也设置为`200px`, 并将背景颜色设置为`blue`.
