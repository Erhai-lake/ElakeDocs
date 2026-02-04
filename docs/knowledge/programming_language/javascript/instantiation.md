---
title: 实例化
createTime: 2024/10/02 14:53:08
---

实例化是指创建一个对象的过程, 这个对象是某个特定类的实例.

类可以通过构造函数或者类声明来定义.

## 构造函数

```javascript
// 构造函数定义
function Person(name, age) {
	this.name = name
	this.age = age
}

// 实例化对象
let test = new Person("张三", 25)
```

## 类声明

```javascript
// 类声明
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}

// 实例化对象
const test = new Person("李四", 30)
```

理解即可.
