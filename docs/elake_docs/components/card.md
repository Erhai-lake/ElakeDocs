---
title: 卡片
icon: solar:card-broken
createTime: 2025/12/24 23:50:53
---

使用`<Card>`组件在页面中显示卡片.

也可以使用markdown卡片容器语法, 替代`<Card>`组件.

:::: field-group

::: field name="title" type="string" required
卡片标题.
:::

::: field name="icon" type="string | { svg: string }" optional
显示在标题左侧的图标, 支持iconify所有图标, 也可以使用图片链接.
:::

::::

## 插槽

* default: 卡片详情内容.
* title: 自定义标题.

## 示例

```markdown
<Card title="卡片标题" icon="twemoji:astonished-face">
  这里是卡片内容。
</Card>

<Card>
  <template #title>
    <p style="color: red">卡片标题</p>
  </template>
  这里是卡片内容。
</Card>
```

<Card title="卡片标题" icon="twemoji:astonished-face">
  这里是卡片内容。
</Card>

<Card>
  <template #title>
    <p style="color: red">卡片标题</p>
  </template>
  这里是卡片内容。
</Card>

:::tip
在插槽内也可以使用markdown语法, 但需要注意的是, markdown语法需要与标签之间间隔一行. 否则将被识别为普通文本.
:::
