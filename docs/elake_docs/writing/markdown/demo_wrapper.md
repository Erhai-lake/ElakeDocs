---
title: 示例容器
icon: icon-park-outline:eyes
createTime: 2025/12/23 16:25:03
---

有时候, 你可能需要在内容中补充一些示例, 但期望能与其它内容分隔开来呈现. 主题支持在Markdown文件中添加示例容器.

## 语法

```markdown
::: demo-wrapper
添加你的示例
:::
```

## 属性

:::: field-group

::: field name="title" type="string" optional
标题
:::

::: field name="no-padding" type="boolean" optional
不添加内边距
:::

::: field name="img" type="boolean" optional
仅包含图片时使用
:::

::: field name="height" type="string" optional
高度
:::

::::

## 示例

仅包含图片

```markdown
::: demo-wrapper img no-padding
![logo](/images/logo.svg)
:::
```

:::: demo-wrapper
::: demo-wrapper img no-padding
![logo](/images/logo.svg)
:::
::::

```markdown
::: demo-wrapper title="标题"
### 三级标题

这是示例容器中的内容。
:::
```

:::: demo-wrapper
::: demo-wrapper title="标题"
### 三级标题

这是示例容器中的内容。
:::
::::

```markdown
::: demo-wrapper
<h1 class="your-demo-title">这是标题</h1>
<p class="your-demo-paragraph">这是段落</p>
:::
```

:::: demo-wrapper
::: demo-wrapper
<h1 class="your-demo-title">这是标题</h1>
<p class="your-demo-paragraph">这是段落</p>
:::
::::
