---
title: PDF 阅读
icon: teenyicons:pdf-outline
createTime: 2025/12/24 00:18:11
---

```markdown
@[pdf](url)
```

如果需要打开指定页面, `pdf`后面添加空格, 并指定页面号.

```markdown
@[pdf 2](url)
```

更多配置项

```markdown
@[pdf 2 no-toolbar width="100%" height="400px" ratio="16:9" zoom="100"](url)
```

## 属性

:::: field-group

::: field name="no-toolbar" type="boolean" optional
不显示工具栏.
:::

::: field name="width" type="string" optional default="100%"
宽度.
:::

::: field name="height" type="string" optional default="auto"
高度.
:::

::: field name="ratio" type="string" optional default="16:9"
比例.
:::

::: field name="zoom" type="string" optional
缩放比例, 百分比.
:::

::::

## 示例

```markdown
@[pdf](https://plume.pengzhanbo.cn/files/sample.pdf)
```

@[pdf](https://plume.pengzhanbo.cn/files/sample.pdf)