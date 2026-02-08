---
title: 获取某生成器的处理器信息组
createTime: 2026/02/05 15:54:48
---

`getGeneratorProcessorGroups(category: string, id: string): processorGroup[]`

用来做前端展示时, 会很方便.

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const PROCESSOR_GROUPS = mock.getGeneratorProcessorGroups("string", "nanoid")
console.log(PROCESSOR_GROUPS)
```

@tab typescript

```typescript
import mock, {type processorGroup} from "@erhai_lake/mock-service"

const PROCESSOR_GROUPS: processorGroup[] = mock.getGeneratorProcessorGroups("string", "nanoid")
console.log(PROCESSOR_GROUPS)
```

:::

::: details 返回

```json
[
	{
		"id": "string",
		"title": "字符串相关",
		"description": "字符串相关的处理器",
		"processor": [
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
		]
	},
	{
		"id": "encodingDecoding",
		"title": "编码解码",
		"description": "编码解码相关的处理器",
		"processor": []
	}
]
```

:::