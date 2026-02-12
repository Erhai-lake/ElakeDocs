---
title: 自定义表达式
createTime: 2026/02/12 23:37:34
---

`customExpression(expression: string): any`

可以用于应用层输入js字符串, 返回执行结果.

## 示例

```javascript
import mock from "@erhai_lake/mock-service"

console.log(mock.customExpression("return 1+4"))

// 单行且且不是变量声明, 没有return, 会自动添加return
console.log(mock.customExpression("1+4"))

// 多行+上下文使用
const CODE = `
    context.setVar("BASE_PRICE", 300)
    const TAX = 1
    const TOTAL = context.getVar("BASE_PRICE") * (1 + TAX)
    context.setVar("BASE_PRICE", TOTAL)
    return context.getVar("BASE_PRICE")
`
console.log(mock.customExpression(CODE))
```

## 上下文

自定义表达式中可以使用`context`对象, 详细方法列表请参考: [上下文列表](../custom/context#上下文列表)
