import {defineCollection} from "vuepress-theme-plume"

export const project = defineCollection({
	type: "doc",
	dir: "project",
	title: "项目文档",
	sidebar: [
		"index"
	]
})