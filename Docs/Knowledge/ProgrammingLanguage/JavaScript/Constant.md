# 常量

和数组一样, 但是声明的关键词为`const`

使用场景:当某个变量永远**不会改变**的时候, 就可以使用常量, 而不是变量

常量的命名规范可以与变量一样

## 声明语法

```js
const Name = '张三'
```

## 使用

```js
console.log(Name)
```

:::warning
常量**在初始化**时, 必须赋值, 并且一旦初始化, 值**无法在更改**
:::

## 我该如何选择使用变量还是常量

如果在纠结该如何选择, 那么你可以优先使用`const`

当这个变量需要改变时, 再改为`let`

```js
const Name = '某某某'
const Age = 18
console.log(`${Name}今年${Age}岁`)
```

```js
let Num = 1
Num++
console.log(Num)

for (let i = 0; i < 10; i++) {
    console.log(i)
}
```

:::note
数组和对象也是可以使用`const`的, 至于数组和对象是什么, 以后会写到
:::
