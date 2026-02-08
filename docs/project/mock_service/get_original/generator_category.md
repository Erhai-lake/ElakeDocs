---
title: 获取生成器分类
createTime: 2026/02/04 23:57:49
---

## 获取所有生成器分类

`getAllGeneratorCategory(): generatorCategory[]`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const ALL_CATEGORY = mock.getAllGeneratorCategory()
console.log(ALL_CATEGORY)
```

@tab typescript

```typescript
import mock, {type generatorCategory} from "@erhai_lake/mock-service"

const ALL_CATEGORY: generatorCategory[] = mock.getAllGeneratorCategory()
console.log(ALL_CATEGORY)
```

:::

::: details 返回

```json
[
	{
		"id": "string",
		"title": "字符串 / UUID 等",
		"description": "字符串相关的方法",
		"generators": "生成器 Map"
	},
	{
		"id": "lorem",
		"title": "单词 / 句子 / 段落 等",
		"description": "Lorem Ipsum 相关的方法",
		"generators": "生成器 Map"
	}
]
```

:::

## 获取某生成器分类

`getGeneratorCategory(category: string): generatorCategory`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const CATEGORY = mock.getGeneratorCategory("string")
console.log(CATEGORY)
```

@tab typescript

```typescript
import mock, {type generatorCategory} from "@erhai_lake/mock-service"

const CATEGORY: generatorCategory = mock.getGeneratorCategory("string")
console.log(CATEGORY)
```

:::

::: details 返回

```json
{
	"id": "string",
	"title": "字符串 / UUID 等",
	"description": "字符串相关的方法",
	"generators": "生成器 Map"
}
```

:::