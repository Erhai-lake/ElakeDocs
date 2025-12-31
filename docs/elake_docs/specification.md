---
title: 文档编写规范
icon: streamline-freehand:business-management-agreement
createTime: 2025/12/22 12:48:13
---

<script setup>
import VPCopyright from "@theme/VPCopyright.vue"
</script>

::: caution 逼话
不以规矩无以成方圆

Nothing can be accomplished without norms or standards
:::

## MD 文件请使用英文命名

::: tabs

@tab:active 正例

```markdown
specification.md
```

@tab 反例

```markdown
文档编写规范.md
```

:::

## 文档必须有**frontmatter**

标题会渲染到文本顶部和左边侧边栏的标题

```markdown
---
title: 这里写标题, 例如 文档编写规范
createTime: 这里写时间, 例如 2025/12/22 12:48:13
---
```

## 版权

这是一个很重要的规范, 故写在**frontmatter**规范下面

在**frontmatter**中添加`copyright`字段, 默认是`CC-BY-4.0`, 可以不用写.

文档自带的版权

* [CC0 1.0 通用 (CC0)](https://creativecommons.org/publicdomain/zero/1.0/)
  <i class="vpi-license-zero" />
* [署名 4.0 国际 (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/)
  <i class="vpi-license-cc" /><i class="vpi-license-by" />
* [署名-相同方式共享 4.0 国际 (CC-BY-SA-4.0)](https://creativecommons.org/licenses/by-sa/4.0/)
  <i class="vpi-license-cc" /><i class="vpi-license-by" /><i class="vpi-license-sa" />
* [署名-非商业性 4.0 国际 (CC-BY-NC-4.0)](https://creativecommons.org/licenses/by-nc/4.0/)
  <i class="vpi-license-cc" /><i class="vpi-license-by" /><i class="vpi-license-nc" />
* [署名-禁止演绎 4.0 国际 (CC-BY-ND-4.0)](https://creativecommons.org/licenses/by-nd/4.0/)
  <i class="vpi-license-cc" /><i class="vpi-license-by" /><i class="vpi-license-nd" />
* [署名-非商业性-相同方式共享 4.0 国际 (CC-BY-NC-SA-4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
  <i class="vpi-license-cc" /><i class="vpi-license-by" /><i class="vpi-license-nc" /><i class="vpi-license-sa" />
* [署名-非商业性-禁止演绎 4.0 国际 (CC-BY-NC-ND-4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
  <i class="vpi-license-cc" /><i class="vpi-license-by" /><i class="vpi-license-nc" /><i class="vpi-license-nd" />

::: tabs

@tab:active 原创文章

```markdown
---
title: 我的文章
createTime: 这里写时间, 例如 2025/12/22 12:48:13
copyright: CC-BY-4.0
---
```

<VPCopyright
	license="CC-BY-4.0" />

@tab 转载文章

```markdown
---
title: 转载的文章
createTime: 这里写时间, 例如 2025/12/22 12:48:13
copyright:
	creation: reprint
	license: CC-BY-4.0 (版权)
	source: https://example.com/origin (来源)
	author:
		name: 转载者 (作者)
		url: https://example.com/author (作者网站)
---
```

<VPCopyright
	license="CC-BY-4.0"
	source="https://example.com/origin"
	creation="reprint"
	:author="{name: '转载者', url: 'https://example.com/author'}"/>

@tab 翻译文章

```markdown
---
title: 翻译的文章
createTime: 这里写时间, 例如 2025/12/22 12:48:13
copyright:
	creation: translate
	license: CC-BY-4.0 (版权)
	source: https://example.com/origin (来源)
	author:
		name: 转载者 (作者)
		url: https://example.com/author (作者网站)
---
```

<VPCopyright
	license="CC-BY-4.0"
	source="https://example.com/origin"
	creation="translate"
	:author="{name: '转载者', url: 'https://example.com/author'}"/>

@tab 自定义

```markdown
---
title: 我的文章
createTime: 这里写时间, 例如 2025/12/22 12:48:13
copyright:
	license:
		name: MIT (版权)
		url: https://example.com/mit (版权地址)
---
```

<VPCopyright
	:license="{name: 'MIT', url: 'https://example.com/mit'}" />

:::

## 每篇文档有且不能有一级标题

标题请在**frontmatter**中添加

::: tabs

@tab:active 正例

```markdown
---
title: 这里写标题, 例如 文档编写规范
createTime: 这里写时间, 例如 2025/12/22 12:48:13
---
```

@tab 反例

```markdown
# 标题
```

:::

## 每个结构之间空一行

不这么做会渲染错误

::: tabs

@tab:active 正例

```markdown
# 标题1

# 标题2

第1行

第2行

* 第1项
* 第2项
* 第3项
```

@tab 反例

```markdown
# 标题1

# 标题2

第1行
第2行

* 第1项

* 第2项

* 第3项
```

:::

## 代码块内的内容需在编辑器中格式化

这样看起来好看一点, 并且和其他文档格式保持一致

::: tabs

@tab:active 正例

````markdown
```javascript
let i = 1;
while (i <= 3) {
	console.log(`这是我循环的第${i}遍`)
	i++
}
```
````

@tab 反例

````markdown
```javascript
let i=1;
while(i<=3){
console.log(`这是我循环的第${i}遍`)
 i++
}
```
````

:::

## 代码块缩进大小为制表符4

::: tabs

@tab:active 正例

````markdown
```javascript
let i = 1;
while (i <= 3) {
	console.log(`这是我循环的第${i}遍`)
	i++
}
```
````

@tab 反例

````markdown
```javascript
let i = 1
while (i <= 3) {
  console.log(`这是我循环的第${i}遍`)
  i++
}
```
````

:::

## 加粗两边不需要加空格

::: tabs

@tab:active 正例

```markdown
**JS**全称**JavaScript**, 是一门跨平台, 面向对象的脚本语言, 它能使网页可交互(例如拥有复杂的动画, 可点击的按钮,
通俗的菜单等)
```

@tab 反例

```markdown
**JS** 全称 **JavaScript** , 是一门跨平台, 面向对象的脚本语言, 它能使网页可交互(例如拥有复杂的动画, 可点击的按钮,
通俗的菜单等)
```

:::

## 逗号后面需加空格

::: tabs

@tab:active 正例

```markdown
**JS**全称**JavaScript**, 是一门跨平台, 面向对象的脚本语言, 它能使网页可交互(例如拥有复杂的动画, 可点击的按钮,
通俗的菜单等)
```

@tab 反例

```markdown
**JS**全称**JavaScript**,是一门跨平台,面向对象的脚本语言,它能使网页可交互(例如拥有复杂的动画,可点击的按钮,通俗的菜单等)
```

:::

## 优先使用文档内置的组件

:::: tabs

@tab:active 正例

::: tip
1 + 1 = 2
:::

@tab 反例

> 注意: 1 + 1 = 2

::::

更多组件, 请浏览[文档组件](/elake_docs/writing/basic)

如果没有你想要的, 你可以自己写一个, 文档的框架是[Vuepress](https://vuepress.vuejs.org),
主题是[Plume](https://theme-plume.vuejs.press), 经过检查后可以加入
