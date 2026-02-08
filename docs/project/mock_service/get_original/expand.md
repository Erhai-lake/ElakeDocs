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

1. `generatorCategory`: 翻译生成器分类.
2. `generator`: 翻译生成器.
3. `processorCategory`: 翻译处理器分类.
4. `processor`: 翻译处理器.

你也可以自己通过 [i18n](../i18n) 中的方法来实现翻译.

你可能会用到的示例:

```javascript
import mock, {mockTranslate} from "@erhai_lake/mock-service"

// 翻译表
const TRANSLATE_TABLE = mock.getTranslateTable()

// 翻译某生成器分类的所有生成器
const GENERATORS = mock.getGeneratorCategory("string").generators.getAllGenerator()
const TRANSLATED_GENERATORS = GENERATORS.map((generator) => {
	return mockTranslate.generator(generator, TRANSLATE_TABLE)
})
console.log(TRANSLATED_GENERATORS)

// 翻译某生成器
const GENERATOR = mock.getGeneratorCategory("string").generators.getGenerator("nanoid")
const TRANSLATED_GENERATOR = mockTranslate.generator(GENERATOR, TRANSLATE_TABLE)
console.log(TRANSLATED_GENERATOR)
```

其他翻译方法也差不多的, 就不重复写了.
