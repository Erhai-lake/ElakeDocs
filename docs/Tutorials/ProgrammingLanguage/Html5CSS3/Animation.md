---
id: Animation
title: 动画
---

# 动画

实现**多个状态**间的变化过程,**动画过程可控**(重复播放,最终画面,是否暂停)

例子:

```html showLineNumbers
<img src="image.png">
```

```css showLineNumbers
img{
    width: 300px;
    height: 300px;
    animation: test 1s infinite alternate;
}

@keyframes test {
    0% {
        transform: translate(0);
    }

    100% {
        transform: translate(800px);
    }
}
```

![42fce38fe36319357f59e09cd2176df2cc6f6ec3](Assets/42fce38fe36319357f59e09cd2176df2cc6f6ec3.gif)

## 使用

### 定义动画

有两种定义方式,第一张只能设置2个状态,第二种可以设置多个

```css showLineNumbers
@keyframes 动画名称 {
    from {}
    to {}
}
```

```css showLineNumbers
@keyframes 动画名称 {
    0% {}
    10% {}
    ......
    100% {}
}
```

### 使用动画

#### 动画名称

`animation-name: 动画名称`

#### 动画耗时

`animation-duration: 动画耗时(s)`

#### 速度曲线

`animation-timing-function`

属性值:

`lincear`:匀速

`steps(数值)`:分步动画,通常配合精灵图实现精灵动画

#### 延时时间

`animation-delay: 数值(s)`

#### 重复次数

`animation-iteration-count`

属性值:

`数值`:直接重复几次

`infinite`:无限循环

#### 动画方向

`animation-direction`

属性值:

`alternate`:反向

#### 执行完毕状态

`animation-fill-mode`

属性值:

`forwards`:结束时状态

`backwards`:开始时状态(默认)

#### 暂停动画

`animation-play-state`

属性值:

`paused`:暂停,通常配合`:hover`使用

#### 复合

`animation: 动画名称 动画耗时 速度曲线 延时时间 重复次数 动画方向 执行完毕状态`

提示:

* **动画名称**和**动画耗时**为必须
* 取值**不分**先后顺序
* 如果有**两个**时间值,**第一个**时间表示**动画耗时**,**第二个**时间表示**延时时间**
* 属性值与独立属性一致
