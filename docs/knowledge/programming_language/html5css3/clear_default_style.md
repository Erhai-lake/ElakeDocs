---
title: 清除默认样式
createTime: 2024/10/02 14:53:07
---

清除标签默认的样式, 比如默认的内外边距.

## 全局去除默认样式

```css
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 14px;
}
```

## 超链接

```css
a {
    text-decoration: none;
    color: #333;
}

a:hover,
a:visited,
a:link,
a:active {
    color: #333;
}
```

## 列表项目符号

```css
ul,
ol {
    list-style: none;
}
```

## 图片

```css
img {
    vertical-align: top;
    border: none;
}
```

## 按钮

```css
.button {
    border: 0;
    background-color: none;
    outline:none;
    -webkit-appearance: none;
}
```

## 下拉列表

```css
select {
    border: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image: url("http://ourjs.github.io/static/2015/arrow.png");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: right center;
    background-color: transparent;
    padding-right: 14px;
}
```

## 标题

```css
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
}
```

## 表单组件

```css
input,
textarea {
    outline: none;
    border: none;
}

textarea {
    resize: none;
    overflow: auto;
}
```

## 表单组件 number 加减号

```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}

input {
    -moz-appearance: textfield;
}
```

## 斜体i

```css
i {
    font-style: normal;
}
```

## 表格

```css
table {
    border-collapse: collapse;
    border-spacing: 0;
}
```

## 一步到胃

```css
/* 全局去除默认样式 */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 14px;
}

/* a标签去除默认样式 */
a {
    text-decoration: none;
    color: #333;
}

/* 设置使所有a标签的四种状态都和本身颜色保持一致 */
a:hover,
a:visited,
a:link,
a:active {
    color: #333;
}

/* li */
ul,
ol {
    list-style: none;
}

/* img */
img {
    vertical-align: top;
    border: none;
}

/* button */
.button {
    border: 0;
    background-color: none;
    outline:none;
    /* 用于IOS下移除原生样式 */
    -webkit-appearance: none;
}

/* select */
select {
    border: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    /* 在选择框的最右侧中间显示小箭头图片 */
    background-image: url("http://ourjs.github.io/static/2015/arrow.png");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: right center;
    background-color: transparent;
    padding-right: 14px;
}

/* h1 */
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
}

/* input，textarea */
input,
textarea {
    outline: none;
    border: none;
}

textarea {
    resize: none;
    overflow: auto;
}

/* 斜体 i */
i {
    font-style: normal;
}

/* table */
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* 去除input[type=number]加减号 */
/* 谷歌 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}

/* 火狐 */
input {
    -moz-appearance: textfield;
}
```

## 一条龙服务

```css
*{padding:0;margin:0;box-sizing:border-box;font-size:14px}a{text-decoration:none;color:#333}a:hover,a:visited,a:link,a:active{color:#333}ul,ol{list-style:none}img{vertical-align:top;border:0}.button{border:0;background-color:none;outline:0;-webkit-appearance:none}select{border:0;appearance:none;-moz-appearance:none;-webkit-appearance:none;background-image:url(http://ourjs.github.io/static/2015/arrow.png);background-repeat:no-repeat;background-attachment:scroll;background-position:right center;background-color:transparent;padding-right:14px}h1,h2,h3,h4,h5,h6{font-weight:400}input,textarea{outline:0;border:0}textarea{resize:none;overflow:auto}i{font-style:normal}table{border-collapse:collapse;border-spacing:0}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}input{-moz-appearance:textfield}
```
