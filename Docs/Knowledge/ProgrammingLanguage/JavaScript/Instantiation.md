# 实例化

实例化是指创建一个对象的过程, 这个对象是某个特定类的实例

类可以通过构造函数或者类声明来定义

## 构造函数

```js
// 构造函数定义
function Person(Name, Age) {
	this.Name = Name
	this.Age = Age
}

// 实例化对象
let Fun = new Person("张三", 25);
```

## 类声明

```js
// 类声明
class Person {
  constructor(Name Age) {
    this.Name = Name;
    this.Age = Age;
  }
}

// 实例化对象
const Fun = new Person("李四", 30);
```

理解即可
