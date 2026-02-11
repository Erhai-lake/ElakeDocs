---
title: 上下文
createTime: 2026/02/12 01:42:10
---

上下文可以让你在自定义生成器或处理器中, 调用到mock service的一些方法.

## 上下文列表

目前可以使用的方法列表:

1. `getVar` - 获取变量
2. `setVar` - 设置变量
3. `setVars` - 批量设置变量
4. `clearVar` - 清空变量

## 使用上下文

以生成器为例:

```typescript
CATEGORY.generators.registerGenerator({
	id: "testGetVar",
	title: "获取变量",
	description: "根据变量键获取变量值",
	params: [
		{
			id: "key",
			title: "变量键",
			description: "要获取的变量键",
			type: "string",
			default: ""
		}
	],
	processors: ["string", "encodingDecoding"],
	generate(key: string = "", context: any): string {
		if (!key) return ""
		return context.getVar(key)
	}
})
```

如果你没有参数, 可以用 `{}`. 像这样:

```typescript
generate({}, context: any): string {
	return context.getVar("name")
}
```