---
title: 获取 DOM 元素
createTime: 2024/10/02 14:53:08
---

## 根据 CSS 选择器获取

```javascript
document.querySelector("css选择器")
```

如果页面有多个相同的元素, 只会选择==第一个==.

返回的是一个==HTMLElement对象==, 如果没有匹配到, 返回==null==.

```html
<div>abc</div>
<div class="Test">123</div>
<ul>
    <li>Test1</li>
    <li>Test2</li>
    <li>Test3</li>
    <li>Test4</li>
    <li>Test5</li>
</ul>
<script>
    const Div1 = document.querySelector("div")
    console.log(Div1)
    console.log(Div1.innerHTML)
    // abc
    const Div2 = document.querySelector(".Test")
    console.log(Div2)
    console.log(Div2.innerHTML)
    // 123
    const Li = document.querySelector("ul li:first-child")
    console.log(Li)
    console.log(Li.innerHTML)
    // Test1
</script>
```

和CSS一模一样, 不会CSS的回去重修[Html5CSS3](../html5css3/)

### 匹配多个元素

```javascript
document.querySelectorAll("css选择器")
```

```html
<ul>
    <li>Test1</li>
    <li>Test2</li>
    <li>Test3</li>
    <li>Test4</li>
    <li>Test5</li>
</ul>
<script>
    const Li = document.querySelectorAll("ul li")
    console.log(Li)
    console.log(Li[0].innerHTML)
    // Test1
</script>
```

返回的是一个==NodeList对象集合==, 如果没有匹配到, 返回==空集合==.

## 其他获取方法

```javascript
// 根据id获取第一个元素
document.getElementById("id")
// 根据标签获取一类元素, 例如获取页面所有div
document.getElementsByTagName("div")
// 根据类名获取元素, 例如获取所有类名为 w 的
document.getElementsByClassName("w")
```

了解即可.
