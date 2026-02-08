---
title: 获取处理器信息
createTime: 2026/02/04 23:57:49
---

## 获取所有处理器信息

`getAllProcessorsInfo(category: string): processorInfo[]`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const PROCESSORS = mock.getAllProcessorsInfo("string")
console.log(PROCESSORS)
```

@tab typescript

```typescript
import mock, {type processorInfo} from "@erhai_lake/mock-service"

const PROCESSORS: processorInfo[] = mock.getAllProcessorsInfo("string")
console.log(PROCESSORS)
```

:::

::: details 返回

```json
[
	{
		"id": "lower",
		"title": "小写",
		"description": "将字符串转换为小写"
	},
	{
		"id": "upper",
		"title": "大写",
		"description": "将字符串转换为大写"
	}
]
```

:::

## 获取某处理器信息

`getProcessorInfo(category: string, id: string): processorInfo`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const PROCESSOR = mock.getProcessorInfo("string", "substr")
console.log(PROCESSOR)
```

@tab typescript

```typescript
import mock, {type processorInfo} from "@erhai_lake/mock-service"

const PROCESSOR: processorInfo = mock.getProcessorInfo("string", "substr")
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
	]
}
```

:::
