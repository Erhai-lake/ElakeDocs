import {defineCollection} from "vuepress-theme-plume"

export const human_machine_tutorial = defineCollection({
	type: "doc",
	dir: "knowledge/other/human_machine_tutorial",
	title: "人机教程",
	sidebar: [
		"index",
		"what_is_computer",
		"how_to_boot",
		"recognize_desktop_and_mouse_keyboard"
	]
})