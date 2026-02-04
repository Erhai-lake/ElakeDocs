import {defineCollection} from "vuepress-theme-plume"

export const elake_docs = defineCollection({
	type: "doc",
	dir: "elake_docs",
	title: "洱海文档",
	sidebar: [
		{
			text: "文档",
			prefix: "/elake_docs/",
			icon: "material-symbols:docs-outline",
			collapsed: false,
			items: [
				"user_terms",
				"method",
				"specification"
			]
		},
		{
			text: "核心成员",
			prefix: "core_members/",
			icon: "ri:team-line",
			collapsed: false,
			items: [
				"erhai_lake",
				"qi_month"
			]
		},
		{
			text: "写作",
			prefix: "writing/",
			icon: "fluent-mdl2:edit-create",
			collapsed: false,
			items: [
				{
					text: "markdown",
					prefix: "markdown/",
					icon: "material-symbols:markdown-outline",
					collapsed: true,
					items: [
						"basic",
						"extensions",
						"attrs",
						"emoji",
						"math",
						"icon",
						"mark",
						"plot",
						"abbreviation",
						"container",
						"card",
						"steps",
						"file_tree",
						"code_tree",
						"qrcode",
						"field",
						"tabs",
						"demo_wrapper",
						"code",
						"chat"
					]
				},
				{
					text: "代码演示",
					prefix: "repl/",
					icon: "carbon:demo",
					collapsed: true,
					items: [
						"frontend"
					]
				},
				{
					text: "图表",
					prefix: "chart/",
					icon: "tabler:chart-line",
					collapsed: true,
					items: [
						"echarts",
						"chartjs",
						"mermaid"
					]
				},
				{
					text: "资源嵌入",
					prefix: "reader/",
					icon: "dashicons:embed-video",
					collapsed: true,
					items: [
						"pdf",
						"bilibili",
						"acfun",
						"youtube",
						"artplayer",
						"audio"
					]
				}
			]
		},
		{
			text: "组件",
			prefix: "components/",
			icon: "uiw:component",
			collapsed: false,
			items: [
				"badge",
				"card",
				"card_grid",
				"link_card",
				"image_card",
				"card_masonry",
				"github_repo_card",
				"npm_badge"
			]
		}
	]
})
