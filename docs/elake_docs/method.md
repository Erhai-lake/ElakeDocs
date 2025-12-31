---
title: 编写方法
icon: octicon:thumbsup-24
createTime: 2025/12/22 20:35:03
---

## 文档规范

请详看规范: [文档规范](specification.md)

## 新建一个文档

确认你需要创建文档的类型, 目前有两种类型:`project`, `knowledge`.

`project`类型用于记录项目相关的知识, 如`ElakeApi`, `ElakeMinecraftLoaderCore`等.

`knowledge`类型用于记录教程相关的知识, 如`java`, `javascript`等.

其中`knowledge`类型下, 还有一些分类, 例如: 代码语言教程, 需要放在`programming_language`文档中.

如果你的文档类型不存在, 可以创建一个新的, 你看着放吧, 我也不知道你要写什么.

提交时我会检查的, 有问题我会修改/及时通知你.

确认好类型后, 例如我要创建`python`的教程, 那么就在`/docs/knowledge/programming_language`目录下新建一个文件夹, 如`python`.

## 创建一篇文章

在`python`文件夹下新建一篇文章.

然后在头部编写`frontmatter`.

```markdown
---
title: 标题
createTime: 创建时间, xxxx/xx/xx xx:xx:xx
---
```

如果是文档首次创建文章, 请创建`index.md`.

## 新建侧边栏目录

给python文档新建一个侧边栏目录.

在`/.vuepress/collections/knowledge`中新建`python.js`, 并写入以下内容:

```javascript
import {defineCollection} from "vuepress-theme-plume"

export const number_base = defineCollection({
	type: "doc",
	dir: "knowledge/programming_language/python",
	title: "Python",
	sidebar: [
		"index"
	]
})
```

为了进入这个文档, 还需要修改1~2个文件.

### 知识库侧边栏

```javascript title="/.vuepress/collections/knowledge/knowledge.js" :no-collapsed-lines
export const knowledge = defineCollection({
	type: "doc",
	dir: "knowledge",
	title: "知识库",
	sidebar: [
		"index",
		{
			text: "编程语言",
			prefix: "programming_language/",
			collapsed: false,
			items: [
				"python/index" // [!code ++]
			]
		},
	]
})
```

### 编程语言导航页面

```markdown title="/.vuepress/collections/knowledge/knowledge.js" :no-collapsed-lines
---
title: 编程语言
createTime: 2025/12/25 12:57:44
---

::: card-grid

<LinkCard title="Python" href="python/index" description="描述"/> // [!code ++]

:::
```

## 测试一下

在`knowledge`或`programming_language`页面中, 可以跳转到`Python`文档, 并且目录显示为独立目录即为成功.

如果成功跳转了, 但是不是独立目录, 请检查侧边栏中目录`/.vuepress/collections/knowledge`

测试成功后就可以继续写文档了, 每写一篇, 需要在`/docs/knowledge/programming_language/python/`中添加文章.

然后在`/.vuepress/collections/knowledge/python.js`对应路径添加文章.

## 总结

:::: code-tree title="Python 目录结构" height="500px" entry=".vuepress/collections/knowledge/python.js"

```javascript title=".vuepress/collections/knowledge/python.js"
import {defineCollection} from "vuepress-theme-plume"

export const python = defineCollection({
	type: "doc",
	dir: "knowledge/programming_language/python",
	title: "Python",
	sidebar: [
		"index"
	]
})
```

```javascript title=".vuepress/collections/knowledge/knowledge.js"
import {defineCollection} from "vuepress-theme-plume"

export const knowledge = defineCollection({
	type: "doc",
	dir: "knowledge",
	title: "知识库",
	sidebar: [
		"index",
		{
			text: "编程语言",
			prefix: "programming_language/",
			collapsed: false,
			items: [
				"python/index"
			]
		}
	]
})
```

```markdown title="knowledge/programming_language/index.md"
---
title: 编程语言
createTime: 2025/12/25 12:57:44
---

::: card-grid

<LinkCard 
	title="Python" 
	href="python/index" 
	description="Python是编程语言" 
	icon="proicons:python"/>

:::
```

```markdown title="knowledge/programming_language/python/index.md"
---
title: Python
createTime: 2025/12/26 21:46:30
---

测试 测试 测试 测试 测试 测试 测试
```
::::

## 其他操作

联系我!

其实以上的所有操作, 都可以直接联系我帮你完成.

一般情况下, 各位编辑者, 只需要提交文章就行了, 文档和目录我们会负责配置好的, 但是文档内的目录还是需要各位手动配置的.
