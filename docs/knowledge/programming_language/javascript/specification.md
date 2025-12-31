---
title: 规范
createTime: 2024/10/02 14:53:08
---

部分摘抄自 [JavaScript 社区规范](https://standardjs.com/rules-zhcn).

**规范仅供参考, JavaScript 并没有所谓的官方规范, 一切规范遵循开发团队的规定**.

`%`代表**需强制执行**.

`&`代表**取决于个人习惯, 非强制执行**.

## 注释时首尾统一加空格 %

```javascript
`//我是注释` ×
`// 我是注释` √

`/*我是注释*/` ×
`/* 我是注释 */` √
```

## 变量命名 &

不使用**拼音**, 意义不明的字母和**意义不明的数字**作为变量名.

遵循驼峰命名法.

1. 小驼峰: 第一个单词首字母小写, 后面每个单词首字母大写. 例如: `userName`.
2. 大驼峰: 每个单词首字母都大写. 例如: `UserName`.

```javascript
let mingzi = "张三" ×
let name = "张三" √
```

## 非匿名箭头函数加参数括号 &

```javascript
×
const test = a => {
  console.log(a)
}

√
const test = (a) => {
  console.log(a)
}
```
