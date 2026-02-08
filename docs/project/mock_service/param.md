---
title: 参数
createTime: 2026/02/07 18:27:08
---

本文介绍 **Mock Service** 中的参数. 适用于生成器和处理器.

这部分很重要, 不管你是前端写参数输入, 还是要自定义生成器或处理器, 都需要了解参数的配置.

`params` 字段是一个数组, 数组内使用对象表示每个参数. 每种类型的参数都有不同的配置项.

## 参数类型

目前内置的生成器/处理器使用的类型有:

* `string`: 字符串类型, 用于表示文本数据.
* `number`: 数值类型, 用于表示数值数据.
* `select`: 选择类型, 用于表示从预定义选项中选择一个值.
* `boolean`: 布尔类型, 用于表示逻辑值.

不管什么类型, `id`, `title`, `description`, `type`, `default` 都是必填项.

`default` 在字符串类型中, 可以为空, 但是字段需存在.

## string

* `id`: 参数id, 生成器/处理器中使用, 不能有空格, 可以使用下划线(`_`), 或者`testId`
* `title`: 标题, 用于在前端展示
* `description`: 描述, 用于在前端展示
* `type`: 类型, `string`
* `default`: 默认值

```json
{
	"id": "test",
	"title": "测试参数",
	"description": "这是一个测试参数",
	"type": "string",
	"default": ""
}
```

## number

* `id`: 参数id, 生成器/处理器中使用, 不能有空格, 可以使用下划线(`_`), 或者`testId`
* `title`: 标题, 用于在前端展示
* `description`: 描述, 用于在前端展示
* `type`: 类型, `number`
* `default`: 默认值
* `min`: 最小值, 可以为空, 前端表示无下限
* `max`: 最大值, 可以为空, 前端表示无上限
* `step`: 步长, 可以为空, 前端表示无步长, 需注意区分`1`还是`1.0`(整数还是浮点数)

```json
{
	"id": "test",
	"title": "测试参数",
	"description": "这是一个测试参数",
	"type": "number",
	"default": 0,
	"min": 1,
	"max": 100,
	"step": 1
}
```

## select

* `id`: 参数id, 生成器/处理器中使用, 不能有空格, 可以使用下划线(`_`), 或者`testId`
* `title`: 标题, 用于在前端展示
* `description`: 描述, 用于在前端展示
* `type`: 类型, `select`
* `options`: 选项列表, 必须包含至少一个选项, 每个选项是一个对象, 包含 `key` 和 `label` 两个字段.
* `default`: 默认值, 应该是 `options` 中的一个值, 且为字符串类型

```json
{
	"id": "test",
	"title": "测试参数",
	"description": "这是一个测试参数",
	"type": "select",
	"options": [
		{"key": "option1", "label": "选项1"},
		{"key": "option2", "label": "选项2"}
	],
	"default": "option1"
}
```

## boolean

* `id`: 参数id, 生成器/处理器中使用, 不能有空格, 可以使用下划线(`_`), 或者`testId`
* `title`: 标题, 用于在前端展示
* `description`: 描述, 用于在前端展示
* `type`: 类型, `boolean`
* `default`: 默认值 (`true`/`false`)

```json
{
	"id": "test",
	"title": "测试参数",
	"description": "这是一个测试参数",
	"type": "boolean",
	"default": false
}
```