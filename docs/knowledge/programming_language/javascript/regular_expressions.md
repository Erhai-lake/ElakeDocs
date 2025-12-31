---
title: 正则表达式
createTime: 2024/10/02 14:53:08
---

不了解正则表达式的, 可以看[正则表达式的文档](../../tools/regular_expression/index).

这里只讲解在JS中, 怎么使用正则表达式.

## 定义正则表达式

```javascript
const 变量名 = /表达式/
```

## 判断是否有符合规则的字符串

```javascript
变量名.test("通过表达式检测的字符串")
```

用来查看正则表达式与指定的字符串是否匹配.

如果匹配成功, 返回`true`, 否则返回`false`.

```javascript
const Test = /Hello/
console.log(Test.test("Hello World"))
// true
```

## 检索符合规则的字符串

```javascript
变量名.exec("通过表达式检测的字符串")
```

在一个指定字符串中执行一个搜索匹配.

如果匹配成功, 返回一个数组, 否则返回`null`.

```javascript
const Test = /Hello/
console.log(Test.exec("Kill World, Hello World, Hello Erhai_lake, Hello Qi_Month"))
```

返回: `['Hello', index: 12, input: 'Kill World, Hello World, Hello Erhai_lake, Hello Qi_Month', groups: undefined]`.

## 替换符合规则的字符串

```javascript
字符串.replace(/正则表达式/, "要替换的文本")
```

替换匹配到的字符串.

```javascript
const Test = "这里面是我要匹配的文本"
console.log(Test.replace(/是/, "不是"))
// 这里面不是我要匹配的文本
```

