---
title: 事件委托
createTime: 2024/10/02 14:53:08
---

什么是事件委托, 就好比你买的快递, 他一般不可能给你一户一户送到家, 那太累了, 一般会统一送到菜鸟驿站, 蜂巢, 代收点, 然后通知你去收货.

事件委托是利用事件流的特性解决一些开发需求的知识技巧.

有什么用呢?

```html
<ul>
    <li>Test1</li>
    <li>Test2</li>
    <li>Test3</li>
    <li>Test4</li>
    <li>Test5</li>
</ul>
```

我这里有一个列表, 我要给每一个`li`做点击监听, 是不是要用循环一个个注册, 不仅麻烦, 还占用程序性能.

通过事件委托, 我们可以减少注册次数, 提供程序性能.

原理: 其实就是利用了事件冒泡的特点, 给它的==父元素注册事件==, 当我们触发子元素的时候, 会冒泡到父元素身上, 从而触发父元素的事件.

:::demo
```html
<ul>
	<li>来试试点击一下列表项</li>
    <li>Test1</li>
    <li>Test2</li>
    <li>Test3</li>
    <li>Test4</li>
    <li>Test5</li>
</ul>
<script>
    document.querySelector("ul").addEventListener("click", (event) => {
        alert(event.target.textContent)
    })
</script>
```
:::

通过`event.target`获取被点击的子元素对象, 用`textContent`获取值.
