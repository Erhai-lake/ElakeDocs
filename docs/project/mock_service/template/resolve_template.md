---
title: 解析字符串中的模板
createTime: 2026/02/06 19:35:57
---

`resolveTemplate(string: string): string`

输入一个字符串, 返回解析后的数据字符串.

```javascript
import mock from "@erhai_lake/mock-service"

const STRING = "Hello there, your username is {{$string.nanoid}}, and your UUID is {{$string.uuid}}"
console.log(mock.resolveTemplate(STRING))
// Hello there, your username is yjY_npzQZfN1JTvgJD5g1, and your UUID is 4b2e2445-ba35-403a-8c5d-9025c4c36a86
```
