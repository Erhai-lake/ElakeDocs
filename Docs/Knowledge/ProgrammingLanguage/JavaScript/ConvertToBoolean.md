# 转换为布尔型

`Boolean(内容)`

**`""`, `0`, `undefined`, `null`, `false`, `NaN`转换为布尔值都是false, 其余则为true**

```js
console.log(Boolean("字符串"))
// true

console.log(Boolean(""))
// false

console.log(Boolean(0))
// false

console.log(Boolean(90))
// true

console.log(Boolean(-1))
// true

console.log(Boolean(undefined))
// false

console.log(Boolean(null))
// false

console.log(Boolean(NaN))
// false
```
