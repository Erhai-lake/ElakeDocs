<template>
	<span class="DateTime">{{ formattedTime }}</span>
</template>

<script setup>
import {computed} from "vue"

const props = defineProps({
	Format: {
		type: String,
		default: "yyyy-MM-dd HH:mm:ss"
	}
})

const formattedTime = computed(() => {
	const NOW = new Date()
	const YEAR = NOW.getFullYear()
	const MONTH = String(NOW.getMonth() + 1).padStart(2, "0")
	const DAY = String(NOW.getDate()).padStart(2, "0")
	const HOURS = String(NOW.getHours()).padStart(2, "0")
	const MINUTES = String(NOW.getMinutes()).padStart(2, "0")
	const SECONDS = String(NOW.getSeconds()).padStart(2, "0")

	return props.Format
		.replace("yyyy", YEAR.toString())
		.replace("MM", MONTH.toString())
		.replace("dd", DAY.toString())
		.replace("HH", HOURS.toString())
		.replace("mm", MINUTES.toString())
		.replace("ss", SECONDS.toString())
})
</script>
