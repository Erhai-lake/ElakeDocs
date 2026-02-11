---
title: 切换错误输出
createTime: 2026/02/09 23:59:14
---

`switchErrorOutput(throwError: boolean)`

默认为 `true`.

设置为 `true` 时, 生成器或处理器在出错时, 会使用 `throw` 抛出错误.

设置为 `false` 时, 生成器或处理器在出错时, 仅会使用 `console.error` 打印错误信息和生成配置.

```javascript
import mock from "@erhai_lake/mock-service"

mock.switchErrorOutput(false)
console.log(mock.applyGlobalProcessor("format", "202308sas1512as3456"))
// 不支持的日期时间格式: 202308sas1512as3456
// global.format:202308sas1512as3456:undefined
console.log(mock.templateGenerateData("{{$lorem.paragraph(min=10,max=9)}}"))
// max 参数必须大于或等于 min 参数
// lorem.paragraph:{"min":10,"max":9}
```