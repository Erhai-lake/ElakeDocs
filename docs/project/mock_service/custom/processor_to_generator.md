---
title: 处理器到生成器
createTime: 2026/02/07 17:59:56
---

::: note
继续沿用前文的示例.
:::

前文介绍了如何新增生成器和处理器, 本文将介绍如何修改生成器内支持的处理器.

十分的简单, 这里有4个方法, 两个新增, 两个移除.

## 某生成器新增处理器

`addProcessorCategoryToGenerator(生成器分类ID, 生成器ID, 处理器分类ID)`

```javascript
// 指定 string 中的 uuid 生成器, 新增 testProc 分类下的处理器
mock.addProcessorCategoryToGenerator("string", "uuid", "testProc")
console.log(mock.templateGenerateData('{{$string.uuid|testFn1}}'))
// 6428d38c-79d6-46e4-9206-a7c6a073e5c5|Test|6428d38c-79d6-46e4-9206-a7c6a073e5c5
console.log(mock.templateGenerateData('{{$string.nanoid|testFn1}}'))
// 报错, 因为 testFn1 不存在
```

## 某生成器移除处理器

`removeProcessorCategoryFromGenerator(生成器分类ID, 生成器ID, 处理器分类ID)`

```javascript
// 指定 string 中的 uuid 生成器, 移除 testProc 分类下的处理器
mock.removeProcessorCategoryFromGenerator("string", "uuid", "testProc")
console.log(mock.templateGenerateData('{{$string.uuid|testFn1}}'))
// 报错, 因为 testFn1 不存在
console.log(mock.templateGenerateData('{{$string.nanoid|testFn1}}'))
// 报错, 因为 testFn1 不存在
```

## 某生成器分类新增处理器(批量)

`addProcessorCategoryToGeneratorCategory(生成器分类ID, 处理器分类ID)`

```javascript
// 指定 string 分类, 新增 testProc 分类下的处理器
mock.addProcessorCategoryToGeneratorCategory("string", "testProc")
console.log(mock.templateGenerateData('{{$string.uuid|testFn1}}'))
// 6428d38c-79d6-46e4-9206-a7c6a073e5c5|Test|6428d38c-79d6-46e4-9206-a7c6a073e5c5
console.log(mock.templateGenerateData('{{$string.nanoid|testFn1}}'))
// 5umtxc_pFwjaDMX7bHG18|Test|5umtxc_pFwjaDMX7bHG18
```

## 某生成器分类移除处理器(批量)

`removeProcessorCategoryFromGeneratorCategory(生成器分类ID, 处理器分类ID)`

```javascript
// 指定 string 分类, 移除 testProc 分类下的处理器
mock.removeProcessorCategoryFromGeneratorCategory("string", "testProc")
console.log(mock.templateGenerateData('{{$string.uuid|testFn1}}'))
// 报错, 因为 testFn1 不存在
console.log(mock.templateGenerateData('{{$string.nanoid|testFn1}}'))
// 报错, 因为 testFn1 不存在
```
