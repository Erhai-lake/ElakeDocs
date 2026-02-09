---
title: 错误返回
createTime: 2026/02/10 00:08:57
---

当生成器或处理器需要报错时, 需要使用 `throw`.

```javascript
throw new Error("错误!")
// 使用 i18n
throw new Error("error.poolIsEmpty")
// 需要占位符, 使用 | 隔开, 后面跟一个 JSON 字符串
throw new Error(`error.unsupportedDate|${JSON.stringify({format: value})}`)
```

发生错误时, 会自动解析为 `translate(error.unsupportedDate, {format: "YYYY-MM-DD"})`

你可能对 [生成器/处理器错误返回的方式](../other/switchErrorOutput) 感兴趣.