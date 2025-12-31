---
title: 图标
icon: grommet-icons:emoji
createTime: 2025/12/22 22:41:22
---

图标语法为行内语法, 可以在段落中与其他 markdown 语法混合使用.

基础语法, 使用`::`包裹图标名称

```markdown
::name::
```

设置图标大小和颜色(注意空格不可缺少)

```markdown
::name =size::
::name /color::
::name =size /color::
```

* `=size` 设置图标大小
  * `=16` 图标的宽高为 16px
  * `=24x16` 图标的宽为 24px，高为 16px
  * `=x16` 图标的高为 16px，宽为自适应
  * `=1.2em` 图标的宽高为 1.2em
  * `=1.2emx1.5em` 图标的宽为 1.2em，高为 1.5em
* `/color` 设置图标颜色，支持 hex/ rgb / rgba / hsl / hsla 等合法颜色色值
  * `/#fff` 图标的颜色为 #fff
  * `/rgb(255,0,0)` 图标的颜色为 rgb(255,0,0)

[iconify](https://iconify.design/) 提供了 200K + 的开源图标支持, 足以满足大多数项目的需求. 主题将 iconify 作为默认的图标来源支持.

在 Markdown 中使用`::collect:name`语法来插入图标.

## 使用

[搜索器](https://icon-sets.iconify.design/) 可以帮助你快速找到需要的图标.

然后直接粘贴即可

```markdown
::carbon:home::
```

::: demo-wrapper
::carbon:home::
:::

```markdown
* github: ::tdesign:logo-github-filled::
* 修改颜色: ::tdesign:logo-github-filled /#f00::
* 修改大小: ::tdesign:logo-github-filled =36px::
* 修改大小颜色: ::tdesign:logo-github-filled =36px /#f00::
* 彩色图标: ::skill-icons:vscode-dark =36px::
```

::: demo-wrapper
* github: ::tdesign:logo-github-filled::
* 修改颜色: ::tdesign:logo-github-filled /#f00::
* 修改大小: ::tdesign:logo-github-filled =36px::
* 修改大小颜色: ::tdesign:logo-github-filled =36px /#f00::
* 彩色图标: ::skill-icons:vscode-dark =36px::
:::
