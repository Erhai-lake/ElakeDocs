# 代码块

## 语法高亮

**Shiki**支持多种编程语言

需要做的就是将有效的语言别名附加到代码块的开头

:::tabs
=== 效果

```js
Sum = 0
const test = () => {
    let Sum = 0
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```

=== 示例

````md
```js
Sum = 0
const test = () => {
    let Sum = 0
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```
````
:::

## 标题

:::tabs
=== 效果

```js [测试用js]
Sum = 0
const test = () => {
    let Sum = 0
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```

=== 示例

````md
```js [测试用js]
Sum = 0
const test = () => {
    let Sum = 0
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```
````
:::

### 图标

部分标题会有专属图标

:::tabs
=== 效果

```vue [vue]
```

```shell [npm]
```

```shell [pnpm]
```

=== 示例

````md
```vue [vue]
```

```shell [npm]
```

```shell [pnpm]
```
````
:::

## 行高亮

在`{}`中加入行号即可高亮, 可以使用`-`来表示范围

* 多行: 例如 `{5-8},{3-10},{10-17}`
* 多个单行: 例如 `{4,7,9}`
* 多行与单行:例如 `{4,7-13,16,23-27,40}`

:::tabs
=== 效果

```js {4-6,8,9}
Sum = 0
const test = () => {
    let Sum = 0
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```

=== 示例

````md
```js {4-6,8,9}
Sum = 0
const test = () => {
    let Sum = 0
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```
````
:::

也可以使用`// [!code highlight]`注释实现行高亮

:::tabs
=== 效果

```js {4-6,8,9}
Sum = 0
const test = () => {
    let Sum = 0
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```

=== 示例

````md
```js {4-6,8,9}
Sum = 0
const test = () => {
    let Sum = 0
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```
````
:::

也可以使用`// [!code highlight]`注释实现行高亮

:::tabs
=== 效果

```js
Sum = 0
const test = () => {
    let Sum = 0 // [!code highlight]
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div") // [!code highlight]
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```

=== 示例

````md
```js
Sum = 0
const test = () => {
    let Sum = 0 // [!!code highlight]
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div") // [!!code highlight]
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```
````
:::

## 聚焦

使用`// [!code focus]`注释实现代码聚焦

:::tabs
=== 效果

```js
Sum = 0
const test = () => {
    let Sum = 0 // [!code focus]
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div") // [!code focus]
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```

=== 示例

````md
```js
Sum = 0
const Test = () => {
    let Sum = 0 // [!!code focus]
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    let ResultElement = document.createElement("div") // [!!code focus]
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```
````
:::

## 颜色差异

使用`// [!code --]`和`// [!code ++]`注释实现颜色差异

:::tabs
=== 效果

```js
Sum = 0
const test = () => {
    let Sum = 0  // [!code --]
    for (let i = 1; i <= 100; i++) {
        Sum += i  // [!code ++]
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```

=== 示例

````md
```js
Sum = 0
const test = () => {
    let Sum = 0  // [!!code --]
    for (let i = 1; i <= 100; i++) {
        Sum += i  // [!!code ++]
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```
````
:::

# 高亮错误和警告

使用`// [!code error]`和`// [!code warning]`注释实现高亮错误和警告

:::tabs
=== 效果

```js
Sum = 0
const test = () => {
    let Sum = 0 // [!code error]
    for (let i = 1; i <= 100; i++) {
        Sum += i // [!code warning]
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```

=== 示例

````
```js
Sum = 0
const test = () => {
    let Sum = 0 // [!!code error]
    for (let i = 1; i <= 100; i++) {
        Sum += i // [!!code warning]
    }
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
}
test()
```
````
:::

## 导入代码片段

可以通过下面的语法来从现有文件中导入代码片段

:::tabs
=== 效果

<<< Test/CodeBoxTest.js

=== 示例

```md
<<< Test/CodeBoxTest.js
```
:::

### 行高亮

此语法同时还支持[行高亮](#行高亮)

:::tabs
=== 效果

<<< Test/CodeBoxTest.js{4-6,8,9}

=== 示例

```md
<<< Test/CodeBoxTest.js{4-6,8,9}
```
:::

### 指定语言

如果无法从文件扩展名推测出源语言, 这会很有帮助

```md
<<< Test/CodeBoxTest.js{4-6,8,9 js}
```

### 范围

如果需要显示文件的一部分, 可以使用`#snippet`语法

在文件中使用`// #region snippet`和`// #endregion snippet`注释

```js
Sum = 0
const test = () => {
    let Sum = 0
    for (let i = 1; i <= 100; i++) {
        Sum += i
    }
    // #region snippet
    let ResultElement = document.createElement("div")
    ResultElement.innerHTML = `从1加到100的结果为: ${Sum}`
    document.body.appendChild(ResultElement)
    // #endregion snippet
}
test()
```

:::tabs
=== 效果

<<< Test/CodeBoxTest.js#snippet{1}

=== 示例

```md
<<< Test/CodeBoxTest.js#snippet{1}
```
:::

## 代码组

使用以下语法来创建代码组

```md
::: code-group
:::
```

::::tabs
=== 效果

::: code-group
```shell [npm]
npm init
```

```shell [pnpm]
pnpm init
```

```shell [yarn]
yarn init
```

```shell [bun]
bun init
```

```shell [git]
git init
```
:::

=== 示例

````md
::: code-group
```shell [npm]
npm init
```

```shell [pnpm]
pnpm init
```

```shell [yarn]
yarn init
```

```shell [bun]
bun init
```

```shell [git]
git init
```
:::
````
::::
