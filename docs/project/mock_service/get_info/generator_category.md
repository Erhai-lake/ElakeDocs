---
title: 获取生成器分类信息
createTime: 2026/02/04 23:57:49
---

## 获取所有生成器分类信息

`getAllGeneratorCategoryInfo(): generatorCategoryInfo[]`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const ALL_CATEGORY = mock.getAllGeneratorCategoryInfo()
console.log(ALL_CATEGORY)
```

@tab typescript

```typescript
import mock, {type generatorCategoryInfo} from "@erhai_lake/mock-service"

const ALL_CATEGORY: generatorCategoryInfo[] = mock.getAllGeneratorCategoryInfo()
console.log(ALL_CATEGORY)
```

:::

::: details 返回

```json
[
	{
		"id": "string",
		"title": "字符串 / UUID 等",
		"description": "字符串相关的方法"
	},
	{
		"id": "lorem",
		"title": "单词 / 句子 / 段落 等",
		"description": "Lorem Ipsum 相关的方法"
	}
]
```

:::

## 获取某生成器分类信息

`getGeneratorCategoryInfo(category: string): generatorCategoryInfo`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const CATEGORY = mock.getGeneratorCategoryInfo("string")
console.log(CATEGORY)
```

@tab typescript

```typescript
import mock, {type generatorCategoryInfo} from "@erhai_lake/mock-service"

const CATEGORY: generatorCategoryInfo = mock.getGeneratorCategoryInfo("string")
console.log(CATEGORY)
```

:::

::: details 返回

```json
{
	"id": "string",
	"title": "字符串 / UUID 等",
	"description": "字符串相关的方法"
}
```

:::