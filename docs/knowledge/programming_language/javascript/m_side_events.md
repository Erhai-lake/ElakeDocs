---
title: M 端事件
createTime: 2024/10/02 14:53:08
---

移动端也有自己独特的地方.

## 触屏事件

触屏事件也称触摸事件.

Android 和 IOS都有.

### touchstart

`touchstart`手指触摸到一个元素时触发.

### touchmove

`touchmove`手指在一个元素上滑动时触发.

### touchend

`touchend`手指从一个元素上移开时触发.

### 示例

:::demo
```html
<style>
    div {
        width: 500px;
        height: 500px;
        background-color: red;
    }
</style>
<p>来摸摸我</p>
<div></div>
<script>
    const P = document.querySelector("p")
    const DIV = document.querySelector("div")
    // 手指触摸到一个元素时触发
    DIV.addEventListener("touchstart", () => {
        P.innerText = "摸到我了"
    })
    // 手指在一个元素上滑动时触发
	DIV.addEventListener("touchmove", () => {
        P.innerText = "滑丫滑~"
    })
    // 手指从一个元素上移开时触发
	DIV.addEventListener("touchend", () => {
        P.innerText = "不摸了?"
    })
</script>
```
:::

:::tip
调试需要打开控制台的移动端模拟器.
:::

![c18482d66446f71dbe949bcbfc479a937c6ae9c3](assets/c18482d66446f71dbe949bcbfc479a937c6ae9c3.gif)
