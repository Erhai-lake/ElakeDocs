import {defineCollection} from "vuepress-theme-plume"

export const regular_expression = defineCollection({
	type: "doc",
	dir: "knowledge/tools/regular_expression",
	title: "正则表达式",
	sidebar: [
		"index",
		"fuzzy_matching",
		"position_matching",
		"the_role_of_brackets",
		"principle_of_backtracking",
		"split",
		"build",
		"modifier",
		"end"
	]
})