---
title: 字段容器
icon: solar:text-field-linear
createTime: 2025/12/23 15:47:32
---

在markdown中, 使用`::: field`容器, 用于描述字段信息, 包括字段名称/字段类型/是否必填/默认值/详情等信息.

它适用于描述配置中的字段/组件的Props等场景.

还可以使用额外的`:::: field-group`容器, 用于组合多个 `::: field`.

## 语法

### 单个字段

```markdown
::: field name="字段名" type="类型" required default="默认值"
字段描述信息
:::
```

:::: demo-wrapper
::: field name="字段名" type="类型" required default="默认值"
字段描述信息
:::
::::

### 字段组合

```markdown
:::: field-group

::: field name="字段名" type="类型" required default="默认值"
字段描述信息
:::

::: field name="字段名" type="类型" optional default="默认值"
字段描述信息
:::

::::
```

::::: demo-wrapper
:::: field-group

::: field name="字段名" type="类型" required default="默认值"
字段描述信息
:::

::: field name="字段名" type="类型" optional default="默认值"
字段描述信息
:::

::::
:::::

## 属性

:::: field-group

::: field name="name" type="string" required
字段名称
:::

::: field name="type" type="string" optional
字段的类型
:::

::: field name="type" type="string" optional
字段的类型
:::

::: field name="required" type="boolean" optional
是否必填
:::

::: field name="optional" type="boolean" optional
是否可选
:::

::: field name="default" type="string" optional
默认值, 如果为空字符串, 应该使用`default="''"`
:::

::::

## 示例

```markdown
:::: field-group
::: field name="theme" type="ThemeConfig" required default="{ base: '/' }"
主题配置
:::

::: field name="enabled" type="boolean" optional default="true"
是否启用
:::

::: field name="callback" type="(...args: any[]) => void" optional default="() => {}"
<Badge type="tip" text="v1.0.0 新增"  />
回调函数
:::

::: field name="other" type="string" deprecated
<Badge type="danger" text="v0.9.0 弃用"  />
已弃用属性
:::
::::
```

::::: demo-wrapper
:::: field-group
::: field name="theme" type="ThemeConfig" required default="{ base: '/' }"
主题配置
:::

::: field name="enabled" type="boolean" optional default="true"
是否启用
:::

::: field name="callback" type="(...args: any[]) => void" optional default="() => {}"
<Badge type="tip" text="v1.0.0 新增"  />
回调函数
:::

::: field name="other" type="string" deprecated
<Badge type="danger" text="v0.9.0 弃用"  />
已弃用属性
:::
::::
:::::
