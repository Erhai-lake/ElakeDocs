---
title: 拓展
createTime: 2026/02/06 16:16:09
---

## 获取原始数据

除了上文中介绍的获取方法, 还可以通过这样的方式获取.

```javascript
import mock from "@erhai_lake/mock-service"

// 获取某生成器分类的所有生成器
console.log(mock.getGeneratorCategory("string").generators.getAllGenerator())
// 获取某生成器
console.log(mock.getGeneratorCategory("string").generators.getGenerator("nanoid"))
// 获取某处理器分类下的所有处理器
console.log(mock.getProcessorCategory("string").processors.getAllProcessors())
// 获取某处理器
console.log(mock.getProcessorCategory("string").processors.getProcessor("lower"))
// 获取某生成器下的所有处理器
console.log(mock.getGeneratorCategory("string").generators.getGenerator("nanoid").getAllProcessors())
console.log(mock.getGenerator("string", "nanoid").getAllProcessors())
// 获取某生成器下的某处理器
console.log(mock.getGeneratorCategory("string").generators.getGenerator("nanoid").getProcessor("lower"))
console.log(mock.getGenerator("string", "nanoid").getProcessor("lower"))
```

typescript也有对应的类型定义:

* `generatorCategory`: 生成器分类.
* `generator`: 生成器.
* `processorCategory`: 处理器分类.
* `processor`: 处理器.

::: note
通过这种方式获取的数据是原始数据, 没有进行任何处理.

也就是说, 获取的标题描述等信息都可能是翻译键, 需要自行实现.
:::

## 调用内置的翻译方法

内置的翻译方法有4个:

* 翻译生成器分类: [`translateGeneratorCategory`](../i18n#翻译生成器分类)
* 翻译生成器: [`translateGenerator`](../i18n#翻译生成器)
* 翻译处理器分类: [`translateProcessorCategory`](../i18n#翻译处理器分类)
* 翻译处理器: [`translateProcessor`](../i18n#翻译处理器)

具体请查看 [i18n](../i18n) 中的方法自己实现翻译.
