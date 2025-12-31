---
title: 内置对象 Math
createTime: 2024/10/02 14:53:08
---

==Math== 对象是JS提供的一个数学对象.

作用是提供了一系列数学运算的方法.

例如:

* `random`: 生成0~1之间的随机数(包括0不包括1).
* `ceil`: 向上取整.
* `floor`: 向下取整.
* `max`: 找最大值.
* `min`: 找最小值.
* `pow`: 幂运算.
* `abs`: 绝对值.

如果想了解更多方法, 可以访问[官方文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math).

## ceil

向上取整.

```javascript
console.log(Math.ceil(1.1))
console.log(Math.ceil(1.5))
console.log(Math.ceil(1.9))

// 2
```

## floor

向下取整.

```javascript
console.log(Math.floor(1.1))
console.log(Math.floor(1.5))
console.log(Math.floor(1.9))

// 1
```

## max

找最大值.

```javascript
console.log(Math.max(1, 5, 9))
// 9
```

## min

找最小值.

```javascript
console.log(Math.min(1, 5, 9))
// 1
```

## pow

幂运算.

```javascript
console.log(Math.pow(7, 3))
// 343
```

## abs

绝对值.

```javascript
console.log(Math.abs(5))
console.log(Math.abs(-5))
// 5
```
