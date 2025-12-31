---
title: 链接卡片
icon: solar:card-send-linear
createTime: 2025/12/24 23:29:40
---

## 属性

:::: field-group

::: field name="title" type="string" optional
链接卡片标题.
:::

::: field name="icon" type="string | { svg: string }" optional
显示在标题左侧的图标, 也可以使用图片链接.
:::

::: field name="href" type="string" optional
链接卡片跳转地址.
:::

::: field name="description" type="string" optional
链接卡片描述, 建议使用组件默认插槽添加描述内容.
:::

::: field name="target" type="string" optional
链接跳转方式.
:::

::::

## 插槽

* default: 卡片详情内容.
* title: 自定义标题.

## 示例

```markdown
<LinkCard title="首页" href="/" description="回到首页" />
<LinkCard icon="twemoji:astonished-face" title="首页" href="/" />
```

<LinkCard title="首页" href="/" description="回到首页" />

<LinkCard icon="twemoji:astonished-face" title="首页" href="/" />

使用组件插槽, 可以实现更丰富的表现.

```markdown
<LinkCard title="首页" href="/">

* 回到首页
* 回到首页

</LinkCard>

<LinkCard href="/">
  <template #title>
    <span style="color: red" >首页</span>
  </template>

* 回到首页
* 回到首页

</LinkCard>
```

<LinkCard title="首页" href="/">

* 回到首页
* 回到首页

</LinkCard>

<LinkCard href="/">
  <template #title>
    <span style="color: red" >首页</span>
  </template>

* 回到首页
* 回到首页

</LinkCard>

::: tip
在插槽内也可以使用markdown语法, 但需要注意的是, markdown语法需要与标签之间间隔一行, 否则将被识别为普通文本.
:::
