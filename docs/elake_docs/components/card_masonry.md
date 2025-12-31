---
title: 瀑布流容器
icon: ri:layout-masonry-line
createTime: 2025/12/25 00:04:31
---

瀑布流容器是一个通用的容器组件, 你可以把任何内容放到`<CardMasonry>`里面.

容器会自动计算每一个项的高度, 然后将它们按照瀑布流的方式进行排列.

::: detail 什么是项
项表示的是一个单独的内容, 可以是图片/文字/视频等等.

* 从markdown的语法而言, 独占一行的可以被认为是一个项.(该行的前后应该有空行)
* 从html的结构而言, 容器下的每一个子元素都会被认为是一个项.
  :::

::: detail 什么是瀑布流
瀑布流是一种布局方式, 它将内容按照垂直方向进行排列, 每一个项的高度可能不同, 但是它们会自动对齐到容器的左侧.
:::

```markdown
<CardMasonry>

<img src="..." alt="...">

<!-- 更多内容 -->

</CardMasonry>
```

## 属性

:::: field-group

::: field name="cols" type="number | { sm: number, md: number, lg: number }" optional
列数.

组件默认会根据屏幕宽度自动调整列数. 在空间足够时, 默认显示三列, 小屏幕下显示双列.

你可以通过`cols`配置列数. 当传入`number`时, 所有尺寸均显示为`number`个卡片.

传入`{ sm: number, md: number, lg: number }`时, 根据屏幕宽度自动调整列数.

* `sm` : `< 640px`
* `md` : `>= 640px < 960px`
* `lg` : `>= 960px`
  :::

::: field name="gap" type="number" optional default="16"
列之间的间距.
:::

::::

## Markdown 语法支持

在markdown中, 可以使用`::: card-masonry`容器代替`<CardMasonry>`.

```markdown{1,7}
::: card-masonry cols="3" gap="16" 

![](/images/1.png)

<!-- 更多内容 -->

::: 
```

## 示例

### 图片瀑布流

瀑布流特别适合用于展示图片, 你可以直接在将`![](image_url)`写到`::: card-masonry`中.

```markdown
::: card-masonry

![](https://www.loliapi.com/acg/pc/?id=1)

![](https://www.loliapi.com/acg/pc/?id=2)

![](https://www.loliapi.com/acg/pe/?id=1)

![](https://www.loliapi.com/acg/pp/?id=1)

![](https://www.loliapi.com/acg/pe/?id=2)

![](https://www.loliapi.com/acg/pp/?id=2)

![](https://www.loliapi.com/acg/pc/?id=3)

![](https://www.loliapi.com/acg/pp/?id=3)

:::
```

::: card-masonry

![](https://www.loliapi.com/acg/pc/?id=1)

![](https://www.loliapi.com/acg/pc/?id=2)

![](https://www.loliapi.com/acg/pe/?id=1)

![](https://www.loliapi.com/acg/pp/?id=1)

![](https://www.loliapi.com/acg/pe/?id=2)

![](https://www.loliapi.com/acg/pp/?id=2)

![](https://www.loliapi.com/acg/pc/?id=3)

![](https://www.loliapi.com/acg/pp/?id=3)

:::

### 卡片瀑布流

瀑布流也适合用于展示卡片, 你可以直接在将`::: card`写到`::: card-masonry`中.

```markdown
:::: card-masonry

::: card title="卡片1"
卡片内容
:::

::: card title="卡片2"
卡片内容

卡片内容
:::

::: card title="卡片3"
卡片内容
:::

::: card title="卡片4"
卡片内容
:::

::: card title="卡片5"
卡片内容

卡片内容
:::

::: card title="卡片6"
卡片内容
:::

::::
```

:::: card-masonry

::: card title="卡片1"
卡片内容
:::

::: card title="卡片2"
卡片内容

卡片内容
:::

::: card title="卡片3"
卡片内容
:::

::: card title="卡片4"
卡片内容
:::

::: card title="卡片5"
卡片内容

卡片内容
:::

::: card title="卡片6"
卡片内容
:::

::::

### 代码块瀑布流

````markdown
:::card-masonry

```ts
const a = 1
```

```json
{
  "name": "John"
}
```

```css
p {
  color: red;
}
```

```html
<html>
  <body>
    <h1>Hello world</h1>
  </body>
</html>
```

```ts
const a = 12
const b = 1
```

```rust
fn main() {
    println!("Hello, world!");
}
```

:::
````

:::card-masonry

```ts
const a = 1
```

```json
{
  "name": "John"
}
```

```css
p {
  color: red;
}
```

```html
<html>
  <body>
    <h1>Hello world</h1>
  </body>
</html>
```

```ts
const a = 12
const b = 1
```

```rust
fn main() {
    println!("Hello, world!");
}
```

:::