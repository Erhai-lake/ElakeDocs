---
title: bilibili 视频
icon: ri:bilibili-fill
createTime: 2025/12/24 00:18:11
---

嵌入 bilibili 视频.

```markdown
@[bilibili](bid)
```

分P视频, 也可以使用aid, cid来指定视频.

```markdown
@[bilibili p1](aid cid)
```

## 属性

:::: field-group

::: field name="bvid" type="string" optional
视频BV ID (BiliBili Video ID).
:::

::: field name="aid" type="string" optional
视频AV ID (Article Video ID).
:::

::: field name="cid" type="string" optional
视频CID (Content ID).
:::

::: field name="autoplay" type="boolean" optional default="false"
是否自动播放, 不建议启用.
:::

::: field name="time" type="string" optional
视频开始播放时间点, 单位为秒, 也可以使用`mm:ss`或`hh:mm:ss`格式.
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

对于分P的视频, 可以省略传入`bvid`, 但需要传入`aid`和`cid`

## 示例

```markdown
@[bilibili](BV1uT4y1P7CX)
```

@[bilibili](BV1uT4y1P7CX)

```markdown
@[bilibili](BV1Udtdz8ECi)
```

@[bilibili](BV1Udtdz8ECi)

```markdown
@[bilibili width="320px" ratio="9:16"](BV1zr42187eg)
```

@[bilibili width="320px" ratio="9:16"](BV1zr42187eg)