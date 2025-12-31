import {defineCollection} from "vuepress-theme-plume"

export const blender = defineCollection({
	type: "doc",
	dir: "knowledge/tools/blender",
	title: "Blender",
	sidebar: [
		"index",
		"download_and_install",
		"taming_hands"
	]
})