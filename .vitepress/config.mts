// vitepress主题
// import { defineConfig } from 'vitepress'
// mermaid主题
import { withMermaid } from 'vitepress-plugin-mermaid'
// escook主题
import escookConfig from '@escook/vitepress-theme/config'
// 分组代码块图标
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
// 图片放大
import mdItCustomAttrs from 'markdown-it-custom-attrs'
// 选项卡
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
// 自定义图片尺寸
import { imgSize } from '@mdit/plugin-img-size'
// 对齐方式
import { align } from '@mdit/plugin-align'
// 目录
import { Sidebar } from './Sidebar'
// 导航栏
import { Navbar } from './Navbar'

// https://vitepress.dev/reference/site-config
export default withMermaid({
    // 排除目录
    srcExclude: ['**/README.md'],
    // 继承escook主题
    extends: escookConfig,
    // 语言
    lang: 'zh_CN',
    // 标题
    title: "洱海文档",
    // 描述
    description: "记录点滴 见证思考 分享成长",
    // 基础路径
    base: process.env.VITEPRESS_BASE || "/",
    // 头部
    head: [
        // Logo
        ['link', { rel: 'icon', href: '//api.elake.top/Logo/' },],
        // 图集
        ["link", { rel: "stylesheet", href: "//cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
        ["script", { src: "//cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
        // 新年快乐
        // ["script", { src: "//api.vvhan.com/api/script/denglong" }]
    ],
    // 最后更新时间
    lastUpdated: true,
    markdown: {
        // 报警框
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息'
        },
        // 图片懒加载
        image: {
            lazyLoading: true
        },
        config(MD) {
            MD.use(groupIconMdPlugin)
            MD.use(mdItCustomAttrs, "image", {
                "data-fancybox": "gallery",
            })
            MD.use(tabsMarkdownPlugin)
            // 自定义图片尺寸
            MD.use(imgSize)
            // 对齐方式
            MD.use(align)
        },
        // 启用数学公式
        math: true
    },
    vite: {
        plugins: [
            groupIconVitePlugin()
        ],
    },
    // 默认暗黑主题
    appearance: 'dark',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // 鼠标点击纸屑
        confetti: true,
        // i18
        i18nRouting: false,
        // Logo
        logo: '//api.elake.top/Logo/',
        // 导航栏
        nav: Navbar,
        // 侧边栏
        sidebar: Sidebar,
        // 导航栏社交
        socialLinks: [
            {
                icon: 'github',
                link: '//github.com/Erhai-lake/ElakeDocs'
            }
        ],
        // 编辑链接
        editLink: {
            pattern: '//github.com/Erhai-lake/ElakeDocs/edit/master/:path',
            text: '在GitHub上编辑此页'
        },
        // 搜索
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭',
                        }
                    }
                }
            }
        },
        // 上一页下一页
        docFooter: {
            prev: '返回上一章',
            next: '阅读下一章'
        },
        // 移动端外观切换按钮标题
        darkModeSwitchLabel: '外观切换',
        // 明亮模式悬浮标题
        lightModeSwitchTitle: '明亮模式',
        // 暗黑模式悬浮标题
        darkModeSwitchTitle: '暗黑模式',
        // 移动端侧边栏菜单标题
        sidebarMenuLabel: '目录',
        // 移动端返回顶部按钮标题
        returnToTopLabel: '返回顶部',
        // 最后更新标题
        lastUpdated: {
            text: '最后更新于 '
        }
    }
})
