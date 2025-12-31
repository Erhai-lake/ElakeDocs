---
title: 属性支持
icon: ic:outline-data-object
createTime: 2025/12/22 23:46:48
---

为你的 Markdown 添加类/标识符和属性.

## 语法

在 Markdown 的标记后使用 { } 添加 类名/标识符 或 属性.

```markdown
markdown 语句{.classname #id attr1=value attr2="带空格的值"}
```

## `.classname`

以 . 作为起始, 添加一个类型.

```markdown
__加粗__{.bolder}
```

::: demo-wrapper
```markdown
<strong class="bolder">加粗</strong>
```
:::

## `#id`

以 # 作为起始, 添加一个 ID.

```markdown
## 标题{#header-1}
```

::: demo-wrapper
```markdown
<h2 id="header-1">标题</h2>
```
:::

## `attr=value`

```markdown
[链接](https://example.com){target=_blank}
[链接](https://example.com){rel="noopener noreferrer"}
```

::: demo-wrapper
```markdown
<a href="https://example.com" target="_blank">链接</a>
<a href="https://example.com" rel="noopener noreferrer">链接</a>
```
:::

## 组合使用

```markdown
[链接](https://example.com){.link #linkId target=_blank rel="noopener noreferrer"}
```

::: demo-wrapper
```markdown
<a href="https://example.com" class="link" id="linkId" target="_blank" rel="noopener noreferrer">链接</a>
```
:::

## 在块级标记上

在块级标记的下一行添加属性.

比如在 无序列表 上使用

```markdown
- list item **bold**
{.red}
```

::: demo-wrapper
```markdown
<ul class="red">
  <li class="red">list item <strong>bold</strong></li>
</ul>
```
:::

比如在 表格 上使用

```markdown
| header1 | header2 |
| ------- | ------- |
| column1 | column2 |

{.special}  <!-- 注意在这之前需要空一行 -->
```

::: demo-wrapper
```markdown
<table class="special">
	<thead>
		<tr>
			<th>header1</th>
			<th>header2</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>column1</td>
			<td>column2</td>
		</tr>
	</tbody>
</table>
```
:::

表格中的单元格也可以使用, 常见于 合并单元格.

```markdown
| A                       | B   | C   | D                |
| ----------------------- | --- | --- | ---------------- |
| 1                       | 11  | 111 | 1111 {rowspan=3} |
| 2 {colspan=2 rowspan=2} | 22  | 222 | 2222             |
| 3                       | 33  | 333 | 3333             |
```

::: demo-wrapper
```markdown
<table border="1">
	<thead>
		<tr>
			<th>A</th>
			<th>B</th>
			<th>C</th>
			<th>D</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>11</td>
			<td>111</td>
			<td rowspan="3">1111</td>
		</tr>
		<tr>
			<td colspan="2" rowspan="2">2</td>
			<td>22</td>
		</tr>
		<tr>
			<td>3</td>
			<td>333</td>
		</tr>
	</tbody>
</table>
```
:::

::: demo-wrapper
| A                       | B   | C   | D                |
| ----------------------- | --- | --- | ---------------- |
| 1                       | 11  | 111 | 1111 {rowspan=3} |
| 2 {colspan=2 rowspan=2} | 22  | 222 | 2222             |
| 3                       | 33  | 333 | 3333             |
:::
