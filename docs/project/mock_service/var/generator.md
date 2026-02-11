---
title: 变量在生成器调用
createTime: 2026/02/12 01:35:40
---

变量生成器的id是: `var`. 所以你可以自己 `console.log(mock.getAllGeneratorsInfo("var"))` 了().

开玩笑开玩笑, 樂.

变量系统的生成器只有3个可用, 它们的生成器id分别是: `var.getVar`, `var.setVar`, `var.clearVar`.

参数和调用方法时的参数一致. 并且能使用处理器.

```javascript
import mock from "@erhai_lake/mock-service"

mock.setVar("testVar", "testValue")
console.log(mock.getVar("testVar"))
// testValue
console.log(mock.templateGenerateData('{{$var.getVar("testVar")}}'))
// testValue
console.log(mock.templateGenerateData('{{@testVar}}'))
// testValue
console.log(mock.templateGenerateData('{{@testVar|md5}}'))
// cda160cc7c895bfcba6c9abc3c123747
console.log(mock.templateGenerateData('{{$var.clearVar}}'))
// undefined
console.log(mock.templateGenerateData('{{$var.getVar("testVar")}}'))
// undefined
```