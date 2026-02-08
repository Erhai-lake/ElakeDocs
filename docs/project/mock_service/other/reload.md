---
title: 重置
createTime: 2026/02/08 17:09:15
---

`reload(options: mockServiceOptions = {})`

重新加载 Mock Service, 清空所有注册后重新注册.

如果有 `options` 配置, 则会合并到初始化时的配置中.

该方法不会丢失i18n配置. 但是会丢失以下方法的自定义配置.

* `addProcessorCategoryToGeneratorCategory`
* `removeProcessorCategoryFromGeneratorCategory`
* `addProcessorCategoryToGenerator`
* `removeProcessorCategoryFromGenerator`

也就是说, 如果你有使用以上方法, 需要在重载后, 重新运行!