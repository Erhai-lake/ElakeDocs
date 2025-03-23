# 编写方法

## 新建一个文档

确认你需要创建文档的类型, 目前有两种类型:`Project`, `Knowledge`

`Project`类型用于记录项目相关的知识, 如`ElakeApi`, `ElakeMinecraftLoaderCore`等

`Knowledge`类型用于记录教程相关的知识, 如`Java`, `JavaScript`等

其中`Knowledge`类型下, 还有些分类, 代码语言教程, 需要放在`ProgrammingLanguage`文档中

如果你的文档类型不存在, 可以创建一个新的(但是最好还是先联系我)

确认好类型后, 例如我要创建Python的教程, 那么就在`/Docs/Knowledge/ProgrammingLanguage`目录下新建一个文件夹, 如`Java`

## 创建一篇文章

在`Java`文件夹下新建一篇文章

如果是文档首次创建文章, 请创建`Java.md`

然后在头部编写一级标题

```md [/Docs/Knowledge/ProgrammingLanguage/Java/Java.md]
# 前言
```

## 新建侧边栏目录

### 文档目录

在文档目录下新建`Sidebar.ts`文件, 并写入以下内容:

```ts [/Docs/Knowledge/ProgrammingLanguage/Java/Sidebar.ts]
export const JavaSidebar: any[] = [
    {
        text: 'Java',
        items: [
            {
                text: '前言',
                link: '/Docs/Knowledge/ProgrammingLanguage/Java/Java'
            }
        ]
    }
]
```

其中`JavaSidebar`是文档名称加`Sidebar`

`/Docs/Knowledge/ProgrammingLanguage/Java/Java`是文档的相对路径, 后缀`.md`需省略, 如果后续有新的文档, 可以继续添加到`items`中, 例如:

```ts [/Docs/Knowledge/ProgrammingLanguage/Java/Sidebar.ts]
export const JavaSidebar: any[] = [
    {
        text: 'Java',
        items: [
            {
                text: '前言',
                link: '/Docs/Knowledge/ProgrammingLanguage/Java/Java'
            },
            { // [!code ++]
                text: '环境', // [!code ++]
                link: '/Docs/Knowledge/ProgrammingLanguage/Java/Environment' // [!code ++]
            } // [!code ++]
        ]
    }
]
```

详细请阅读[vitepress的侧边栏配置](https://vitepress.dev/zh/reference/default-theme-sidebar)

### 文档入口目录

为了进入这个文档, 还需要修改`/Docs/Knowledge/Sidebar.ts`

```ts [/Docs/Knowledge/Sidebar.ts]
export const KnowledgeSidebar: any[] = [
    {
        text: '知识库',
        items: [
            {
                text: '前言',
                link: '/Docs/Knowledge/Knowledge'
            },
            {
                text: '编程语言',
                collapsed: true,
                items: [
                    {
                        text: 'JS',
                        link: '/Docs/Knowledge/ProgrammingLanguage/JavaScript/JavaScript'
                    },
                    {
                        text: 'Java',
                        link: '/Docs/Knowledge/ProgrammingLanguage/Java/Java'
                    }
                ]
            }
        ]
    }
]

```

这一级的作用是可以在`Knowledge`的侧边栏中显示并跳转到`Java`

### 侧边栏总目录

`/.vitepress/Sidebar.ts`是侧边栏的总目录

我们需要在`/.vitepress/Sidebar.ts`中添加新的目录

```ts [/.vitepress/Sidebar.ts]
// JS
import { JavaScriptSidebar } from '../Docs/Knowledge/ProgrammingLanguage/JavaScript/Sidebar'
// Java // [!code ++]
import { JavaSidebar } from '../Docs/Knowledge/ProgrammingLanguage/Java/Sidebar' // [!code ++]

export const Sidebar: any = {
    // JS
    '/Docs/Knowledge/ProgrammingLanguage/JavaScript/': JavaScriptSidebar,
    // Java // [!code ++]
    '/Docs/Knowledge/ProgrammingLanguage/Java/': JavaSidebar // [!code ++]
}
```
::: warning
这里面为了可读性, 请写注释!
:::

其中`'/Docs/Knowledge/ProgrammingLanguage/Java/'`是路径, `JavaS`文档的路径

## 测试一下

在`Knowledge`页面中, 可以跳转到`Java`文档, 并且目录显示为独立目录即为成功

如果成功跳转了, 但是不是独立目录, 请检查侧边栏中目录`/.vitepress/Sidebar.ts`

测试成功后就可以继续写文档了, 每写一篇, 需要在`/Docs/Knowledge/ProgrammingLanguage/Java/Sidebar.ts`中添加对应路径

## 其他操作

联系我!

其实以上的所有操作, 都可以直接联系我帮你完成

一般情况下, 各位编辑者, 只需要提交文章就行了, 文档和目录我们会负责配置好的, 但是文档内的目录还是需要各位手动配置的
