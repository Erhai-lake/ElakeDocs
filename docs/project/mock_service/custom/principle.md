---
title: 原理
createTime: 2026/02/06 22:04:41
---

在开始编写扩展之前, 你或许需要了解一下 **Mock Service** 的注册原理.

它基于一个灵活的注册机制, 允许你以“分类”为单位, 模块化地注入功能.

## 注册器体系

**Mock Service** 一共有五个注册器, 分别负责注册不同类型的扩展.

1. `generatorCategoryRegistry`: 生成器分类注册器, 管理生成器的顶层分类.
2. `generatorRegistry`: 生成器注册器, 依附于分类, 具体管理数据的产出逻辑.
3. `processorCategoryRegistry`: 处理器分类注册器, 管理处理器的顶层分类.
4. `processorRegistry`: 处理器注册器, 依附于分类, 具体管理数据的加工逻辑.
5. `i18nRegistry`: 国际化注册器, 集中管理所有分类与功能的多语言文案.

## 插件注册机制

与其说我们在"调用方法", 不如说我们在"编写插件".

每个注册函数本质上都是一个 **Plugin**. 当你把这些函数传给 `mockService` 时, 它会将对应的注册器实例注入给你的函数.

这五个注册器, 会分别在三篇文章中介绍如何新增. 刚好对应着三个主要的扩展点.

* [新生成器分类和生成器注册](./generator_registry)
* [新处理器分类和处理器注册](./processor_registry)
* [新国际化文案注册](./i18n_registry)
* [整合](./integration)
