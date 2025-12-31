/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 */

import {viteBundler} from "@vuepress/bundler-vite"
import {defineUserConfig} from "vuepress"
import {plumeTheme} from "vuepress-theme-plume"

export default defineUserConfig({
	base: "/",
	lang: "zh-CN",
	title: "洱海文档",
	description: "记录点滴 见证思考 分享成长",
	head: [
		// 配置站点图标
		["link", {rel: "icon", type: "image/png", href: "/images/logo.svg"}],
	],
	bundler: viteBundler(),
	// 站点较大, 页面数量较多时, 不建议启用
	shouldPrefetch: false,
	theme: plumeTheme({
		// Shiki 代码高亮 https://theme-plume.vuejs.press/config/plugins/code-highlight/
		codeHighlighter: {
			twoslash: true,
			whitespace: true,
			collapsedLines: true
		},
		// 本地搜索,
		search: {provider: "local"},
		// Algolia DocSearch 启用此搜索需要将 本地搜索 search 设置为 false https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
		// search: {
		//   provider: "algolia",
		//   appId: "",
		//   apiKey: "",
		//   indices: [""],
		// },
		// 评论 comments https://theme-plume.vuejs.press/guide/features/comments/
		comment: {
			provider: "Giscus",
			comment: true,
			repo: "Erhai-lake/ElakeDocs",
			repoId: "R_kgDOLeekng",
			category: "comment",
			categoryId: "DIC_kwDOLeekns4C0K16"
		},
		// 水印 https://theme-plume.vuejs.press/guide/features/watermark/
		// watermark: true,
		readingTime: true,
		// 资源链接替换 https://theme-plume.vuejs.press/guide/features/replace-assets/
		// replaceAssets: "https://cdn.example.com",
		// 添加您的部署域名, 有助于 SEO, 生成 sitemap
		hostname: "https://docs.elake.top",
		// 为 markdown 文件自动添加 frontmatter 配置 https://theme-plume.vuejs.press/config/theme/#autofrontmatter
		autoFrontmatter: {
			permalink: false,
			createTime: true,
			title: true,
		},
		// 编译缓存, 加快编译速度 https://theme-plume.vuejs.press/config/theme/#cache
		cache: "filesystem",
		// 文档仓库配置, 用于 editLink
		docsRepo: "https://github.com/Erhai-lake/ElakeDocs",
		docsBranch: "master",
		docsDir: "docs",
		// 页内信息 编辑 更新时间 贡献者 变更日志
		editLink: true,
		lastUpdated: true,
		contributors: true,
		changelog: false,
		/**
		 * markdown
		 * @see https://theme-plume.vuejs.press/config/markdown/
		 */
		markdown: {
			abbr: true,
			pdf: true,
			plot: true,
			codeTree: true,
			field: true,
			bilibili: true,
			acfun: true,
			youtube: true,
			artPlayer: true,
			audioReader: true,
			echarts: true,
			chartjs: true,
			mermaid: true,
			demo: true,
			imageSize: "true",
			image: {
				figure: true,
				lazyload: true,
				mark: true,
				size: true,
			},
			qrcode: true,
			chat: true
			//   annotation: true,   // 启用 annotation 语法  [+label]: content
			//   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
			//   icon: { provider: "iconify" },        // 启用内置图标语法  ::icon-name::
			//   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
			//   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
			//   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
			//   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
			//   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
			//   collapse: true,     // 启用折叠容器  ::: collapse
			//   repl: {             // 启用 代码演示容器
			//     go: true,         // ::: go-repl
			//     rust: true,       // ::: rust-repl
			//     kotlin: true,     // ::: kotlin-repl
			//     python: true,     // ::: python-repl
			//   },
			//   math: {             // 启用数学公式
			//     type: "katex",
			//   },
			//   flowchart: true,    // 启用 flowchart
			//   include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
		}
	})
})
