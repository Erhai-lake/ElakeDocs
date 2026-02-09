---
title: 新国际化文案注册
createTime: 2026/02/06 22:25:27
---

::: note
国际化这里的新增, 并不是字面意思的.

这里指的是: 如果注册的语言并不存在, 则新增语言, 如果存在, 则合并语言文案.
:::

::: code-tabs

@tab:active javascript

```javascript
// 使用 createMockService 创建 Mock Service 实例
import {createMockService} from "@erhai_lake/mock-service"

const i18nZhCN = (i18nRegistry) => {
	i18nRegistry.register("zh-CN", {
		generator: {
			test: {
				title: "测试",
				description: "测试用的分类",
				test: {
					title: "测试生成器",
					description: "测试用的生成器"
				}
			}
		},
		processors: {
			test: {
				title: "测试",
				description: "测试用的分类",
				test: {
					title: "测试处理器",
					description: "测试用的处理器"
				}
			}
		}
	})
}

// 创建 Mock Service 实例
const MOCK_SERVICE_OPTIONS = {
	i18nRegisters: [i18nZhCN]
}
const mock = createMockService(MOCK_SERVICE_OPTIONS)

// 调用翻译
console.log(mock.translate("generator.test.title"))
console.log(mock.translate("processors.test.test.title"))
```

@tab typescript

```typescript
// 使用 createMockService 创建 Mock Service 实例
import {createMockService} from "@erhai_lake/mock-service"
import type {i18nRegistry, mockServiceOptions} from "@erhai_lake/mock-service"

const i18nZhCN = (i18nRegistry: i18nRegistry) => {
	i18nRegistry.register("zh-CN", {
		generator: {
			test: {
				title: "测试",
				description: "测试用的分类",
				test: {
					title: "测试生成器",
					description: "测试用的生成器"
				}
			}
		},
		processors: {
			test: {
				title: "测试",
				description: "测试用的分类",
				test: {
					title: "测试处理器",
					description: "测试用的处理器"
				}
			}
		}
	})
}

// 创建 Mock Service 实例
const MOCK_SERVICE_OPTIONS: mockServiceOptions = {
	i18nRegisters: [i18nZhCN]
}
const mock = createMockService(MOCK_SERVICE_OPTIONS)

// 调用翻译
console.log(mock.translate("generator.test.title"))
console.log(mock.translate("processors.test.test.title"))
```

:::

## 关于占位符

如果你需要占位符, 可以写为:

```json
{
	"error": {
		"unsupportedDate": "不支持的日期时间格式: {{format}}"
	}
}
```

调用时只需要按照 [Error 错误返回](./error) 中的示例, 传入占位符参数即可.

## 贡献

目前英文翻译是**gemini 3**生成的, 如有错误, 或者更好的翻译.

可以通过[issue](https://github.com/Erhai-lake/mock-service/issues)告诉我.