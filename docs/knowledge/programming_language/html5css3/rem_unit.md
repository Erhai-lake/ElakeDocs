---
title: rem 单位
createTime: 2024/10/02 14:53:07
---

rem单位, 是==相对单位==.

rem单位是相对于==Html标签的字号==计算结果.

1rem=1Html 字号大小.

例子:

::::demo

:::code-tabs
@tab:active HTML
```html
<div></div>
```

@tab CSS
```css
html {
    font-size: 20px;
}

div {
    width: 10rem;
    height: 10rem;
    background-color: red;
}
```
:::

::::
