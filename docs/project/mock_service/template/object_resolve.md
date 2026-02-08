---
title: 对象解析
createTime: 2026/02/08 23:56:22
---

`objectResolve(input: any, currentDepth = 10): any`

递归解析对象或数组中的的所有模板, 不管是`key`还是`value`, 都进行解析.

```javascript
import mock from "@erhai_lake/mock-service"

console.log(mock.resolveDeep({
	"a": "{{$string.uuid}}",
	"b": {
		"a": "{{$string.uuid}}",
		"b": {
			"a": "{{$string.uuid}}",
			"b": {
				"a": "{{$string.uuid}}",
				"b": {},
				"{{$string.uuid}}": "a"
			},
			"{{$string.uuid}}": "a"
		},
		"{{$string.uuid}}": "a"
	},
	"{{$string.uuid}}": "a"
}, 1))
```