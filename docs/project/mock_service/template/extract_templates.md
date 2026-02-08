---
title: 从字符串中提取模板
createTime: 2026/02/06 19:31:02
---

`extractTemplates(str: string): string[]`

输入一段字符串, 提取其中的所有模板, 返回一个字符串数组.

```javascript
import mock from "@erhai_lake/mock-service"

const STRING = "Hello there, your username is {{$string.nanoid}}, and your UUID is {{$string.uuid}}"
console.log(mock.extractTemplates(STRING))
// ["{{$string.nanoid}}", "{{$string.uuid}}"]
```

这个方法只是提取, 如果你要提前后立刻解析返回数据的话, 可以使用 [resolveTemplate](./resolve_template) 方法