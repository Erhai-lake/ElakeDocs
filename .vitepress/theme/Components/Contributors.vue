<template>
    <div class="Contributors">
        <p class="Title">贡献者</p>
        <div class="ContributorsContainer">
            <div v-for="Item in ContributorsData" :key="Item.id" @click="OpenGitHub(Item.Name)" class="ContributorsItem"
                @mouseover="HandleMouseOver" @mouseleave="HandleMouseLeave">
                <div class="Avatar" :style="{ backgroundImage: `url('${Item.AvatarUrl}')` }" :alt="Item.Name"></div>
                <span>{{ Item.Name }}</span>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vitepress'

// 路由
const Route = useRoute()

// 路由监听
watch((): string => Route.path, async (NewPath, OldPath): Promise<void> => {
    if (NewPath !== OldPath) {
        await GetContributors()
    }
})

// 组件挂载后执行
onMounted(async (): Promise<void> => {
    await GetContributors()
})

// 获取贡献者数据
const ContributorsData: any = ref([])
const GetContributors: () => Promise<void> = async (): Promise<void> => {
    try {
        const FilePath: string = Route.path.replace(/html$/, 'md').replace(/\/ElakeDocs\/Docs\//, '').replace(/\//g, '_').replace('.md', '.json')
        const StoredAllCommits: string | null = sessionStorage.getItem(FilePath)
        let GitCommits: any
        if (StoredAllCommits) {
            // 如果有存储的数据,直接解析并使用
            GitCommits = JSON.parse(StoredAllCommits)
        } else {
            // 如果没有存储的数据,发送网络请求获取
            const Response = await fetch(`/CommitRecords/${FilePath}`)
            GitCommits = await Response.json()
            // 获取数据后存入sessionStorage
            sessionStorage.setItem(FilePath, JSON.stringify(GitCommits))
        }

        const DataSet = new Set<string>()
            GitCommits.forEach((Item: { Name: string }): void => {
            DataSet.add(Item.Name.replace(/_/, '-'))
        })
        ContributorsData.value = Array.from(DataSet).map((Name: string): { Name: string, AvatarUrl: string } => {
            return {
                Name: Name,
                AvatarUrl: `https://github.com/${Name}.png`
            }
        })
    } catch {
        ContributorsData.value = [
            {
                Name: '名字好吃捏~',
                AvatarUrl: '//api.elake.top/Logo/'
            }
        ]
    }
}

// 打开GitHub链接
const OpenGitHub: (Value: string) => void = (Value): void => {
    window.open(`//github.com/${Value}`)
}

let CurrentHoveredItem: Element | null = null
let HoverTimer: any = null
// 鼠标移入
const HandleMouseOver: (event: MouseEvent) => void = (event: MouseEvent): void => {
    const Item: HTMLElement = event.target as HTMLElement
    if (!Item.classList.contains('ContributorsItem') || Item === CurrentHoveredItem) return
    CurrentHoveredItem = Item
    const Avatar: HTMLElement | null = Item.querySelector('.Avatar')
    if (!Avatar) return
    Avatar.classList.add('Rotate')
    let HoverTime: number = 0
    const Father: HTMLElement | null = Item.parentElement
    if (Father === null) return
    HoverTimer = setInterval(() => {
        HoverTime += 1
        switch (HoverTime) {
            case 5:
                Item.classList.add('Rotate')
                break
            case 7:
                Father.classList.add('Rotate')
                break
        }
    }, 1000)
}

// 鼠标移出
const HandleMouseLeave: (event: MouseEvent) => void = (event: MouseEvent): void => {
    const Item: HTMLElement = event.target as HTMLElement
    if (!Item.classList.contains('ContributorsItem') || Item !== CurrentHoveredItem) return
    clearInterval(HoverTimer)
    CurrentHoveredItem = null
    HoverTimer = null
    Item.classList.remove('Rotate')
    const Avatar: HTMLElement | null = Item.querySelector('.Avatar')
    if (!Avatar) return
    Avatar.classList.remove('Rotate')
    const Father: HTMLElement | null = Item.parentElement
    if (Father === null) return
    Father.classList.remove('Rotate')
}
</script>

<style scoped>
.Title {
    margin: 15px 0;
    font-size: 30px;
    font-weight: bold;
}

.Contributors {
    user-select: none;

    .ContributorsContainer {
        display: flex;
        flex-wrap: wrap;

        .ContributorsItem {
            position: relative;
            padding: 5px;
            margin: 10px;
            width: 230px;
            height: 75px;
            display: flex;
            align-items: center;
            border: 2px solid #919191;
            place-content: center;
            place-items: center;
            overflow: hidden;
            border-radius: 20px;
            cursor: pointer;
            z-index: 2;

            &:hover .Avatar {
                transition: all 0.15s;
            }

            &::before {
                content: '';
                position: absolute;
                width: 230px;
                background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
                height: 80%;
                animation: RBG 3s linear infinite;
                transition: all 0.2s linear;
                z-index: 0;
            }

            &::after {
                content: '';
                background: var(--vp-c-bg);
                position: absolute;
                inset: 5px;
                border-radius: 15px;
                z-index: 0;
            }

            .Avatar {
                margin-right: 10px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-size: cover;
                background-position: center;
                z-index: 3;
            }

            span {
                width: calc(100% - 60px);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                z-index: 3;
            }
        }
    }
}

.Rotate {
    animation: Rotate 0.01s linear infinite;
}

.Fly {
    animation: Fly 0.5s linear
}

@keyframes RBG {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes Rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
