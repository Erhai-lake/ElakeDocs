<script setup>
import Theme from "@escook/vitepress-theme"
import ArticleMetadata from "/.vitepress/theme/Components/ArticleMetadata.vue"
import ContributorsAndUpdateLog from "/.vitepress/theme/Components/ContributorsAndUpdateLog.vue"
import Copyright from "/.vitepress/theme/Components/Copyright.vue"
import LinkIcon from "/.vitepress/theme/Components/LinkIcon.vue"

const { Layout } = Theme
</script>

<template>
    <LinkIcon />
    <Layout>
        <template #doc-before>
            <ArticleMetadata />
        </template>
        <template #doc-footer-before>
            <ContributorsAndUpdateLog />
        </template>
        <template #doc-after>
            <Copyright />
        </template>
        <template #home-features-after>
            <Copyright />
        </template>
    </Layout>
</template>
