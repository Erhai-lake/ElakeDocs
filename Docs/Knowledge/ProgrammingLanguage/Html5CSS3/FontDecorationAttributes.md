# 字体修饰属性

|      属性名       |     描述     |
| :---------------: | :----------: |
|    `font-size`    |   文字大小   |
|   `font-weight`   |   字体粗细   |
|   `font-style`    |   字体倾斜   |
|   `line-height`   |     行高     |
|   `font-family`   |     字体     |
|      `font`       | 字体复合属性 |
|   `text-indent`   |   文本缩进   |
|   `text-align`    |   文本对齐   |
| `text-decoration` |    修饰线    |
|      `color`      |     颜色     |

```html
<p>Test</p>
<p class="a">Test</p>
```

## 文字大小

属性名:`font-size`

数值

```css
.a{
    font-size: 30px;
}
```

![1665aa2df9359a599822cbc07d1df497cc3c32ab](Assets/1665aa2df9359a599822cbc07d1df497cc3c32ab.png)

## 字体粗细

属性名:`font-size`

数值(100~900的整数, 默认为400)

关键词(如:加粗`bold`, 默认为`normal`)

```css
.a{
    font-weight: 900;
}
```

![ed95028985500e43c506638d4a17fdc9f7571f90](Assets/ed95028985500e43c506638d4a17fdc9f7571f90.png)

## 字体倾斜

属性名:`font-style`

关键词(正常:`normal`, 倾斜:`italic`)

```css
.a{
    font-style: italic;
}
```

![b3a071ee525a88c0db443a1c3966af2d81cb98da](Assets/b3a071ee525a88c0db443a1c3966af2d81cb98da.png)

## 行高

属性名:`line-height`

数值

```css
.a{
    line-height: 100px;
}
```

![1fc5d574fad33a684a5b14e319aa2bde3ad2fa87](Assets/1fc5d574fad33a684a5b14e319aa2bde3ad2fa87.png)

## 字体

属性名:`font-family`

字体名(可以设置多个, 如果没有字体, 就按从左到右的顺序读取下一个)

```css
.a{
   font-family: "微软雅黑";
}
```

![0182679031ac934d73ab2ae5fa4fdb57466abe82](Assets/0182679031ac934d73ab2ae5fa4fdb57466abe82.png)

## 字体复合属性

属性名:`font`

```css
/* 完整写法 */
.a{
    font-style: italic;
    font-weight: 900;
    font-size: 30px;
    line-height: 100px;
    font-family: "微软雅黑";
}

/* font缩写 */
.a{
	font: italic 900 30px/100px "微软雅黑";
}

/* 两种写法功能一样 */
```

![a8f947c948b43550c0e77a8a578c27271a2a94eb](Assets/a8f947c948b43550c0e77a8a578c27271a2a94eb.png)

## 文本缩进

属性名:`text-indent`

数值

```css
.a{
    text-indent: 20px;
}
```

![05ec69ed52b7af817e847f4207e5bb7339159191](Assets/05ec69ed52b7af817e847f4207e5bb7339159191.png)

## 文本对齐

属性名:`text-align`

关键词(左对齐(默认):`left`, 居中:`center`, 右对齐:`right`)

```css
.a{
    text-align: center;
}
```

![233378fd247cbfe13fa98d946ea7c5f09bc76a71](Assets/233378fd247cbfe13fa98d946ea7c5f09bc76a71.png)

## 修饰线

属性名:`text-decoration`

关键词(无:`none`, 下划线:`underline`, 删除线:`line-through`, 上划线:`overline`)

```css
.a{
    text-decoration: underline;
}
```

![a5d64edbf884caf7670632decef6f1827fe231f0](Assets/a5d64edbf884caf7670632decef6f1827fe231f0.png)

## 颜色

属性名:`color`

颜色

```css
.a{
    color: #80ceff;
}
```

![56ff4e69cfc6e3ff440174a2bd75b75db1e9cf06](Assets/56ff4e69cfc6e3ff440174a2bd75b75db1e9cf06.png)
