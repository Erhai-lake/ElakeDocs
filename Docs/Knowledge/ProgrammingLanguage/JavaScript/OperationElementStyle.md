# 操作元素样式

## 直接修改样式

除了操作元素内容和属性外, 还可以通过JS设置或修改标签元素的样式

`对象.style.样式名 = ""`

```html
<img src="img1.jpg" width="700">
```

![85b8ff9987c1c87b444dfc437d60db41b6645c91](Assets/85b8ff9987c1c87b444dfc437d60db41b6645c91.png)

```html
<img src="img1.jpg" width="700">
<script>
    document.querySelector("img").style.height = "100px"
</script>
```

![1791d5be1a2e0e262a37706105aec097608d013a](Assets/1791d5be1a2e0e262a37706105aec097608d013a.png)

:::warning
CSS中, 像这样`background-color`的样式, 使用js修改需要写成这样`backgroundColor`(小驼峰命名法)

`对象.style.backgroundColor = ""`

用JS修改CSS样式和CSS是一样的, 都是要写单位的, 如果是修改背景图片之类的, 一样要写`url(xxx)`
:::

## 修改class

### className

上面是直接修改CSS样式的, 那如果我要修改的样式十分的多, 就不方便了

所以我们可以使用`元素.className = "类名"`直接使用写在CSS表里的样式

```html
<style>
    .a {
        width: 200px;
        height: 200px;
        background-color: #000;
    }
    .b {
        width: 200px;
        height: 400px;
        background-color: #80ceff;
    }
</style>
<div></div>
<script>
    // 使用样式a
    document.querySelector("div").className = "a"
</script>
```

![430995a1d37f79ca801c5b2e23b3931c817e8dce](Assets/430995a1d37f79ca801c5b2e23b3931c817e8dce.png)

我们只需要修改一下JS, 就可以获得样式b了

```html
<script>
    document.querySelector("div").className = "b"
</script>
```

![bc1848e848bde7baf6b7f28d8c8f6c20116eaa34](Assets/bc1848e848bde7baf6b7f28d8c8f6c20116eaa34.png)

:::tip
`className`是替换, 不会保留原本的class, 如果只需要添加一个类, 需要保留之前的类名

那有没有什么办法, 可以不使用`className`替换, 更方便的加入一个类, 删除一个类, 切换一个类呢?

往下看~
:::

### classList

```html
<style>
    .a {
        width: 200px;
        height: 200px;
        background-color: #000;
    }
    .b {
        width: 200px;
        height: 400px;
        background-color: #80ceff;
    }
</style>
<div class="a"></div>
```

#### 加入一个类

`元素.classList.add("类名")`

这个方法可以在原本的基础上, 加入一个类

这里可以看见, 原本的class只有a的

![2e025a3df8369eed90f356b8af9c7f556cfe768d](Assets/2e025a3df8369eed90f356b8af9c7f556cfe768d.png)

然后在控制台执行这段JS

```js
document.querySelector("div").classList.add("b")
```

![66cbe658898fb9f20ffa951c58b31a29342b2ec0](Assets/66cbe658898fb9f20ffa951c58b31a29342b2ec0.png)

就可以发现class比原先多了一个b

![da4f05d4b2021ebfe45bdb97e08423887a8913dd](Assets/da4f05d4b2021ebfe45bdb97e08423887a8913dd.png)

#### 删除一个类

`元素.classList.remove("类名")`

这个方法可以在原本的基础上, 删除一个类

在控制台执行这段JS

```js
document.querySelector("div").classList.remove("a")
```

![bda8883bf368b3d5697bba1cb817095ebd56307b](Assets/bda8883bf368b3d5697bba1cb817095ebd56307b.png)

就可以发现class现在只剩个b了

![e79650b9bd143875e28a2d27a2e542f17aac1201](Assets/e79650b9bd143875e28a2d27a2e542f17aac1201.png)

#### 切换一个类

`元素.classList.toggle("类名")`

这个方法可以像个开关一个, 如果class中有这个类了, 执行这个方法, 就会删除这个类, 再次执行, 就会加回来

继续在控制台执行这段JS

```js
document.querySelector("div").classList.toggle("b")
```

![b86a1b00f8dffea7e6b33c6e2ce2c92984c37b70](Assets/b86a1b00f8dffea7e6b33c6e2ce2c92984c37b70.png)

可以看见返回了false, 并且盒子消失了, 因为class现在什么都没有

![8238538001ee2ecac46f30ab9461a80ef16c4c21](Assets/8238538001ee2ecac46f30ab9461a80ef16c4c21.png)

再次执行刚刚的JS

返回了true, 并且盒子又出现了

![85233be9e8f91653ae4c4a91095b266d67e07617](Assets/85233be9e8f91653ae4c4a91095b266d67e07617.png)
