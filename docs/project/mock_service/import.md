---
title: 导入
createTime: 2026/02/04 23:11:05
---

mock service 提供多钟导入方式:

## ESM 导入

::: tip
如果你的项目是 ESM 模块, 则需要在 `package.json` 中添加 `"type": "module"` 字段.

```json package.json
{
	"name": "your-project",
	"type": "module" // [!code ++]
}
```
:::

### 基础使用

```javascript
import mock from "@erhai_lake/mock-service"

console.log(mock.getAllCategory())
```

### 高级使用

```javascript
import {createMockService} from "@erhai_lake/mock-service"

const mock = createMockService({
	// 自定义生成器/处理器/国际化
	categoryRegisters: [],
	processorRegisters: [],
	i18nRegisters: []
})
```

### TypeScript 导入

```typescript
import {createMockService, type mockServiceOptions} from "@erhai_lake/mock-service"

const MOCK_OPTIONS: mockServiceOptions = {
	// 自定义生成器/处理器/国际化
	categoryRegisters: [],
	processorRegisters: [],
	i18nRegisters: []
}
const mock = createMockService(MOCK_OPTIONS)
```

## CommonJS 导入

::: tip
如果你的项目是 CommonJS 模块, 则需要在 `package.json` 中移除 `"type": "module"` 字段.

```json package.json
{
	"name": "your-project",
	"type": "module" // [!code --]
}
```
:::

### 基础使用

```javascript
const {default: mock} = require("@erhai_lake/mock-service")

console.log(mock.getAllCategory())
```

### 高级使用

```javascript
const {createMockService} = require("@erhai_lake/mock-service")

const mock = createMockService({
	// 自定义生成器/处理器/国际化
	categoryRegisters: [],
	processorRegisters: [],
	i18nRegisters: []
})
```