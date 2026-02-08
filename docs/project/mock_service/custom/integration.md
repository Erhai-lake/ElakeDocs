---
title: 整合
createTime: 2026/02/06 23:35:59
---

当你了解了注册原理后, 最好的学习方式就是看一个[完整的工程化示例](https://github.com/Erhai-lake/mock-service/tree/master/test).

在下面的示例中, 我们将演示如何创建一个名为 `testGen` 的生成器分类和一个名为 `testProc` 的处理器分类, 并完成它们的关联与国际化配置.

::: code-tree title="Integration Test" height="500px" entry="index.ts"

```typescript title="index.ts"
import {createMockService} from "@erhai_lake/mock-service"
import type {mockServiceOptions} from "@erhai_lake/mock-service"
import {generatorTestCategory} from "./generator"
import {processorTestCategory} from "./processor"
import {i18nZhCN} from "./i18n/registerZhCN"

// 创建 Mock Service 实例
const MOCK_SERVICE_OPTIONS: mockServiceOptions = {
	generatorRegisters: [generatorTestCategory],
	processorRegisters: [processorTestCategory],
	i18nRegisters: [i18nZhCN]
}
const mock = createMockService(MOCK_SERVICE_OPTIONS)

console.log(mock.templateGenerateData('{{$testGen.testFn1}}'))
console.log(mock.templateGenerateData('{{$testGen.testFn1|format|testFn1}}'))
console.log(mock.templateGenerateData('{{$testGen.testFn2|testFn3}}'))
console.log(mock.templateGenerateData('{{$testGen.testFn2}}'))
console.log(mock.templateGenerateData('{{$testGen.testFn3(min=100,max=200)|testFn3}}'))

console.log(mock.getGeneratorCategoryInfo("testGen"))
console.log(mock.getAllGeneratorsInfo("testGen"))
console.log(mock.getProcessorCategoryInfo("testProc"))
console.log(mock.getAllProcessorsInfo("testProc"))
```

```typescript title="generator/index.ts"
import type {generatorCategoryRegistry, generatorCategory} from "@erhai_lake/mock-service"
import {registerTestFn1} from "./registerTestFn1"
import {registerTestFn2} from "./registerTestFn2"
import {registerTestFn3} from "./registerTestFn3"

export const generatorTestCategory = (categoryRegistry: generatorCategoryRegistry) => {
	const CATEGORY: generatorCategory = categoryRegistry.registerCategory({
		id: "testGen",
		title: "generator.testGen.title",
		description: "generator.testGen.description"
	})

	registerTestFn1(CATEGORY)
	registerTestFn2(CATEGORY)
	registerTestFn3(CATEGORY)
}
```

```typescript title="generator/registerTestFn1.ts"
export const registerTestFn1 = (CATEGORY: any): void => {
	CATEGORY.generators.registerGenerator({
		id: "testFn1",
		title: "generator.testGen.testFn1.title",
		description: "generator.testGen.testFn1.description",
		processors: ["string", "encodingDecoding", "date", "testProc"],
		generate(): string {
			return String(Date.now())
		}
	})
}
```

```typescript title="generator/registerTestFn2.ts"
interface params {
	a: string
}

const PARAMS: params = {
	a: "测试测试"
}

export const registerTestFn2 = (CATEGORY: any): void => {
	CATEGORY.generators.registerGenerator({
		id: "testFn2",
		title: "generator.testGen.testFn2.title",
		description: "generator.testGen.testFn2.description",
		params: [
			{
				id: "a",
				title: "generator.testGen.testFn2.params.a.title",
				description: "generator.testGen.testFn2.params.a.description",
				type: "string",
				default: PARAMS.a
			}
		],
		processors: ["string", "encodingDecoding", "testProc"],
		generate(a = PARAMS.a): string {
			return a + a
		}
	})
}
```

```typescript title="generator/registerTestFn3.ts"
interface params {
	min: number
	max: number
}

const PARAMS: params = {
	min: Number.MIN_SAFE_INTEGER,
	max: Number.MAX_SAFE_INTEGER
}

export const registerTestFn3 = (CATEGORY: any): void => {
	CATEGORY.generators.registerGenerator({
		id: "testFn3",
		title: "generator.testGen.testFn3.title",
		description: "generator.testGen.testFn3.description",
		params: [
			{
				id: "min",
				title: "generator.testGen.testFn3.params.min.title",
				description: "generator.testGen.testFn3.params.min.description",
				type: "number",
				default: PARAMS.min,
				min: Number.MIN_SAFE_INTEGER,
				max: Number.MAX_SAFE_INTEGER,
				step: 1
			},
			{
				id: "max",
				title: "category.testGen.testFn3.params.max.title",
				description: "category.testGen.testFn3.params.max.description",
				type: "number",
				default: PARAMS.max,
				min: Number.MIN_SAFE_INTEGER,
				max: Number.MAX_SAFE_INTEGER,
				step: 1
			}
		],
		processors: ["string", "encodingDecoding", "testProc"],
		generate(params: Partial<params> = {}): string {
			const {min, max} = {...PARAMS, ...params}
			if (max < min) throw new Error("max must be greater than or equal to min")
			return String(Math.floor(Math.random() * (max - min + 1) + min))
		}
	})
}
```

```typescript title="processor/index.ts"
import type {processorCategoryRegistry, generatorCategory} from "@erhai_lake/mock-service"
import {registerTestFn1} from "./registerTestFn1"
import {registerTestFn2} from "./registerTestFn2"
import {registerTestFn3} from "./registerTestFn3"

export const processorTestCategory = (processorRegistry: processorCategoryRegistry) => {
	const CATEGORY: processorCategory = processorRegistry.registerCategory({
		id: "testProc",
		title: "processor.testProc.title",
		description: "processor.testProc.description"
	})

	registerTestFn1(CATEGORY)
	registerTestFn2(CATEGORY)
	registerTestFn3(CATEGORY)
}
```

```typescript title="processor/registerTestFn1.ts"
export const registerTestFn1 = (CATEGORY: any): void => {
	CATEGORY.processors.registerProcessor({
		id: "testFn1",
		title: "processor.testProc.testFn1.title",
		description: "processor.testProc.testFn1.description",
		apply(value: string): string {
			return value + "|Test|" + value
		}
	})
}
```

```typescript title="processor/registerTestFn2.ts"
interface params {
	a: string
}

const PARAMS: params = {
	a: "测试测试"
}

export const registerTestFn2 = (CATEGORY: any): void => {
	CATEGORY.processors.registerProcessor({
		id: "testFn2",
		title: "processor.testProc.testFn2.title",
		description: "processor.testProc.testFn2.description",
		params: [
			{
				id: "a",
				title: "processor.testProc.testFn2.params.a.title",
				description: "processor.testProc.testFn2.params.a.description",
				type: "string",
				default: PARAMS.a
			}
		],
		apply(value: string, a = PARAMS.a): string {
			return value + "|" + a + "|" + value
		}
	})
}
```

```typescript title="processor/registerTestFn3.ts"
interface params {
	min: number
	max: number
}

const PARAMS: params = {
	min: Number.MIN_SAFE_INTEGER,
	max: Number.MAX_SAFE_INTEGER
}

export const registerTestFn3 = (CATEGORY: any): void => {
	CATEGORY.processors.registerProcessor({
		id: "testFn3",
		title: "processor.testProc.testFn3.title",
		description: "processor.testProc.testFn3.description",
		params: [
			{
				id: "min",
				title: "processor.testProc.testFn3.params.min.title",
				description: "processor.testProc.testFn3.params.min.description",
				type: "number",
				default: PARAMS.min,
				min: Number.MIN_SAFE_INTEGER,
				max: Number.MAX_SAFE_INTEGER,
				step: 1
			},
			{
				id: "max",
				title: "processor.testProc.testFn3.params.max.title",
				description: "processor.testProc.testFn3.params.max.description",
				type: "number",
				default: PARAMS.max,
				min: Number.MIN_SAFE_INTEGER,
				max: Number.MAX_SAFE_INTEGER,
				step: 1
			}
		],
		processors: ["string", "encodingDecoding"],
		apply(value: string, params: Partial<params> = {}): string {
			const {min, max} = {...PARAMS, ...params}
			if (max < min) throw new Error("max must be greater than or equal to min")
			return value + "|" + Math.floor(Math.random() * (max - min + 1) + min) + "|" + value
		}
	})
}
```

```typescript title="i18n/registerZhCN.ts"
export const i18nZhCN = (i18nRegistry: any) => {
	i18nRegistry.register("zh-CN", {
		generator: {
			testGen: {
				title: "这是一个测试生成器分类",
				description: "这是一个测试生成器分类的描述",
				testFn1: {
					title: "这是一个测试生成器",
					description: "这是一个测试生成器的描述"
				},
				testFn2: {
					title: "这是一个测试生成器(有1参数)",
					description: "这是一个测试生成器的描述",
					params: {
						a: {
							title: "这是一个测试参数",
							description: "这是一个测试参数的描述"
						}
					}
				},
				testFn3: {
					title: "这是一个测试生成器(有2参数)",
					description: "这是一个测试生成器的描述",
					params: {
						min: {
							title: "最小参数值",
							description: "这是一个测试参数的描述"
						},
						max: {
							title: "最大参数值",
							description: "这是一个测试参数的描述"
						}
					}
				}
			}
		},
		processor: {
			testProc: {
				title: "这是一个测试处理器分类",
				description: "这是一个测试处理器分类的描述",
				testFn1: {
					title: "这是一个测试处理器",
					description: "这是一个测试处理器的描述"
				},
				testFn2: {
					title: "这是一个测试处理器(有1参数)",
					description: "这是一个测试处理器的描述",
					params: {
						a: {
							title: "这是一个测试参数",
							description: "这是一个测试参数的描述"
						}
					}
				},
				testFn3: {
					title: "这是一个测试处理器(有2参数)",
					description: "这是一个测试处理器的描述",
					params: {
						min: {
							title: "最小参数值",
							description: "这是一个测试参数的描述"
						},
						max: {
							title: "最大参数值",
							description: "这是一个测试参数的描述"
						}
					}
				}
			}
		}
	})
}
```

:::