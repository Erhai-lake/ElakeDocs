# 过渡缓动

作用:可以为**一个元素**在**不同情况**之间切换的时候添加**过渡效果**

属性名:`transition (复合属性)`

属性值:过渡的属性 花费的时间(s)

提示:

* 过渡的属性可以是**具体的CSS属性**
* 也可以是**all**(两个状态**属性值不同**的所有属性, 都将产生过渡效果)
* `transition` 设置给**元素本身**

例子:

```html
<img src="image.png">
```

```css
img{
    width: 300px;
    height: 300px;
    transition: all 0.5s;
}

img:hover{
    width: 500px;
    height: 500px;
}
```

![7653b8f8ec068ee201071c2445fff13c4a0da919](Assets/7653b8f8ec068ee201071c2445fff13c4a0da919.gif)
