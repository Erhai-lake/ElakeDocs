---
title: mock_service
createTime: 2026/02/04 22:39:32
---

## 简介

**mock-service**是一个用于生成模拟数据, 支持变量, 模板的 JavaScript 库.

它提供了丰富的生成器, 以及对应的处理器, 可以帮助开发人员快速生成符合要求的模拟数据.

一个可扩展, 可直接调用, 也可通过模板调用的模拟数据生成库.

它真的很简单! 这是他的GitHub地址.

<RepoCard repo="Erhai-lake/mock-service" fullname/>

[npm 包](https://www.npmjs.com/package/@erhai_lake/mock-service)

## 一些使用例子

```javascript
import mock from "@erhai_lake/mock-service"

// 获取所有分类信息
console.log(mock.getAllGeneratorCategoryInfo())
// 根据分类ID和生成器ID获取信息
console.log(mock.getGeneratorInfo("string", "uuid"))

// 获取处理器分类信息
console.log(mock.getAllProcessorsInfo("encodingDecoding"))
// 根据分类ID和生成器ID获取信息
console.log(mock.getProcessorInfo("encodingDecoding", "sha"))

// 生成器使用
const UUIDV4 = mock.generateData("string", "uuid")
console.log(UUIDV4)
// 参数
const UUIDV7 = mock.generateData("string", "uuid", {version: "v7"})
console.log(UUIDV7)

// 处理器使用
console.log(mock.applyGlobalProcessor("sha", UUIDV7))
console.log(mock.applyGlobalProcessor("sha", UUIDV7, "SHA512"))

// 通过模板调用
console.log(mock.templateGenerateData("{{$string.uuid}}"))
console.log(mock.templateGenerateData("{{$string.uuid|sha}}"))
console.log(mock.templateGenerateData('{{$string.uuid(version="v7")|sha("SHA512")}}'))

// 无限嵌套(我不觉得你会套这么多)
console.log(mock.templateGenerateData('{{$string.uuid|concat("😮{{$string.uuid|concat("阿{{$string.uuid}}")}}")|concat("{{$string.uuid|concat("😮{{$string.uuid|concat("阿{{$string.uuid}}")}}")|concat("喵{{$string.uuid}}")}}")}}'))
// 字符串调用
console.log(mock.resolveTemplate("Hello there, your username is {{$string.nanoid}}, and your UUID is {{$string.uuid}}"))
```

更多使用例子请通过左侧的目录导航栏查看.

## 添加到项目

::: caution
目前项目还在早期版本中.

可能有不少问题, 更新也比较缓慢(学生), 欢迎反馈.
:::

### npm 导入

::: code-tabs
@tab:active npm

```shell
npm install @erhai_lake/mock-service
```

@tab yarn

```shell
yarn add @erhai_lake/mock-service
```

@tab pnpm

```shell
pnpm add @erhai_lake/mock-service
```

:::

### 手动导入

访问 [GitHub Release](https://github.com/Erhai-lake/mock-service/releases) 页面.

下载最新或指定版本的 `erhai_lake-mock-service-x.x.x.tgz` 文件到项目目录.

输入以下命令导入:

::: code-tabs
@tab:active npm

```shell
npm install ./erhai_lake-mock-service-x.x.x.tgz
```

@tab yarn

```shell
yarn add ./erhai_lake-mock-service-x.x.x.tgz
```

@tab pnpm

```shell
pnpm add ./erhai_lake-mock-service-x.x.x.tgz
```

:::