---
title: 新生成器分类和生成器注册
createTime: 2026/02/06 22:25:10
---

::: code-tabs

@tab:active javascript

```javascript
// 使用 createMockService 创建 Mock Service 实例
import {createMockService} from "@erhai_lake/mock-service"

// 注册生成器分类
const generatorTestCategory = (categoryRegistry) => {
	const CATEGORY = categoryRegistry.registerCategory({
		id: "test",
		title: "这是一个测试分类",
		description: "这是一个测试分类的描述"
	})

	// 生成器方法
	CATEGORY.generators.registerGenerator({
		id: "testFn1",
		title: "这是一个测试生成器",
		description: "这是一个测试生成器的描述",
		processors: ["string", "encodingDecoding", "date"],
		generate() {
			return String(Date.now())
		}
	})

	CATEGORY.generators.registerGenerator({
		id: "testFn2",
		title: "这是一个测试生成器(有1参数)",
		description: "这是一个测试生成器的描述",
		params: [
			{
				id: "a",
				title: "随便",
				description: "随便",
				type: "string",
				default: "测试测试"
			}
		],
		processors: ["string", "encodingDecoding"],
		generate(a = "测试测试") {
			return a + a
		}
	})

	CATEGORY.generators.registerGenerator({
		id: "testFn3",
		title: "这是一个测试生成器(有2参数)",
		description: "这是一个测试生成器的描述",
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
		processors: ["string", "encodingDecoding"],
		generate(params = {min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER}) {
			const {min, max} = params
			return Math.floor(Math.random() * (max - min + 1) + min)
		}
	})
}

// 创建 Mock Service 实例
const MOCK_SERVICE_OPTIONS = {
	generatorRegisters: [generatorTestCategory]
}
const mock = createMockService(MOCK_SERVICE_OPTIONS)

// 调用生成器
console.log(mock.templateGenerateData('{{$test.testFn1}}'))
// 1770389121984
console.log(mock.templateGenerateData('{{$test.testFn1|format}}'))
// 2026-02-06 22:45:21
console.log(mock.templateGenerateData('{{$test.testFn2}}'))
// 测试测试测试测试
console.log(mock.templateGenerateData('{{$test.testFn3}}'))
// -473234059550169
console.log(mock.templateGenerateData('{{$test.testFn2(min=100,max=200)}}'))
// 161
```

@tab typescript

```typescript
// 使用 createMockService 创建 Mock Service 实例
import {createMockService} from "@erhai_lake/mock-service"
import type {generatorCategoryRegistry, generatorCategory, mockServiceOptions} from "@erhai_lake/mock-service"

// 注册生成器分类
const generatorTestCategory = (categoryRegistry: generatorCategoryRegistry) => {
	const CATEGORY: generatorCategory = categoryRegistry.registerCategory({
		id: "test",
		title: "这是一个测试分类",
		description: "这是一个测试分类的描述"
	})

	// 生成器方法
	CATEGORY.generators.registerGenerator({
		id: "testFn1",
		title: "这是一个测试生成器",
		description: "这是一个测试生成器的描述",
		processors: ["string", "encodingDecoding", "date"],
		generate(): string {
			return String(Date.now())
		}
	})

	CATEGORY.generators.registerGenerator({
		id: "testFn2",
		title: "这是一个测试生成器(有1参数)",
		description: "这是一个测试生成器的描述",
		params: [
			{
				id: "a",
				title: "随便",
				description: "随便",
				type: "string",
				default: "测试测试"
			}
		],
		processors: ["string", "encodingDecoding"],
		generate(a = "测试测试"): string {
			return a + a
		}
	})

	CATEGORY.generators.registerGenerator({
		id: "testFn3",
		title: "这是一个测试生成器(有2参数)",
		description: "这是一个测试生成器的描述",
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
		processors: ["string", "encodingDecoding"],
		generate(params = {min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER}): number {
			const {min, max} = params
			return Math.floor(Math.random() * (max - min + 1) + min)
		}
	})
}

// 创建 Mock Service 实例
const MOCK_SERVICE_OPTIONS: mockServiceOptions = {
	generatorRegisters: [generatorTestCategory]
}
const mock = createMockService(MOCK_SERVICE_OPTIONS)

// 调用生成器
console.log(mock.templateGenerateData('{{$test.testFn1}}'))
// 1770389121984
console.log(mock.templateGenerateData('{{$test.testFn1|format}}'))
// 2026-02-06 22:45:21
console.log(mock.templateGenerateData('{{$test.testFn2}}'))
// 测试测试测试测试
console.log(mock.templateGenerateData('{{$test.testFn3}}'))
// -473234059550169
console.log(mock.templateGenerateData('{{$test.testFn2(min=100,max=200)}}'))
// 161
```

:::

看起来还行, 有点长, 生成器的参数也有点随便.

可以看看内置生成器是怎么实现的 [这里](https://github.com/Erhai-lake/mock-service/blob/master/src/builtin/generator/string/index.ts)

通过一个`index.ts`文件, 在引入[生成器](https://github.com/Erhai-lake/mock-service/blob/master/src/builtin/generator/string/registerUUID.ts)进来.

具体怎么优化就交给各位开发者自己了.

有好的建议/生成器/处理器, 也可以通过[issue](https://github.com/Erhai-lake/mock-service/issues)告诉我.
