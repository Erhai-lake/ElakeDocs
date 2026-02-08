---
title: 获取生成器信息组
createTime: 2026/02/05 15:54:48
---

`getGeneratorGroups(): generatorGroup[]`

用来做前端展示时, 会很方便.

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const GENERATOR_GROUPS = mock.getGeneratorGroups()
console.log(GENERATOR_GROUPS)
```

@tab typescript

```typescript
import mock, {type generatorGroup} from "@erhai_lake/mock-service"

const GENERATOR_GROUPS: generatorGroup[] = mock.getGeneratorGroups()
console.log(GENERATOR_GROUPS)
```

:::

::: details 返回

```json
[
	{
		"id": "string",
		"title": "字符串 / UUID 等",
		"description": "字符串相关的方法",
		"generators": [
			{
				"id": "uuid",
				"title": "UUID",
				"description": "生成随机且唯一的 UUID(v1, v4, v7)基于命名空间和名称生成可复现的 UUID(v3, v5)",
				"params": [],
				"processorIds": [
					"string",
					"encodingDecoding"
				]
			}
		]
	},
	{
		"id": "lorem",
		"title": "单词 / 句子 / 段落 等",
		"description": "Lorem Ipsum 相关的方法",
		"generators": []
	}
]
```

:::