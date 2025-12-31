---
title: 基本
icon: fluent:markdown-20-filled
createTime: 2025/12/22 22:01:30
---

该文档使用 [Markdown](https://markdown.com.cn) 格式编写.

## 标题

标题会在右侧的大纲显示.

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

::: demo-wrapper
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
:::

## 段落

要创建段落, 请使用空白行将一行或多行文本进行分隔.

```markdown
123
456
```

::: demo-wrapper
123
456
:::

```markdown
123

456
```

::: demo-wrapper
123

456
:::

## 强调

要强调文本, 请使用星号(*)或下划线(_)将文本包裹起来.

```markdown
**加粗** *斜体* ***加粗斜体***
```

::: demo-wrapper
**加粗** *斜体* ***加粗斜体***.
:::

## 引用

要创建引用, 请在文本前添加大于号(>)并在文本前添加空格.

```markdown
> 引用文本
>
> 可以包含多个段落.
>
> # 可以包含标题或者其他 Markdown 元素.
>
> > 可以包含嵌套引用.
>
> 反正几乎可以包含任何 Markdown 元素.
```
::: demo-wrapper
> 引用文本
>
> 可以包含多个段落.
>
> # 可以包含标题或者其他 Markdown 元素.
>
> > 可以包含嵌套引用.
>
> 反正几乎可以包含任何 Markdown 元素.
:::

## 列表

### 有序列表

```markdown
1. 第一个项目
2. 第二个项目
3. 第三个项目
	1. 第一个子项目
		1. 第一个子子项目
4. 第四个项目
```

::: demo-wrapper
1. 第一个项目
2. 第二个项目
3. 第三个项目
	1. 第一个子项目
		1. 第一个子子项目
4. 第四个项目
:::

### 无序列表

```markdown
- 第一个项目
- 第二个项目
- 第三个项目
	- 第一个子项目
		- 第一个子子项目
- 第四个项目
```

::: demo-wrapper
- 第一个项目
- 第二个项目
- 第三个项目
	- 第一个子项目
		- 第一个子子项目
- 第四个项目
:::

## 代码

要在 Markdown 中插入代码, 请使用反引号(`)将代码包裹起来.

```markdown
这个是行代码`console.log('hello world')`, 对!
```

::: demo-wrapper
这个是行代码`console.log('hello world')`, 对!
:::

````markdown
```
这个是代码块
```
````

::: demo-wrapper
```markdown
这个是代码块
```
:::

## 分割线

要创建分割线, 请在单独一行中使用三个或更多个星号(*)/下划线(_)或破折号(-).

```markdown
***

---

_________________
```

::: demo-wrapper
***

---

_________________
:::

## 链接

要创建链接, 请使用方括号([])将链接文本包裹起来, 并使用圆括号()将 URL 包裹起来.

```markdown
[洱海博客](https://www.elake.top)
```

::: demo-wrapper
[洱海博客](https://www.elake.top)
:::

### 加个标题

```markdown
这是一个链接 [洱海博客](https://www.elake.top "洱海工作室的博客").
```

::: demo-wrapper
这是一个链接 [洱海博客](https://www.elake.top "洱海工作室的博客").
:::

### 可以直接使用 URL

```markdown
<https://www.elake.top>
```

::: demo-wrapper
<https://www.elake.top>
:::

### 也可以使用引用

```markdown
[洱海博客][ElakeUrl]

[ElakeUrl]: https://www.elake.top
```

::: demo-wrapper
[洱海博客][ElakeUrl]

[ElakeUrl]: https://www.elake.top
:::

## 图片

要插入图片, 请使用感叹号(!), 方括号([])将图片描述包裹起来, 并使用圆括号()将图片 URL 包裹起来.

```markdown
![这是图片](/images/logo.svg "这是标题")

[![可以给链接加图片](/images/logo.svg "这是标题")](https://www.elake.top)
```

::: demo-wrapper img
![这是图片](/images/logo.svg "这是标题")

[![可以给链接加图片](/images/logo.svg "这是标题")](https://www.elake.top)
:::

## 表格

在 Markdown 中, 表格的对齐方式默认是左对齐. 要改变对齐方式, 请在表头行中使用冒号(:)来指定对齐方向.

- 冒号在表头行的左侧, 表示左对齐.
- 冒号在表头行的右侧, 表示右对齐.
- 冒号在表头行的两侧, 表示居中对齐.

```markdown
| 左对齐表头 | 右对齐表头 | 居中对齐表头 |
| :--------- | ---------: | :----------: |
| 单元格1    | 单元格2    | 单元格3      |
| 单元格1    | 单元格2    | 单元格3      |
| 单元格1    | 单元格2    | 单元格3      |
```

::: demo-wrapper
| 左对齐表头 | 右对齐表头 | 居中对齐表头 |
| :--------- | ---------: | :----------: |
| 单元格1    | 单元格2    | 单元格3      |
| 单元格1    | 单元格2    | 单元格3      |
| 单元格1    | 单元格2    | 单元格3      |
:::


## 嵌入html元素

您可以在 Markdown 中嵌入 HTML 元素.

```markdown
<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>
```

::: demo-wrapper
<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>
:::
