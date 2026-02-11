---
title: 变量的方法
createTime: 2026/02/12 01:24:44
---

## 写入变量

`setVar(key: string, value: any, isReturn: boolean = false): any`

写入变量并返回写入的值(可选).

```javascript
import mock from "@erhai_lake/mock-service"

console.log(mock.setVar("name", "Erhai_Lake"))
// 
console.log(mock.setVar("name", "Erhai_Lake", true))
// Erhai_Lake
```

## 批量写入变量

`setVars(vars: Record<string, any>)`

用于前端重新加载后, 为防止变量数据丢失, 可以在前端缓存变量数据, 并在重新加载后批量写入变量.

参数格式, 每一个键值对都是一个变量.

```json
{
	"name": "Erhai_Lake",
	"age": 18
}
```

```javascript
import mock from "@erhai_lake/mock-service"

mock.setVars({
	name: "Erhai_Lake",
	age: 18
})
```

## 读取变量

`getVar(key: string): any`

```javascript
import mock from "@erhai_lake/mock-service"

console.log(mock.getVar("name"))
// Erhai_Lake
```

## 读取所有变量

`getVars(): Record<string, any>`

```javascript
import mock from "@erhai_lake/mock-service"

console.log(mock.getVars())
// { name: "Erhai_Lake", age: 18 }
```

## 清空变量

`clearVars()`

```javascript
import mock from "@erhai_lake/mock-service"

mock.clearVars()
console.log(mock.getVars())
// {}
```
