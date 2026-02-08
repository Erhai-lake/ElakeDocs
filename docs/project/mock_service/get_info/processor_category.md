---
title: 获取处理器分类信息
createTime: 2026/02/04 23:57:49
---

## 获取所有处理器分类信息

`getAllProcessorCategoryInfo(): processorCategoryInfo[]`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const ALL_CATEGORY = mock.getAllProcessorCategoryInfo()
console.log(ALL_CATEGORY)
```

@tab typescript

```typescript
import mock, {type processorCategoryInfo} from "@erhai_lake/mock-service"

const ALL_CATEGORY: processorCategoryInfo[] = mock.getAllProcessorCategoryInfo()
console.log(ALL_CATEGORY)
```

:::

::: details 返回

```json
[
	{
		"id": "string",
		"title": "字符串相关",
		"description": "字符串相关的处理器"
	},
	{
		"id": "encodingDecoding",
		"title": "编码解码",
		"description": "编码解码相关的处理器"
	},
	{
		"id": "date",
		"title": "日期时间相关",
		"description": "日期时间相关的处理器"
	}
]
```

:::

## 获取某处理器分类信息

`getProcessorCategoryInfo(category: string): processorCategoryInfo`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const CATEGORY = mock.getProcessorCategoryInfo("string")
console.log(CATEGORY)
```

@tab typescript

```typescript
import mock, {type processorCategoryInfo} from "@erhai_lake/mock-service"

const CATEGORY: processorCategoryInfo = mock.getProcessorCategoryInfo("string")
console.log(CATEGORY)
```

:::

::: details 返回

```json
{
	"id": "string",
	"title": "字符串相关",
	"description": "字符串相关的处理器"
}
```

:::
