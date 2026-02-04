---
title: 文件树
icon: mdi:file-tree
createTime: 2025/12/23 14:16:44
---

在Markdown中, 你可以使用`file-tree`容器 来显示带有文件图标和可折叠子目录的目录结构.

在`::: file-tree`容器, 使用内置的Markdown无序列表语法指定文件和目录的组织结构. 使用嵌套的列表项创建子目录.

若希望某个目录不显示具体内容, 只需在列表项末尾添加斜杠`/`即可.

以下语法可用于自定义文件树的外观

* 通过加粗文件名或目录名来突出显示，例如 `**README.md**`.
* 通过在名称后添加更多文本来为文件或目录添加注释.
* 通过在名称前添加`++`或`--`来标记文件或目录为新增或删除.
* 使用`...`或`…`作为名称来添加占位符文件和目录.
* 在`:::file-tree`后添加`icon="simple"`或添加`icon="colored"`可以切换为简单图标或彩色图标, 默认为彩色图标.
* 在`:::file-tree`后添加`title="xxxx"`可以为文件树添加标题.

```markdown
::: file-tree
- docs
	- .vuepress
		- ++ config.js
		- -- navbar.md
		- README.md
		- elake_docs
			- **writing**
				- file_tree.md 当前的文件
			- index.js
- package.json
- pnpm-lock.yaml
- **.gitignore**
- README.md
:::
```

:::: demo-wrapper
::: file-tree
- docs
  - .vuepress
      - ++ config.js
      - -- navbar.md
      - README.md
    - elake_docs
        - **writing**
            - file_tree.md 当前的文件
        - index.js
- package.json
- pnpm-lock.yaml
- **.gitignore**
- README.md
:::
::::
