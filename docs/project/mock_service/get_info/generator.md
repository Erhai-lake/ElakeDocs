---
title: 获取某分类生成器信息
createTime: 2026/02/04 23:57:49
---

## 获取某分类所有生成器信息

`getAllGeneratorsInfo(category: string): generatorInfo[]`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const GENERATORS = mock.getAllGeneratorsInfo("string")
console.log(GENERATORS)
```

@tab typescript

```typescript
import mock, {type generatorInfo} from "@erhai_lake/mock-service"

const GENERATORS: generatorInfo[] = mock.getAllGeneratorsInfo("string")
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
		"processorIds": [
			"string",
			"encodingDecoding"
		]
	},
	{
		"id": "nanoid",
		"title": "生成 NanoID",
		"description": "生成一个随机且尽量唯一的 Nano ID",
		"params": [],
		"processorIds": [
			"string",
			"encodingDecoding"
		]
	}
]
```

:::

## 获取某生成器信息

`getGeneratorInfo(category: string, id: string): generatorInfo`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const GENERATOR = mock.getGeneratorInfo("string", "nanoid")
console.log(GENERATOR)
```

@tab typescript

```typescript
import mock, {type generatorInfo} from "@erhai_lake/mock-service"

const GENERATOR: generatorInfo = mock.getGeneratorInfo("string", "nanoid")
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
	"processorIds": [
		"string",
		"encodingDecoding"
	]
}
```

:::
