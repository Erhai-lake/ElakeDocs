// escook主题
import Theme from "@escook/vitepress-theme"
import "@escook/vitepress-theme/style.css"
// 分组代码块图标
import "virtual:group-icons.css"
// 看板娘
import { live2d } from "./live2d"
// 选项卡
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client"
// 折叠面板全局组件
import FoldingPanel from "./Components/FoldingPanel.vue"
// 自定义布局
import Layout from "./Layout.vue"
import "./index.css"

export default {
    ...Theme,
    // 自定义布局
    Layout: Layout,
    async enhanceApp({ app, router, siteData }) {
        app.component("FoldingPanel", FoldingPanel)
        enhanceAppWithTabs(app)
        if (Theme.enhanceApp) {
            Theme.enhanceApp({ app, router, siteData })
        }
        if (!import.meta.env.SSR) {
            const { loadOml2d } = await import("oh-my-live2d")
            loadOml2d({
                dockedPosition: "right",
                models: live2d,
                sayHello: false,
                menus: {
                    items: [
                        {
                            id: "Rest",
                            icon: "icon-rest",
                            title: "休息",
                            onClick(oml2d) {
                                oml2d.stageSlideOut()
                                oml2d.statusBarOpen()
                            }
                        },
                        {
                            id: "SwitchModel",
                            icon: "icon-switch",
                            title: "切换模型",
                            onClick(oml2d) {
                                oml2d.loadNextModel()
                            }
                        },
                        {
                            id: "SwitchClothes",
                            icon: "icon-skin",
                            title: "切换衣服",
                            onClick(oml2d) {
                                oml2d.loadNextModelClothes()
                            }
                        },
                        {
                            id: "About",
                            icon: "icon-about",
                            title: "关于",
                            onClick() {
                                window.open("//www.elake.top")
                            }
                        }
                    ]
                }
            })
        }
    }
}
