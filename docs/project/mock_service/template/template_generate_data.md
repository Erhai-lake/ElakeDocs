---
title: 生成数据
createTime: 2026/02/06 19:35:48
---

`templateGenerateData(template: string): any`

输入一个模板字符串, 返回生成的数据.

只能输入一个模板, 如果是多个模板, 或者一段字符串内的模板, 请使用 [`resolveTemplate`](./resolve_template)

但是可以嵌套模板.

```javascript
import mock from "@erhai_lake/mock-service"

console.log(mock.templateGenerateData("{{$string.nanoid}}"))
// 7IpQRQhYOsPyehNfE3zJX
console.log(mock.templateGenerateData("{{$string.nanoid|concat(: {{$string.uuid}})}}"))
// Artu4MS1P1OXwFq3cLI0E: 6eea3120-5b60-4f21-aac2-391127705858
```