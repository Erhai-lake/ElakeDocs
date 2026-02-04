---
title: 徽章
icon: iconamoon:badge-light
createTime: 2025/12/24 23:22:12
---

使用`<Badge>`组件来显示行内信息, 如状态或标签.

将你想显示的内容传递给`<Badge>`组件的`text`属性.

## 属性

:::: field-group

::: field name="type" type="'info' | 'tip' | 'warning' | 'danger' | string" optional default="tip"
徽章类型, 不同的类型使用不同的颜色方案, 支持自定义类型.
:::

::: field name="text" type="string" optional
徽章文本
:::

::: field name="color" type="string" optional
自定义徽章文本颜色
:::

::: field name="bgColor" type="string" optional
自定义徽章背景颜色
:::

::: field name="borderColor" type="string" optional
自定义徽章边框颜色
:::

::::

## 示例

```markdown
* ElakeDocs - <Badge type="info" text="v3" />
* ElakeDocs - <Badge type="tip" text="v3" />
* ElakeDocs - <Badge type="warning" text="v3" />
* ElakeDocs - <Badge type="danger" text="v3" />
* ElakeDoc s- <Badge text="v3" color="#80ceff" bg-color="rgba(159, 122, 234, 0.16)" />
```

* ElakeDocs - <Badge type="info" text="v3" />
* ElakeDocs - <Badge type="tip" text="v3" />
* ElakeDocs - <Badge type="warning" text="v3" />
* ElakeDocs - <Badge type="danger" text="v3" />
* ElakeDoc s- <Badge text="v3" color="#80ceff" bg-color="rgba(159, 122, 234, 0.16)" />