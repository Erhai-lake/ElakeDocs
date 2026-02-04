import {defineCollection} from "vuepress-theme-plume"

export const java = defineCollection({
	type: "doc",
	dir: "knowledge/programming_language/java",
	title: "Java",
	sidebar: [
		"index",
		"environment",
		"ide",
		"first_program",
		"java_errors",
		"java_project_structure",
		"hello_world_to_idea",
		"annotation",
		"functional_units",
		"literals",
		"variables",
		"data_types",
		"keywords_and_identifiers",
		"method",
		"type_conversion",
		"input_output",
		"specification"
	]
})