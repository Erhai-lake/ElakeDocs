---
title: 卡片
icon: solar:card-broken
createTime: 2025/12/23 14:07:39
---

对于想要突出显示的内容, 可以将其放在 卡片容器`::: card`中.

当需要在空间足够时并排显示多个卡片, 可以使用`card-grid`容器, 包裹 多个卡片.

还能在卡片中添加标题(`title`)/图标(`icon`)等.

## 单卡片

```markdown
::: card title="标题" icon="twemoji:astonished-face"

这里是卡片内容.

:::
```

:::: demo-wrapper
::: card title="标题" icon="twemoji:astonished-face"

这里是卡片内容.
:::
::::

## 多卡片

```markdown
:::: card-grid

::: card title="卡片标题 1" icon="twemoji:astonished-face"

这里是卡片内容。
:::

::: card title="卡片标题 2" icon="twemoji:astonished-face"

这里是卡片内容。
:::

::::
```

::::: demo-wrapper
:::: card-grid

::: card title="卡片标题 1" icon="twemoji:astonished-face"

这里是卡片内容。
:::

::: card title="卡片标题 2" icon="twemoji:astonished-face"

这里是卡片内容。
:::

::::
:::::
