import {defineCollection} from "vuepress-theme-plume"

export const number_base = defineCollection({
	type: "doc",
	dir: "knowledge/underlying_technology/number_base",
	title: "进制",
	sidebar: [
		"index",
		"number_base_conversion_general_rules",
		"two_eight_hexadecimal_fast_conversion",
		"decimal_and_decimal_representation",
		"integer_and_complement_representation",
		"end"
	]
})