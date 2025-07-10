<template>
    <div class="FoldingPanel" :style="{ '--Height': Height + 'px' }">
        <div class="FoldingPanelTitle" @click="Folding" :title="Title">
            <div class="Left">
                <slot name="Title">
                    使用 &lt;template #Title&gt;&lt;/template&gt;插入标题
                </slot>
            </div>
            <div></div>
            <div class="Arrow">
                <svg t="1727527794943" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="1579" width="16" height="16">
                    <path
                        d="M895.701333 300.117333c0 9.6-3.2 19.285333-9.6 27.392l-340.906666 423.808a43.733333 43.733333 0 0 1-68.096 0L137.984 329.301333A43.690667 43.690667 0 0 1 206.08 274.602667l305.109333 379.605333 306.773334-381.525333a43.690667 43.690667 0 0 1 77.738666 27.434666z"
                        fill="#9ca8af" p-id="1580"></path>
                </svg>
            </div>
        </div>
        <div class="FoldingPanelContent">
            <slot name="Content">
                使用 &lt;template #Content&gt;&lt;/template&gt;插入内容
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    Height: {
        type: Number,
        default: 300
    },
    Title: {
        type: String,
        default: ""
    }
})

const Folding: (Event: any) => void = (Event): void => {
    const FoldingPanelTitle: any = Event.target.parentNode
    if (FoldingPanelTitle) {
        const FoldingPanel: any = FoldingPanelTitle.parentNode
        if (FoldingPanel) {
            const FoldingPanelContent: any = FoldingPanel.querySelector(".FoldingPanelContent")
            if (FoldingPanelContent) {
                const Height: string = getComputedStyle(FoldingPanelContent).getPropertyValue("--Height")
                const Arrow: any = FoldingPanelTitle.querySelector(".Arrow")
                if (FoldingPanelContent.style.height !== Height) {
                    FoldingPanelContent.style.height = Height
                    Arrow.style.transform = "rotate(-180deg)"
                } else {
                    FoldingPanelContent.style.height = "0px"
                    Arrow.style.transform = "rotate(0deg)"
                }
            }
        }
    }
}
</script>

<style scoped>
.FoldingPanel {
    margin: 5px 0;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    user-select: none;

    .FoldingPanelTitle {
        padding: 0 20px;
        height: 60px;
        background-color: #b3b3b33f;
        cursor: pointer;
        display: grid;
        grid-template-columns: 2fr 1fr 16px;

        div {
            display: flex;
            align-items: center;
        }

        .Arrow {
            transition: transform 0.2s;
        }
    }

    .FoldingPanelContent {
        padding: 0 20px;
        height: 0;
        background-color: #b3b3b33f;
        transition: height 0.2s;
        overflow-y: auto;
    }
}
</style>
