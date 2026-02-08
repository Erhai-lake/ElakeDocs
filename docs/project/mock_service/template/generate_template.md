---
title: 生成模板
createTime: 2026/02/06 19:16:42
---

`generateTemplate(config: generateTemplateConfig): string`

::: code-tabs

@tab:active javascript

```javascript
import mock from "@erhai_lake/mock-service"

const CONFIG = {
	category: "string",
	generator: "uuid",
	params: {
		version: "v4"
	},
	processors: [
		{
			id: "sha",
			params: {
				algorithm: "SHA512"
			}
		}
	]
}
const TEMPLATE = mock.generateTemplate(CONFIG)
console.log(TEMPLATE)
// {{$string.uuid|sha("SHA512")}}
```

@tab typescript

```typescript
import mock, {type generateTemplateConfig, type processorCallConfig} from "@erhai_lake/mock-service"

const PROCESSOR_CONFIG: processorCallConfig[] = [
	{
		id: "sha",
		params: {
			algorithm: "SHA512"
		}
	}
]
const CONFIG: generateTemplateConfig = {
	category: "string",
	generator: "uuid",
	params: {
		version: "v4"
	},
	processors: PROCESSOR_CONFIG
}
const TEMPLATE = mock.generateTemplate(CONFIG)
console.log(TEMPLATE)
// {{$string.uuid|sha("SHA512")}}
```

typescript 一共两个数据结构, 通常只用 `generateTemplateConfig` 也行.
