---
title: 获取某分类生成器
createTime: 2026/02/04 23:57:49
---

## 获取某分类所有生成器

`getAllGenerators(category: string): generator[]`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const GENERATORS = mock.getAllGenerators("string")
console.log(GENERATORS)
```

@tab typescript

```typescript
import mock, {type generator} from "@erhai_lake/mock-service"

const GENERATORS: generator[] = mock.getAllGenerators("string")
console.log(GENERATORS)
```

:::

::: details 返回

```json
[
	{
		"id": "uuid",
		"title": "UUID",
		"description": "生成随机且唯一的 UUID(v1, v4, v7)基于命名空间和名称生成可复现的 UUID(v3, v5)",
		"params": [],
		"generate": "生成器 Function",
		"processorIds": [
			"string",
			"encodingDecoding"
		],
		"processors": "处理器 Map",
		"registerProcessor": "注册处理器 Function",
		"getProcessor": "获取处理器 Function",
		"getAllProcessors": "获取所有处理器 Function"
	},
	{
		"id": "nanoid",
		"title": "生成 NanoID",
		"description": "生成一个随机且尽量唯一的 Nano ID",
		"params": [],
		"generate": "生成器 Function",
		"processorIds": [
			"string",
			"encodingDecoding"
		],
		"processors": "处理器 Map",
		"registerProcessor": "注册处理器 Function",
		"getProcessor": "获取处理器 Function",
		"getAllProcessors": "获取所有处理器 Function"
	}
]
```

:::

## 获取某生成器

`getGenerator(category: string, id: string): generator`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const GENERATOR = mock.getGenerator("string", "nanoid")
console.log(GENERATOR)
```

@tab typescript

```typescript
import mock, {type generator} from "@erhai_lake/mock-service"

const GENERATOR: generator = mock.getGenerator("string", "nanoid")
console.log(GENERATOR)
```

:::

::: details 返回

```json
{
	"id": "nanoid",
	"title": "生成 NanoID",
	"description": "生成一个随机且尽量唯一的 Nano ID",
	"params": [
		{
			"id": "min",
			"title": "最小长度",
			"description": "Nano ID 最小长度",
			"type": "number",
			"default": 21,
			"min": 1,
			"step": 1
		},
		{
			"id": "max",
			"title": "最大长度",
			"description": "Nano ID 最大长度",
			"type": "number",
			"default": 21,
			"min": 1,
			"step": 1
		}
	],
	"generate": "生成器 Function",
	"processorIds": [
		"string",
		"encodingDecoding"
	],
	"processors": "处理器 Map",
	"registerProcessor": "注册处理器 Function",
	"getProcessor": "获取处理器 Function",
	"getAllProcessors": "获取所有处理器 Function"
}
```

:::
