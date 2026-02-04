---
title: ArtPlayer 视频
icon: icon-park-outline:video
createTime: 2025/12/24 00:18:11
---

嵌入 ArtPlayer 视频.

artPlayer播放器默认支持`mp4`/`mp3`/`webm`/`ogg`格式的视频格式.

```markdown
@[artPlayer](src)
```

```markdown
@[artPlayer muted autoplay loop width="100%" height="400px" ratio="16:9"](src)
```

## 属性

:::: field-group

::: field name="src" type="string" optional
视频链接地址.
:::

::: field name="width" type="string" optional
视频宽度.
:::

::: field name="height" type="string" optional
视频高度.
:::

::: field name="ratio" type="string" optional default="16:9"
视频比例.
:::

::: field name="type" type="string" optional
音频类型, 格式如: `audio/mpeg`, 默认根据音频链接地址的文件扩展名推断, 如果链接地址中不包含扩展名, 请手动声明.
:::

::: field name="autoplay" type="boolean" optional default="false"
是否自动播放, 不建议启用.
:::

::: field name="muted" type="boolean" optional default="false"
是否静音, `autoplay`时, 默认为`true`.
:::

::: field name="volume" type="string" optional
音量大小, 范围为`0 ~ 1`.
:::

::: field name="poster" type="string" optional
视频封面图链接地址.
:::

::: field name="auto-mini" type="boolean" optional default="false"
当播放器滚动到浏览器视口以外时, 自动进入`迷你播放`模式.
:::

::::

## 示例

```markdown
@[artPlayer](https://artplayer.org/assets/sample/video.mp4)
```

@[artPlayer](https://artplayer.org/assets/sample/video.mp4)