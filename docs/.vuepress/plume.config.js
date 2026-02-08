/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 */

import {defineThemeConfig} from "vuepress-theme-plume"
import navbar from "./navbar"
import collections from "./collections"

export default defineThemeConfig({
	logo: "/images/logo.svg",
	appearance: true,
	navbarSocialInclude: [],
	aside: true,
	outline: [2, 6],
	copyright: true,
	prevPage: true,
	nextPage: true,
	createTime: true,
	footer: {
		message: "Power by <a target='_blank' href='https://v2.vuepress.vuejs.org/'>VuePress</a> & <a target='_blank' href='https://theme-plume.vuejs.press'>vuepress-theme-plume</a>",
		copyright: "Copyright © 2024-present Erhai_lake",
	},
	profile: {
		avatar: "/images/logo.svg",
		name: "洱海文档",
		description: "记录点滴 见证思考 分享成长",
		circle: true
	},
	navbar,
	collections,
	/**
	 * 公告板
	 * @see https://theme-plume.vuejs.press/guide/features/bulletin/
	 */
	// bulletin: {
	//   layout: 'top-right',
	//   contentType: 'markdown',
	//   title: '公告板标题',
	//   content: '公告板内容',
	// },

	/* 过渡动画 @see https://theme-plume.vuejs.press/config/theme/#transition */
	transition: {
		//   page: true,        // 启用 页面间跳转过渡动画
		//   postList: true,    // 启用 博客文章列表过渡动画
		// 深色模式切换过渡动画, 或配置过渡动画类型
		appearance: "circle-clip",
	},

})
