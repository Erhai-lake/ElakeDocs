---
title: 新处理器分类和处理器注册
createTime: 2026/02/06 22:25:19
---

::: code-tabs

@tab:active javascript

```javascript
// 使用 createMockService 创建 Mock Service 实例
import {createMockService} from "@erhai_lake/mock-service"

// 注册处理器分类
const processorTestCategory = (processorRegistry) => {
	const CATEGORY = processorRegistry.registerCategory({
		id: "test",
		title: "这是一个测试分类",
		description: "这是一个测试分类的描述"
	})

	// 处理器方法
	CATEGORY.processors.registerProcessor({
		id: "testFn1",
		title: "这是一个测试处理器",
		description: "这是一个测试处理器的描述",
		apply(value) {
			return value + "|Test|" + value
		}
	})

	CATEGORY.processors.registerProcessor({
		id: "testFn2",
		title: "这是一个测试处理器(有1参数)",
		description: "这是一个测试处理器的描述",
		params: [
			{
				id: "a",
				title: "随便",
				description: "随便",
				type: "string",
				default: "测试测试"
			}
		],
		apply(value, a = "测试测试") {
			return value + "|" + a + "|" + value
		}
	})

	CATEGORY.processors.registerProcessor({
		id: "testFn3",
		title: "这是一个测试处理器(有2参数)",
		description: "这是一个测试处理器的描述",
		params: [
			{
				id: "min",
				title: "最小整数",
				description: "最小整数",
				type: "number",
				default: Number.MIN_SAFE_INTEGER,
				min: Number.MIN_SAFE_INTEGER,
				max: Number.MAX_SAFE_INTEGER,
				step: 1
			},
			{
				id: "max",
				title: "最大整数",
				description: "最大整数",
				type: "number",
				default: Number.MAX_SAFE_INTEGER,
				min: Number.MIN_SAFE_INTEGER,
				max: Number.MAX_SAFE_INTEGER,
				step: 1
			}
		],
		apply(value, params = {min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER}) {
			const {min, max} = params
			return value + "|" + Math.floor(Math.random() * (max - min + 1) + min) + "|" + value
		}
	})
}

// 创建 Mock Service 实例
const mock = createMockService({
	processorRegisters: [processorTestCategory]
})

// 调用处理器
console.log(mock.applyGlobalProcessor("testFn1", "测试"))
// 测试|Test|测试
console.log(mock.applyGlobalProcessor("testFn2", "测试", "1145"))
// 测试|1145|测试
console.log(mock.applyGlobalProcessor("testFn3", "测试", {min: 100, max: 200}))
// 测试|158|测试
```

@tab typescript

```typescript
// 使用 createMockService 创建 Mock Service 实例
import {createMockService} from "@erhai_lake/mock-service"
import type {processorCategoryRegistry, processorCategory, mockServiceOptions} from "@erhai_lake/mock-service"

// 注册处理器分类
const processorTestCategory = (processorRegistry: processorCategoryRegistry) => {
	const CATEGORY: processorCategory = processorRegistry.registerCategory({
		id: "test",
		title: "这是一个测试分类",
		description: "这是一个测试分类的描述"
	})

	// 处理器方法
	CATEGORY.processors.registerProcessor({
		id: "testFn1",
		title: "这是一个测试处理器",
		description: "这是一个测试处理器的描述",
		apply(value: string): string {
			return value + "|Test|" + value
		}
	})

	CATEGORY.processors.registerProcessor({
		id: "testFn2",
		title: "这是一个测试处理器(有1参数)",
		description: "这是一个测试处理器的描述",
		params: [
			{
				id: "a",
				title: "随便",
				description: "随便",
				type: "string",
				default: "测试测试"
			}
		],
		apply(value: string, a = "测试测试"): string {
			return value + "|" + a + "|" + value
		}
	})

	CATEGORY.processors.registerProcessor({
		id: "testFn3",
		title: "这是一个测试处理器(有2参数)",
		description: "这是一个测试处理器的描述",
		params: [
			{
				id: "min",
				title: "最小整数",
				description: "最小整数",
				type: "number",
				default: Number.MIN_SAFE_INTEGER,
				min: Number.MIN_SAFE_INTEGER,
				max: Number.MAX_SAFE_INTEGER,
				step: 1
			},
			{
				id: "max",
				title: "最大整数",
				description: "最大整数",
				type: "number",
				default: Number.MAX_SAFE_INTEGER,
				min: Number.MIN_SAFE_INTEGER,
				max: Number.MAX_SAFE_INTEGER,
				step: 1
			}
		],
		apply(value: string, params = {min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER}): string {
			const {min, max} = params
			return value + "|" + Math.floor(Math.random() * (max - min + 1) + min) + "|" + value
		}
	})
}

// 创建 Mock Service 实例
const MOCK_SERVICE_OPTIONS: mockServiceOptions = {
	processorRegisters: [processorTestCategory]
}
const mock = createMockService(MOCK_SERVICE_OPTIONS)

// 调用处理器
console.log(mock.applyGlobalProcessor("testFn1", "测试"))
// 测试|Test|测试
console.log(mock.applyGlobalProcessor("testFn2", "测试", "1145"))
// 测试|1145|测试
console.log(mock.applyGlobalProcessor("testFn3", "测试", {min: 100, max: 200}))
// 测试|158|测试
```

:::

看起来还行, 有点长, 处理器的参数也有点随便.

可以看看内置处理器是怎么实现的 [这里](https://github.com/Erhai-lake/mock-service/blob/master/src/builtin/processors/encodingDecoding/index.ts)

通过一个`index.ts`文件, 在引入[处理器](https://github.com/Erhai-lake/mock-service/blob/master/src/builtin/processors/encodingDecoding/registerSha.ts)进来.

具体怎么优化就交给各位开发者自己了.

## 贡献

有好的建议/生成器/处理器, 也可以通过[issue](https://github.com/Erhai-lake/mock-service/issues)告诉我.
