---
title: 代码树
icon: stash:side-peek
createTime: 2025/12/23 15:11:35
---

在markdown中, 使用`::: code-tree`容器, 可以显示一个带有文件树的代码块区域.

相比于代码块分组, 代码树可以更加清晰地展示代码文件的组织结构, 以及文件的依赖关系.

## code-tree 容器

````markdown
::: code-tree title="项目名称" height="400px" entry="filepath"
```lang title="filepath" :active
<!-- code content-->
```

```lang title="filepath"
<!-- code content-->
```
<!-- 更多代码块 -->
:::
````

使用`::: code-tree`容器包裹多个代码块.

* 在`::: code-tree`后使用`title="Project Name"`声明代码树的标题.
* 在`::: code-tree`后使用`height="400px"`声明代码树的高度.
* 在`::: code-tree`后使用`entry="filepath"`声明默认展开的文件路径.
* 在代码块` ``` lang`后使用`title="filepath"`声明当前代码块的文件路径.
* 如果在`::: code-tree`未声明`entry="filepath"`, 可以在代码块` ``` lang`后使用`:active`声明当前代码块为展开状态.
* 如果未指定展开的文件路径, 默认展开第一个文件

````markdown
::: code-tree title="Vue App" height="400px" entry="src/main.js"
```vue title="src/components/HelloWorld.vue"
<template>
  <div class="hello">
    <h1>Hello World</h1>
  </div>
</template>
```

```vue title="src/App.vue"
<template>
  <div id="app">
    <h3>vuepress-theme-plume</h3>
    <HelloWorld />
  </div>
</template>
```

```ts title="src/main.js"
import { createApp } from "vue"
import App from "./App.vue"

createApp(App).mount("#app")
```

```json title="package.json"
{
  "name": "Vue App",
  "scripts": {
    "dev": "vite"
  }
}
```
:::
````

:::: demo-wrapper
::: code-tree title="Vue App" height="400px" entry="src/main.js"
```vue title="src/components/HelloWorld.vue"
<template>
  <div class="hello">
    <h1>Hello World</h1>
  </div>
</template>
```

```vue title="src/App.vue"
<template>
  <div id="app">
    <h3>vuepress-theme-plume</h3>
    <HelloWorld />
  </div>
</template>
```

```ts title="src/main.js"
import { createApp } from "vue"
import App from "./App.vue"

createApp(App).mount("#app")
```

```json title="package.json"
{
  "name": "Vue App",
  "scripts": {
    "dev": "vite"
  }
}
```
:::
::::

## 从目录导入 code-tree

主题支持通过以下语法从目录导入`code-tree`

```markdown
<!-- 简单导入 -->
@[code-tree](dir_path)

<!-- 添加的配置 -->
@[code-tree title="Project Name" height="400px" entry="filepath"](dir_path)
```

* dir_path: 当传入绝对路径, 即以`/`开头时, 从文档站点的源目录开始查找. 当传入相对路径时, 即以`.`开头时, 表示相对于当前 markdown 文件.
* title: 代码树标题, 可选, 默认为空.
* height: 代码树高度, 可选, 默认为空.
* entry: 默认展开的文件路径, 可选, 默认为第一个文件.
