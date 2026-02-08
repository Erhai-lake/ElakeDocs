import {defineCollection} from "vuepress-theme-plume"

export const mock_service = defineCollection({
	type: "doc",
	dir: "project/mock_service",
	title: "mock_service",
	sidebar: [
		"index",
		"import",
		"i18n",
		"param",
		"list",
		{
			text: "获取原始数据",
			prefix: "get_original/",
			icon: "material-symbols:docs-outline",
			collapsed: false,
			items: [
				"generator_category",
				"generator",
				"processor_category",
				"processor",
				"generator_processor",
				"expand"
			]
		},
		{
			text: "获取信息",
			prefix: "get_info/",
			icon: "material-symbols:docs-outline",
			collapsed: false,
			items: [
				"generator_category",
				"generator",
				"processor_category",
				"processor",
				"generator_processor"
			]
		},
		{
			text: "获取信息组",
			prefix: "get_info_groups/",
			icon: "material-symbols:docs-outline",
			collapsed: false,
			items: [
				"generator_groups",
				"processor_groups",
				"generator_processor_groups"
			]
		},
		{
			text: "生成与处理",
			prefix: "generator_processor/",
			icon: "material-symbols:docs-outline",
			collapsed: false,
			items: [
				"generator",
				"processor"
			]
		},
		{
			text: "模板生成与解析",
			prefix: "template/",
			icon: "material-symbols:docs-outline",
			collapsed: false,
			items: [
				"template",
				"generate_template",
				"extract_templates",
				"template_generate_data",
				"resolve_template"
			]
		},
		{
			text: "自定义",
			prefix: "custom/",
			icon: "material-symbols:docs-outline",
			collapsed: false,
			items: [
				"principle",
				"generator_registry",
				"processor_registry",
				"i18n_registry",
				"integration",
				"processor_to_generator"
			]
		},
		{
			text: "其他",
			prefix: "other/",
			icon: "material-symbols:docs-outline",
			collapsed: false,
			items: [
				"reload"
			]
		}
	]
})