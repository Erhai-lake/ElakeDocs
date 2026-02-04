import {defineCollection} from "vuepress-theme-plume"

export const python = defineCollection({
	type: "doc",
	dir: "knowledge/programming_language/python",
	title: "Python",
	sidebar: [
		"index"
	]
})