import { h } from "vue"
import {defineClientConfig} from "vuepress/client"
import RepoCard from "vuepress-theme-plume/features/RepoCard.vue"
import NpmBadge from "vuepress-theme-plume/features/NpmBadge.vue"
import NpmBadgeGroup from "vuepress-theme-plume/features/NpmBadgeGroup.vue"
import AsideNav from "./theme/components/AsideNav.vue"
import {Layout} from "vuepress-theme-plume/client"
// import Swiper from "vuepress-theme-plume/features/Swiper.vue"

import DateTime from "./theme/components/DateTime.vue"

import "./theme/styles/custom.css"

export default defineClientConfig({
	enhance({app}) {
		// built-in components
		app.component("RepoCard", RepoCard)
		app.component("NpmBadge", NpmBadge)
		app.component("NpmBadgeGroup", NpmBadgeGroup)
		// app.component("Swiper", Swiper) // you should install `swiper`

		// your custom components
		app.component("DateTime", DateTime)
	},
	layouts: {
		Layout: h(Layout, null, {
			"aside-outline-after": () => h(AsideNav),
		})
	}
})
