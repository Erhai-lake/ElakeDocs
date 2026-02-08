---
title: 处理器调用
createTime: 2026/02/06 17:34:29
---

处理器调用有两个方法: `applyProcessor` 和 `applyProcessor2`.

## applyProcessor

`applyProcessor(处理器分类ID, 处理器ID, 被处理数据, 参数)`

### 处理器无参数(不传递参数)

当处理器没有参数列表时, 或者不传递参数, 使用默认参数时.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyProcessor("encodingDecoding", "base64", UUID))
// NjkxMjU0OWYtZTJkYS00ZGVmLThkNTYtZDBlNzE2YzEwMWIz
```

### 处理器有一个参数

当处理器的参数列表只有一个参数时.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyProcessor("encodingDecoding", "sha", UUID, "SHA512"))
// 703ef3d9ee21c06caae2abbd4302df2db1b1b9e7089db58f3058cb79a590ad913f4a2326d5af0f6968ceaf2b55d41362aa382dc3255e84cbbe77eabf4db69149
```

### 处理器有多个参数

当处理器的参数列表有多个参数时.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyProcessor("string", "substr", UUID, {start: 3, length: 28}))
// 6a433-4a74-4569-a492-8c66608
```

::: warning
处理器有多个参数时, 必须传递一个对象参数. 尽管你只想传递一个参数, 也必须传递一个对象参数.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyProcessor("string", "substr", UUID, {start: 3}))
// 410f8-6cd6
```
:::

## applyProcessor2

`applyProcessor2(生成器分类ID, 生成器ID, 处理器ID, 被处理数据, 参数)`

### 处理器无参数(不传递参数)

当处理器没有参数列表时, 或者不传递参数, 使用默认参数时.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyProcessor2("string", "uuid", "base64", UUID))
// MzYyZTk3NjgtNTljNy00MWM5LTkzZjAtMmNiMjQzYWU1ZTFk
```

### 处理器有一个参数

当处理器的参数列表只有一个参数时.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyProcessor2("string", "uuid", "sha", UUID, "SHA512"))
// 422740a97db62e0a52aee02c6f121e47b17e2699dba0af3696c86822b0ecf72f450814fdf7b3d274f54efd7a56ae8a3ed401d701ca72a2b4fd88656a884df30c
```

### 处理器有多个参数

当处理器的参数列表有多个参数时.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyProcessor2("string", "uuid", "substr", UUID, {start: 3, length: 28}))
// 0e5e9-7e04-4966-a5f4-c7fd95c
```

::: warning
处理器有多个参数时, 必须传递一个对象参数. 尽管你只想传递一个参数, 也必须传递一个对象参数.

```javascript
import mock from "@erhai_lake/mock-service"

const UUID = mock.generateData("string", "uuid")
console.log(mock.applyProcessor2("string", "uuid", "substr", UUID, {start: 3}))
// e1688-e09c
```
:::

## 区别

`applyProcessor` 是直接调用处理器分类中的处理器.

`applyProcessor2` 是调用生成器中引用的处理器. 当遇到生成器不存在的处理器时, 会抛出异常. 避免调用生成器不支持的处理器.

在正常使用中, 应该避免调用生成器不支持的处理器, 比如`string`的生成器, 去调用`date`的处理器, 这包报错的.

> 你不需要担心`applyProcessor2`会导致处理器重复的问题, 在注册时, 重复的处理器会报错标出.
> 
> 处理器ID是不允许重复的, 生成器就可以不同的分类存在同一个ID的处理器.