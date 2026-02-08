---
title: 获取生成器中的处理器
createTime: 2026/02/04 23:57:49
---

## 获取某生成器所有处理器

`getGeneratorAllProcessor(category: string, id: string): processor[]`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const PROCESSORS = mock.getGeneratorAllProcessor("string", "nanoid")
console.log(PROCESSORS)
```

@tab typescript

```typescript
import mock, {type processor} from "@erhai_lake/mock-service"

const PROCESSORS: processor[] = mock.getGeneratorAllProcessor("string", "nanoid")
console.log(PROCESSORS)
```

:::

::: details 返回

```json
[
	{
		"id": "lower",
		"title": "小写",
		"description": "将字符串转换为小写",
		"apply": "处理器 Function"
	},
	{
		"id": "upper",
		"title": "大写",
		"description": "将字符串转换为大写",
		"apply": "处理器 Function"
	}
]
```

:::

## 获取某生成器中的某处理器

`getGeneratorProcessor(category: string, id: string, processorId: string): processor`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const PROCESSOR = mock.getGeneratorProcessor("string", "nanoid", "substr")
console.log(PROCESSOR)
```

@tab typescript

```typescript
import mock, {type processor} from "@erhai_lake/mock-service"

const PROCESSOR: processor = mock.getGeneratorProcessor("string", "nanoid", "substr")
console.log(PROCESSOR)
```

:::

::: details 返回

```json
{
	"id": "substr",
	"title": "截取子字符串",
	"description": "截取字符串的子字符串",
	"params": [
		{
			"id": "start",
			"title": "截取开始位置",
			"description": "截取的开始位置",
			"type": "number",
			"default": 0,
			"min": 0,
			"step": 1
		},
		{
			"id": "length",
			"title": "截取长度",
			"description": "截取的长度",
			"type": "number",
			"default": 10,
			"min": 0,
			"step": 1
		}
	],
	"apply": "处理器 Function"
}
```

:::
