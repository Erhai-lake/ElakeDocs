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
			link: "programming_language/index",
			icon: "streamline-ultimate:programming-language-html-5",
			collapsed: false,
			items: [
				"html5css3/index",
				"javascript/index",
				"python/index",
				"java/index"
			]
		},
		{
			text: "工具",
			prefix: "tools/",
			link: "tools/index",
			icon: "ri:tools-fill",
			collapsed: false,
			items: [
				"git/index",
				"regular_expression/index",
				"blender/index"
			]
		},
		{
			text: "底层技术",
			prefix: "underlying_technology/",
			link: "underlying_technology/index",
			icon: "hugeicons:nano-technology",
			collapsed: false,
			items: [
				"number_base/index"
			]
		},
		{
			text: "Minecraft",
			prefix: "minecraft/",
			link: "minecraft/index",
			icon: "arcticons:minecraft-creeper",
			collapsed: false,
			items: []
		},
		{
			text: "Other",
			prefix: "other/",
			link: "other/index",
			icon: "icon-park-outline:more-four",
			collapsed: false,
			items: [
				"human_machine_tutorial/index"
			]
		}
	]
})