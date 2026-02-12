---
title: 新特性
createTime: 2026/02/12 23:43:11
---

## 自定义表达式

于 [0.0.3] 版本加入.

用于应用层输入js字符串, 返回执行结果, 可以用于一些复杂的场景, 如动态计算值.

支持方法调用, 模板调用(支持处理器), 上下文对象.

* [方法](./generator_processor/custom_expression)
* [模板](./template/template)
* [上下文列表](./custom/context#上下文列表)

::: note
由于自定义表达式不属于特定的生成器分类.

自定义表达式所使用的处理器将会在**[全局处理器池](./generator_processor/processor#applyGlobalProcessor)**中进行全域搜索.
:::

## 变量系统

于 [0.0.3] 版本加入.

变量系统允许你在生成数据的过程中, 实现数据的跨区域共享与持久化.

支持方法调用, 模板调用(支持处理器), 生成器调用.

* [方法](./var/function)
* [模板](./template/template)
* [生成器](./var/generator)

::: note
由于变量不属于特定的生成器分类.

变量所使用的处理器将会在**[全局处理器池](./generator_processor/processor#applyGlobalProcessor)**中进行全域搜索.
:::