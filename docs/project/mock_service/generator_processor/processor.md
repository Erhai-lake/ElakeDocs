---
title: 处理器调用
createTime: 2026/02/06 17:34:29
---

处理器调用有两个方法: `applyGlobalProcessor` 和 `applyProcessor`.

## applyGlobalProcessor

`applyGlobalProcessor(处理器ID, 被处理数据, 参数)`

应用全局处理器.

### 处理器无参数(不传递参数)

当处理器没有参数列表时, 或者不传递参数, 使用默认参数时.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyGlobalProcessor("base64", UUID))
// NjkxMjU0OWYtZTJkYS00ZGVmLThkNTYtZDBlNzE2YzEwMWIz
```

### 处理器有参数

当处理器的参数列表只有一个或多个参数时.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyGlobalProcessor("sha", UUID, {algorithm: "SHA512"}))
// 703ef3d9ee21c06caae2abbd4302df2db1b1b9e7089db58f3058cb79a590ad913f4a2326d5af0f6968ceaf2b55d41362aa382dc3255e84cbbe77eabf4db69149
console.log(mock.applyGlobalProcessor("string", "substr", UUID, {start: 3, length: 28}))
// 6a433-4a74-4569-a492-8c66608
```

## applyProcessor

`applyProcessor(生成器分类ID, 生成器ID, 处理器ID, 被处理数据, 参数)`

使用生成器允许的处理器, 防止异常调用.

### 处理器无参数(不传递参数)

当处理器没有参数列表时, 或者不传递参数, 使用默认参数时.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyProcessor("string", "uuid", "base64", UUID))
// MzYyZTk3NjgtNTljNy00MWM5LTkzZjAtMmNiMjQzYWU1ZTFk
```

### 处理器有参数

当处理器的参数列表只有一个或多个参数时.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyProcessor("string", "uuid", "sha", UUID, {algorithm: "SHA512"}))
// 422740a97db62e0a52aee02c6f121e47b17e2699dba0af3696c86822b0ecf72f450814fdf7b3d274f54efd7a56ae8a3ed401d701ca72a2b4fd88656a884df30c
console.log(mock.applyProcessor("string", "uuid", "substr", UUID, {start: 3, length: 28}))
// 0e5e9-7e04-4966-a5f4-c7fd95c
```

## 区别

`applyGlobalProcessor` 是直接在所有处理器中查找, 并调用对应的处理器.

`applyProcessor` 是调用生成器中引用的处理器. 当遇到生成器不存在的处理器时, 会抛出异常. 避免调用生成器不支持的处理器.

在正常使用中, 应该避免调用生成器不支持的处理器, 比如`string`的生成器, 去调用`date`的处理器, 这包报错的.

> 你不需要担心`applyGlobalProcessor`和`applyProcessor`会导致处理器重复的问题, 在注册时, 重复的处理器会报错标出.
> 
> 处理器ID是不允许重复的, 生成器就可以不同的分类存在同一个ID的处理器.