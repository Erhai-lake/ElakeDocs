---
title: 生成器调用
createTime: 2026/02/06 17:34:18
---

`generateData(生成器分类ID, 生成器ID, 参数)`

## 生成器无参数(不传递参数)

当生成器没有参数列表时, 或者不传递参数, 使用默认参数时.

```javascript
import mock from "@erhai_lake/mock-service"

console.log(mock.generateData("string", "uuid"))
// 7823a97d-3147-4474-b9fb-dda1a78f3164
```

## 生成器有参数

当生成器的参数列表只有一个或多个参数时.

```javascript
import mock from "@erhai_lake/mock-service"

console.log(mock.generateData("lorem", "word", {language: "en"}))
// would
console.log(mock.generateData("lorem", "words", {language: "en", max: 100}))
// weekandthinkmeatsayeight
```
