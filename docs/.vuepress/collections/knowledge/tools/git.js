import {defineCollection} from "vuepress-theme-plume"

export const git = defineCollection({
	type: "doc",
	dir: "knowledge/tools/git",
	title: "Git",
	sidebar: [
		"index",
		"download_and_install",
		"basic_process",
		"branch",
		"remote_store",
		"vs_code_use_git",
		"idea_use_git",
		"pr",
		"end",
		"command_quick_lookup_table"
	]
})