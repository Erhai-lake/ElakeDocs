---
title: 提示容器
icon: mdi:message-text-outline
createTime: 2025/12/23 13:42:56
---

## 注释

```markdown
::: note
这是一个注释框
:::
```

:::: demo-wrapper
::: note
这是一个注释框
:::
::::

## 信息

```markdown
::: info
这是一个信息框
:::
```

:::: demo-wrapper
::: info
这是一个信息框
:::
::::

## 提示

```markdown
::: tip
这是一个提示框
:::
```

:::: demo-wrapper
::: tip
这是一个提示框
:::
::::

## 警告

```markdown
::: warning
这是一个警告框
:::
```

:::: demo-wrapper
::: warning
这是一个警告框
:::
::::

## 危险

```markdown
::: caution
这是一个危险警告框
:::
```

:::: demo-wrapper
::: caution
这是一个危险警告框
:::
::::

## 详细折叠

```markdown
::: details
这是一个详情折叠框
:::
```

:::: demo-wrapper
::: details
这是一个详情折叠框
:::
::::

## 可以堆叠

```markdown
:::::: details
::::: caution
:::: tip
::: details
test
:::
::::
:::::
::::::
```

::::::: demo-wrapper
:::::: details
::::: caution
:::: tip
::: details
test
:::
::::
:::::
:::::::

## 自定义标题设置

````markdown
::: caution STOP
危险区域, 请勿继续
:::

::: details 点我查看代码
```javascript
console.log("Hello, World!)
```
:::
````

:::: demo-wrapper
::: caution STOP
危险区域, 请勿继续
:::

::: details 点我查看代码
```javascript
console.log("Hello, World!")
```
:::
::::

## Github 风格

如果你喜欢 Github 风格的提示容器.

### 标注

```markdown
> [!NOTE]
> 标注
```

::: demo-wrapper
> [!NOTE]
> 标注
:::

### 提示

```markdown
> [!TIP]
> 提示
```

::: demo-wrapper
> [!TIP]
> 提示
:::

### 重要

```markdown
> [!IMPORTANT]
> 重要
```

::: demo-wrapper
> [!IMPORTANT]
> 重要
:::

### 注意

```markdown
> [!WARNING]
> 注意
```

::: demo-wrapper
> [!WARNING]
> 注意
:::

### 警告

```markdown
> [!CAUTION]
> 警告
```

::: demo-wrapper
> [!CAUTION]
> 警告
:::

### 可以堆叠

```markdown
> [!CAUTION]
> > [!CAUTION]
> > > [!WARNING]
> > >注意
```

::: demo-wrapper
> [!CAUTION]
> > [!CAUTION]
> > > [!WARNING]
> > >注意
:::
