---
title: 常量
createTime: 2024/10/02 14:53:08
---

和数组一样, 但是声明的关键词为`const`.

使用场景: 当某个变量永远==不会改变==的时候, 就可以使用常量, 而不是变量.

## 声明语法

```javascript
const NAME = "张三"
```

## 使用

```javascript
console.log(NAME)
```

:::warning
常量==在初始化==时, 必须赋值, 并且一旦初始化, 值==无法在更改==.
:::

## 我该如何选择使用变量还是常量

如果在纠结该如何选择, 那么你可以优先使用`const`.

当这个变量需要改变时, 再改为`let`.

```javascript
const NAME = "某某某"
const AGE = 18
console.log(`${NAME}今年${AGE}岁`)
```

```javascript
let Num = 1
Num++
console.log(Num)

for (let i = 0; i < 10; i++) {
    console.log(i)
}
```

:::note
数组和对象也是可以使用`const`的, 至于数组和对象是什么, 以后会写到.
:::
