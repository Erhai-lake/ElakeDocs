<template>
    <div class="Metadata">
        <div class="MetadataItem">
            <svg t="1727498405398" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="1471" width="16" height="16">
                <path
                    d="M512.736 992a483.648 483.648 0 0 1-164.672-28.8 36.88 36.88 0 1 1 25.104-69.36 407.456 407.456 0 1 0-184.608-136.512A36.912 36.912 0 0 1 129.488 801.6a473.424 473.424 0 0 1-97.472-290A480 480 0 1 1 512.736 992z"
                    fill="#9ca8af" p-id="1472"></path>
                <path
                    d="M685.6 638.592a32 32 0 0 1-14.032-2.96l-178.048-73.888a36.8 36.8 0 0 1-22.912-34.016V236.672a36.944 36.944 0 1 1 73.888 0v266.72l155.2 64.272a36.336 36.336 0 0 1 19.952 48 37.616 37.616 0 0 1-34.048 22.928z"
                    fill="#9ca8af" p-id="1473"></path>
            </svg>
            <span class="LastUpdateTimeText">{{ LastUpdateTime }}</span>
        </div>
        <div class="MetadataItem">
            <svg t="1727498619384" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="3379" width="16" height="16">
                <path
                    d="M294.4 54.72a261.504 261.504 0 0 0-227.648 179.008c-2.944 8.832-7.04 24.576-9.152 34.944l-3.84 18.88v448.896l3.84 18.88c19.904 98.304 85.76 172.928 178.752 202.624 40.064 12.8 28.48 12.288 275.648 12.288 206.976 0 222.144-0.192 238.912-3.136a263.36 263.36 0 0 0 216.192-216.192c2.944-16.768 3.136-31.936 3.136-238.912s-0.192-222.144-3.136-238.912c-17.088-97.408-84.864-176.448-176.896-206.272a252.48 252.48 0 0 0-63.808-12.224C701.696 52.672 319.04 52.8 294.4 54.72m448.832 80.576c68.032 15.488 118.08 59.52 139.136 122.432 9.408 27.968 9.024 19.008 9.728 237.184 0.704 210.304 0.128 235.52-6.208 259.456a184.256 184.256 0 0 1-156.288 136.32c-21.376 2.624-413.824 2.624-435.2 0-76.288-9.344-136.768-62.784-157.248-138.88-3.008-11.456-3.2-22.272-3.2-239.808V284.16l3.968-14.4C158.72 193.536 222.336 139.712 299.392 133.12c8.512-0.704 109.184-1.152 223.68-0.96 183.552 0.32 209.664 0.704 220.16 3.136M311.168 318.208a38.592 38.592 0 0 0-26.24 46.72c2.368 8.768 11.712 19.584 21.312 24.768 6.784 3.648 8.512 3.712 86.72 4.224l79.808 0.512v171.136c0 185.344-0.256 180.608 9.152 192.96 5.888 7.68 20.096 14.592 30.08 14.592a44.48 44.48 0 0 0 30.08-14.592c9.408-12.352 9.152-7.616 9.152-192.96V394.432l79.808-0.512c78.208-0.512 79.936-0.576 86.72-4.224 21.248-11.392 28.544-34.752 16.96-54.528a36.096 36.096 0 0 0-22.592-17.088c-11.2-3.392-390.144-3.264-400.96 0.128"
                    fill="#9ca8af" p-id="3380"></path>
            </svg>
            <span>{{ WordCount }}字</span>
        </div>
        <div class="MetadataItem">
            <svg t="1727498683209" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="6592" width="16" height="16">
                <path
                    d="M510.8 960c-215.2 0-390.2-175-390.2-390.2s175-390.2 390.2-390.2S901 354.6 901 569.8 725.9 960 510.8 960z m0-690.9C345 269.1 210.1 404 210.1 569.8S345 870.4 510.8 870.4s300.7-134.9 300.7-300.7-134.9-300.6-300.7-300.6z"
                    fill="#9ca8af" p-id="6593"></path>
                <path
                    d="M510.8 269.1c-24.7 0-44.8-20-44.8-44.8V109.4c0-24.7 20-44.8 44.8-44.8 24.7 0 44.8 20 44.8 44.8v114.9c-0.1 24.7-20.1 44.8-44.8 44.8z"
                    fill="#9ca8af" p-id="6594"></path>
                <path
                    d="M609.4 154.2H408c-24.7 0-44.8-20-44.8-44.8s20-44.8 44.8-44.8h201.4c24.7 0 44.8 20 44.8 44.8s-20.1 44.8-44.8 44.8zM758.6 366.7c-11.5 0-22.9-4.4-31.7-13.1-17.5-17.5-17.5-45.8 0-63.3l63.8-63.8c17.5-17.5 45.8-17.5 63.3 0s17.5 45.8 0 63.3l-63.8 63.8c-8.7 8.8-20.2 13.1-31.6 13.1zM509.5 633.9c-11.5 0-22.9-4.4-31.7-13.1L331.4 474.3c-17.5-17.5-17.5-45.8 0-63.3s45.8-17.5 63.3 0l146.5 146.5c17.5 17.5 17.5 45.8 0 63.3-8.8 8.8-20.3 13.1-31.7 13.1z"
                    fill="#9ca8af" p-id="6595"></path>
            </svg>
            <span>{{ ReadingTime }}分钟</span>
        </div>
    </div>
    <div class="Hitokoto" @click="DebouncedGetHitokoto">{{ Hitokoto }}</div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vitepress'

// 路由
const Route = useRoute()

let Interval: any

// 路由监听
watch((): string => Route.path, async (NewPath, OldPath): Promise<void> => {
    if (NewPath !== OldPath) {
        UpdateData()
    }
})

// 组件挂载后执行
onMounted(async (): Promise<void> => {
    UpdateData()
})

const UpdateData: () => void = (): void => {
    Interval = setInterval(GetLastUpdateTime, 50)
    CalculateWordCount()
    CalculateReadingTime()
    GetHitokoto()
}

// 获取最后更新时间
const LastUpdateTime: any = ref('')
const GetLastUpdateTime: () => void = (): void => {
    const OfficialLastUpdateTimeFatherElement: HTMLElement | null = document.querySelector('.last-updated > p')
    if (OfficialLastUpdateTimeFatherElement) {
        OfficialLastUpdateTimeFatherElement.style.display = 'none'
        const OfficialLastUpdateTimeElement: HTMLElement | null = OfficialLastUpdateTimeFatherElement.querySelector('time')
        if (OfficialLastUpdateTimeElement) {
            const OfficialLastUpdateTime: string = OfficialLastUpdateTimeElement.innerHTML.replace(/\//g, '-')
            if (OfficialLastUpdateTime && OfficialLastUpdateTime !== '') {
                LastUpdateTime.value = OfficialLastUpdateTime
                clearInterval(Interval)
            }
        }
    }
}

// 计算字数
const WordCount: any = ref('')
const CalculateWordCount: () => void = (): void => {
    let ContentElement: HTMLElement | null = document.querySelector('main > div > div')
    if (!ContentElement) return
    ContentElement = ContentElement.cloneNode(true) as HTMLElement
    // 代码块移除
    const PreElements: NodeListOf<HTMLElement> = ContentElement.querySelectorAll('pre')
    PreElements.forEach(pre => pre.remove())
    const LangSpan: NodeListOf<HTMLElement> = ContentElement.querySelectorAll('span.lang')
    LangSpan.forEach(lang => lang.remove())
    const LineNumber: NodeListOf<HTMLElement> = ContentElement.querySelectorAll('div.line-numbers-wrapper')
    LineNumber.forEach(line => line.remove())
    const TextContent: string = ContentElement.textContent || ''
    // 计算中文字符和英文单词数
    const CnChars: RegExpMatchArray | [] = TextContent.match(/[\u4e00-\u9fa5]/g) || []
    const EnWords: RegExpMatchArray | [] = TextContent.match(/[a-zA-Z]+/g) || []
    WordCount.value = CnChars.length + EnWords.length
}

// 计算阅读时长
const ReadingTime: any = ref('')
const CalculateReadingTime: () => void = (): void => {
    const WordsPerMinute: number = 200
    ReadingTime.value = Math.ceil(WordCount.value / WordsPerMinute)
}

// 获取一言
const Hitokoto: any = ref('')
const GetHitokoto: () => void = (): void => {
    fetch('//international.v1.hitokoto.cn')
        .then(response => response.json())
        .then(Data => {
            const FromWho: string = Data.from_who ? ` [${Data.from_who}]` : ''
            const From: string = Data.from ? ` [${Data.from}]` : ''
            Hitokoto.value = `${Data.hitokoto}${FromWho}${From}`
        })
        .catch((): void => {
            Hitokoto.value = '记录点滴 见证思考 分享成长[洱海工作室]'
        })
}

// 防抖
const Debounce: (Fun: any, Time: number) => any = (Fun, Time): any => {
    let Timeout: any
    return function (...args: any[]) {
        clearTimeout(Timeout)
        Timeout = setTimeout(() => {
            Fun.apply(this, args)
        }, Time)
    }
}

// 防抖一言
const DebouncedGetHitokoto = Debounce(GetHitokoto, 1000)
</script>

<style scoped>
.Metadata {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    color: #9ca8af;

    .MetadataItem {
        padding: 3px 20px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 50px;
        transition: all 0.15s;
        user-select: none;

        &:hover {
            background-color: #7a7a7a46;
        }

        &:active {
            background-color: #80ceff63;
        }

        svg {
            margin-bottom: 5px;
        }

        .LastUpdateTimeText {
            font-size: 7px;
        }
    }
}

.Hitokoto {
    margin-bottom: 20px;
    width: 100%;
    color: #9ca8af;
    text-align: center;
    cursor: pointer;
    user-select: none;
}

@media only screen and (min-width: 960px) {
    .MetadataItem {
        flex-direction: row !important;

        svg {
            margin-bottom: 0 !important;
            margin-right: 5px !important;
        }

        .LastUpdateTimeText {
            font-size: 16px !important;
        }
    }
}
</style>
