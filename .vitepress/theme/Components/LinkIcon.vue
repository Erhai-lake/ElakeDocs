<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useRoute } from 'vitepress'

const Route = useRoute()

// 路由监听
watch((): string => Route.path, async (NewPath, OldPath): Promise<void> => {
    if (NewPath !== OldPath) {
        LinkIcon()
    }
})

// 组件挂载后执行
onMounted(async (): Promise<void> => {
    LinkIcon()
})

const LinkIcon: () => void = (): void => {
    const ContentElement: HTMLElement | null = document.querySelector('main > div > div')
    if (!ContentElement) return
    // 查找符合条件的A标签
    let ATag: NodeListOf<HTMLElement> = ContentElement.querySelectorAll('a')
    let Link: HTMLAnchorElement[] = [] as HTMLAnchorElement[]
    ATag.forEach((ALink): void => {
        if (ALink.classList[0] === 'header-anchor') return
        Link.push(ALink as HTMLAnchorElement)
    })
    // 遍历A标签并重写innerHTML
    Link.forEach((Link): void => {
        Link.style.position = 'relative'
        Link.innerHTML = `<span style="position: absolute; left: 5px; width: 32px; height: 32px; background-size: cover; margin-right: 5px; border-radius: 3px; display: inline-block; background-image: url('https://api.afmax.cn/so/ico/index.php?r=${Link.href}');"></span><span style="padding-left: 42px;">${Link.innerHTML}</span>`
    })
}
</script>
