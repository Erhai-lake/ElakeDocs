---
title: 扩展
icon: fluent-mdl2:auto-enhance-on
createTime: 2025/12/22 22:41:22
---

## 标题锚点

你应该已经发现了, 点击标题会跳转到该标题的位置, 这就是标题锚点.

标题会自动应用锚点, 比如说上面这个, 锚点就是 `#标题锚点`.

#### 自定义锚点

```markdown
# 使用自定义锚点 {#my-anchor}
```

这允许将标题链接为 `#my-anchor`, 而不是默认的 `#使用自定义锚点`.

## 链接

像`https://www.elake.top`这样的URL就是链接了.

内部链接是这样的`/elake_docs/writing/775b2j16/#链接`, 可以使用锚点.

::: demo-wrapper
[外部链接](https://www.elake.top)

[内部链接](/elake_docs/writing/775b2j16/#链接)
:::

## 目录表

```markdown
[[TOC]]
```

::: demo-wrapper
[[TOC]]
:::

## 上下角标

```markdown
使用 ^xx^ 进行上角标标注.

使用 ~xx~ 进行下角标标注.
```

::: demo-wrapper
使用 ^xx^ 进行上角标标注.

使用 ~xx~ 进行下角标标注.
:::

## 自定义对齐

```markdown
::: left
左对齐的内容
:::

::: center
居中的内容
:::

::: right
右对齐的内容
:::
```

:::: demo-wrapper
::: left
左对齐的内容
:::

::: center
居中的内容
:::

::: right
右对齐的内容
:::
::::
## 任务列表

```markdown
- [ ] 任务 1
- [x] 任务 2
- [ ] 任务 3
```

::: demo-wrapper
- [ ] 任务 1
- [x] 任务 2
- [ ] 任务 3
:::

## 脚注

```markdown
人生自古谁无死，留取丹心照汗青[^脚注1]。

[^脚注1]: 出自 宋·文天祥 **《过零丁洋》**
```

::: demo-wrapper
人生自古谁无死，留取丹心照汗青[^脚注1]。

[^脚注1]: 出自 宋·文天祥 **《过零丁洋》**
:::
