<template>
    <div class="UpdateLog">
        <p class="Title">更新日志</p>
        <FoldingPanel :Height=500 :Title="'点击展开日志\n所有元素鼠标悬浮可显示更多\n点击头像跳转用户页\n点击哈希跳转提交记录'" class="FoldingPanel">
            <template #Title>
                <svg t="1727498405398" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="1471" width="16" height="16" style="margin-right: 5px;">
                    <path
                        d="M512.736 992a483.648 483.648 0 0 1-164.672-28.8 36.88 36.88 0 1 1 25.104-69.36 407.456 407.456 0 1 0-184.608-136.512A36.912 36.912 0 0 1 129.488 801.6a473.424 473.424 0 0 1-97.472-290A480 480 0 1 1 512.736 992z"
                        fill="#9ca8af" p-id="1472"></path>
                    <path
                        d="M685.6 638.592a32 32 0 0 1-14.032-2.96l-178.048-73.888a36.8 36.8 0 0 1-22.912-34.016V236.672a36.944 36.944 0 1 1 73.888 0v266.72l155.2 64.272a36.336 36.336 0 0 1 19.952 48 37.616 37.616 0 0 1-34.048 22.928z"
                        fill="#9ca8af" p-id="1473"></path>
                </svg>
                <span>最后编辑于 {{ LastUpdateTime }}</span>
            </template>
            <template #Content>
                <ul>
                    <li v-for="Item in UpdateLogData" :key="Item.id">
                        <div class="CommitSvg">
                            <svg t="1727530302325" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="8220" width="26" height="26">
                                <path
                                    d="M981.333333 469.333333h-260.266666c-21.333333-98.133333-106.666667-170.666667-209.066667-170.666666s-187.733333 72.533333-209.066667 170.666666H42.666667c-25.6 0-42.666667 17.066667-42.666667 42.666667s17.066667 42.666667 42.666667 42.666667h260.266666c21.333333 98.133333 106.666667 170.666667 209.066667 170.666666s187.733333-72.533333 209.066667-170.666666H981.333333c25.6 0 42.666667-17.066667 42.666667-42.666667s-21.333333-42.666667-42.666667-42.666667z m-469.333333 170.666667c-72.533333 0-128-55.466667-128-128s55.466667-128 128-128 128 55.466667 128 128-55.466667 128-128 128z"
                                    p-id="8221" fill="#9ca8af"></path>
                            </svg>
                        </div>
                        <div class="CommitAvatar" :style="{ backgroundImage: `url('${Item.AvatarUrl}')` }"
                            :alt="Item.Name" :title="Item.Name + '\n点击跳转GitHub'" @click="OpenGitHub(0, Item.Name)">
                        </div>
                        <p class="CommitSha" :title="Item.Sha + '\n点击跳转GitHub'" @click="OpenGitHub(1, Item.Sha)">{{
                            Item.ShortSha }}</p>
                        <p class="CommitContent" :title="Item.Message">{{ Item.Message }}</p>
                        <p class="CommitTime" :title="Item.Time">{{ Item.Time }}</p>
                    </li>
                </ul>
            </template>
        </FoldingPanel>
    </div>
</template>


<script lang="ts" setup>
import { ref, watch, onMounted } from "vue"
import { useRoute } from "vitepress"

// 路由
const Route = useRoute()

// 路由监听
watch((): string => Route.path, async (NewPath, OldPath): Promise<void> => {
    if (NewPath !== OldPath) {
        await GetUpdateLog()
    }
})

// 组件挂载后执行
onMounted(async (): Promise<void> => {
    await GetUpdateLog()
})

// 获取更新历史数据
const UpdateLogData: any = ref([])
const LastUpdateTime: any = ref("0000-00-00")
const GetUpdateLog: () => Promise<void> = async (): Promise<void> => {
    try {
        const FilePath: string = Route.path.replace(/html$/, "md").replace(/\/Docs\//, "").replace(/\//g, "_").replace(".md", ".json")
        const StoredAllCommits: string | null = sessionStorage.getItem(FilePath)
        let GitCommits: any
        if (StoredAllCommits) {
            // 如果有存储的数据,直接解析并使用
            GitCommits = JSON.parse(StoredAllCommits)
        } else {
            // 如果没有存储的数据,发送网络请求获取
            const Response = await fetch(`/ElakeDocs/CommitRecords/${FilePath}`)
            GitCommits = await Response.json()
            // 获取数据后存入sessionStorage
            sessionStorage.setItem(FilePath, JSON.stringify(GitCommits))
        }
        const DataSet = new Set<any>()
        GitCommits.forEach((Item: { Sha: string, Name: string, Message: string, Time: string }): void => {
            DataSet.add(
                {
                    Sha: Item.Sha,
                    Name: Item.Name.replace(/_/, "-"),
                    Message: Item.Message,
                    Time: Item.Time
                }
            )
        })
        // 将Set转换为数组并进行排序
        const SortedCommitsArray: any = Array.from(DataSet).sort((A: any, B: any): number => {
            const ParseTime: (TimeStr: string) => number = (TimeStr: string): number => {
                if (TimeStr === "0000-00-00") {
                    return new Date("1969-12-31").getTime()
                }
                const [Year, Month, Day] = TimeStr.split("-").map(Number);
                return new Date(Year, Month - 1, Day).getTime();
            }
            const TimeA: number = ParseTime(A.Time)
            const TimeB: number = ParseTime(B.Time)
            return TimeB - TimeA
        })
        UpdateLogData.value = SortedCommitsArray.map((Item: any): { Sha: string, ShortSha: string, Name: string, AvatarUrl: string, Message: string, Time: string } => {
            return {
                Sha: Item.Sha,
                ShortSha: Item.Sha.substring(0, 10),
                Name: Item.Name,
                AvatarUrl: `https://github.com/${Item.Name}.png`,
                Message: Item.Message,
                Time: Item.Time
            }
        })
        LastUpdateTime.value = TimeConversion(UpdateLogData.value[0].Time)
    } catch {
        UpdateLogData.value = [
            {
                Sha: "00000000000000000000000000000000000000000000000000",
                ShortSha: "0000000000",
                Name: "洱海工作室",
                AvatarUrl: "//api.elake.top/Logo/",
                Message: "日志也被BUG酱吃掉啦~",
                Time: "😋👉00-00"
            }
        ]
        LastUpdateTime.value = "时间被BUG酱吃掉啦~"
    }
}

// 时间转换
const TimeConversion: (DateString: string) => string = (DateString): string => {
    const Now = new Date()
    const Past = new Date(DateString)
    if (isNaN(Past.getTime())) {
        return "时间被BUG酱吃掉啦~"
    }
    const MsDiff = Now.getTime() - Past.getTime()
    const Seconds = Math.floor(MsDiff / 1000)
    const Minutes = Math.floor(Seconds / 60)
    const Hours = Math.floor(Minutes / 60)
    const Days = Math.floor(Hours / 24)
    const Months = Now.getMonth() - Past.getMonth() + 12 * (Now.getFullYear() - Past.getFullYear())
    const Years = Math.floor(Months / 12)
    if (Seconds < 60) {
        return `${Seconds} 秒前`
    } else if (Minutes < 60) {
        return `${Minutes} 分钟前`
    } else if (Hours < 24) {
        return `${Hours} 小时前`
    } else if (Days < 30) {
        return `${Days} 天前`
    } else if (Months < 12) {
        return `${Months} 月前`
    } else if (Years < 1) {
        return `${Months} 年前`
    } else {
        return DateString
    }
}

// 打开GitHub链接
const OpenGitHub: (Id: number, Value: string) => void = (Id, Value): void => {
    if (Id === 0) {
        window.open(`//github.com/${Value}`)
    } else {
        window.open(`https://github.com/Erhai-lake/ElakeDocs/commit/${Value}`)
    }
}
</script>

<style scoped>
.Title {
    margin: 15px 0;
    font-size: 30px;
    font-weight: bold;
}

.FoldingPanel {
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    user-select: none;

    ul {
        li {
            padding: 5px 0;
            display: grid;
            grid-template-columns: 26px 1fr;
            grid-template-rows: repeat(4, 36px);
            grid-column-gap: 20px;


            .CommitSvg {
                grid-area: 1 / 1 / 5 / 2;
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                    transform: rotate(90deg);
                }
            }

            .CommitAvatar {
                margin: 0 auto;
                grid-area: 1 / 2 / 2 / 3;
                width: 26px;
                height: 26px;
                border-radius: 50%;
                background-size: cover;
                background-position: center;
                cursor: pointer;
            }

            .CommitSha {
                grid-area: 2 / 2 / 3 / 3;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #dadaff;
                background-color: #009dffa6;
                border-radius: 10px;
                cursor: pointer;
            }

            .CommitContent {
                grid-area: 3 / 2 / 4 / 3;
                width: 100%;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .CommitTime {
                grid-area: 4 / 2 / 5 / 3;
                text-align: center;
            }

            &:nth-child(odd) .CommitSha {
                background-color: #ff0000a6;
            }
        }
    }
}

@media only screen and (min-width: 960px) {
    ul {
        li {
            grid-template-columns: 26px 26px 120px 4fr 100px !important;
            grid-template-rows: 1fr !important;


            .CommitSvg {
                grid-area: 1 / 1 / 2 / 2 !important;
            }

            .CommitSha {
                grid-area: 1 / 3 / 2 / 4 !important;
            }

            .CommitContent {
                grid-area: 1 / 4 / 2 / 5 !important;
            }

            .CommitTime {
                grid-area: 1 / 5 / 2 / 6 !important;
            }
        }
    }
}
</style>
