---
title: Youtube 视频
icon: mdi:youtube
createTime: 2025/12/24 00:18:11
---

嵌入 Youtube 视频.

```markdown
@[youtube](id)
```

```markdown
@[youtube autoplay loop start="0" end="0" width="100%" height="400px" ratio="16:9"](id)
```

## 属性

:::: field-group

::: field name="id" type="string" optional
视频ID.
:::

::: field name="autoplay" type="boolean" optional default="false"
是否自动播放, 不建议启用.
:::

::: field name="loop" type="string" optional default="false"
是否循环播放.
:::

::: field name="start" type="string" optional
视频开始播放时间点, 单位为秒, 也可以使用`mm:ss`或`hh:mm:ss`格式.
:::

::: field name="end" type="string" optional
视频结束播放时间点, 单位为秒, 也可以使用`mm:ss`或`hh:mm:ss`格式.
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

::::

## 示例

```markdown
@[youtube](JVm0k0DVrIE)
```

@[youtube](JVm0k0DVrIE)
