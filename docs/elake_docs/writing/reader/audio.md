---
title: Audio Reader 音频
icon: rivet-icons:audio
createTime: 2025/12/23 23:43:41
---

音频阅读并不是一个音乐播放器, 它仅是在内容中嵌入一个(@[audioReader](../assets/audio1.mp3))按钮, 点击后播放一段音频.

它适合用于播放一些短时间的音频, 比如单词标音.

```markdown
@[audioReader](src)
```

## 属性

:::: field-group

::: field name="type" type="string" optional
音频类型, 格式如: `audio/mpeg`, 默认根据音频链接地址的文件扩展名推断, 如果链接地址中不包含扩展名, 请手动声明.
:::

::: field name="title" type="string" optional
音频标题, 显示在音频图标之前.
:::

::: field name="autoplay" type="boolean" optional default="false"
是否自动播放, 不建议启用.
:::

::: field name="start-time" type="string" optional
音频起始播放时间点, 单位为秒.
:::

::: field name="end-time" type="string" optional
音频结束播放时间点, 单位为秒.
:::

::: field name="volume" type="string" optional
音频播放音量, 范围为`0 ~ 1`.
:::

::::

## 示例

audio 美 [ˈɔːdioʊ] @[audioReader](../assets/audio1.mp3)

@[audioReader](../assets/audio2.mp3)