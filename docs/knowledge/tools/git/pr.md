---
title: 提交或同意 PR
createTime: 2025/08/04 02:22:34
---

> 为了写这篇文档, 我快精神分裂了()

PR全称**Pull Request**, 用于为对方的代码提交自己的贡献, 例如修复BUG, 优化性能, 新功能等.

这篇文章将使用两个仓库账号进行演示, 方便演示从提交到同意.

:::warning
提交PR前, 请检查是否已经有PR或者Issues了, 尽量不要重复提交.
:::

## GitHub

### (对方)初始化仓库

初始化一个新的仓库, 作为教程演示, 这里为了方便, 就直接在GitHub里新建了.

![008a210b19d2b6a9840f1d503ef48d6d50ed357c](assets/008a210b19d2b6a9840f1d503ef48d6d50ed357c.png)

![979e4f21c2a7d5ba338647aca424def0ccc090b9](assets/979e4f21c2a7d5ba338647aca424def0ccc090b9.png)

![e5eba5b9355cf464632c2f78d41374b9c39fe6bd](assets/e5eba5b9355cf464632c2f78d41374b9c39fe6bd.png)

### (己方)复刻仓库

从这一步开始, 就正式进入提交PR的步骤了.

![ef32a0ef1c5b435331d716b88311592f88220d45](assets/ef32a0ef1c5b435331d716b88311592f88220d45.png)

![88616700980b8a814dca348617e324a71814ed21](assets/88616700980b8a814dca348617e324a71814ed21.png)

复刻仓库后, 会自动跳转到自己的仓库.

### (己方)克隆仓库

复制复刻到自己仓库的 SSH 链接.

在 Git 中输入

```shell
git clone git@github.com:Erhai-lake/Test.git
```

![8a2e91ecd5f6a6e4e94fa93dcea14dbd645bd1f0](assets/8a2e91ecd5f6a6e4e94fa93dcea14dbd645bd1f0.png)

### (己方)新建并切换分支

禁止直接在主分支更改内容, 分支的命名尽量简洁, 并与解决的问题相关.

在 Git 中输入

```shell
git checkout -b ModifyREADME
```

![314079c28e6eec3a4a450a49767ebc0856be89ba](assets/314079c28e6eec3a4a450a49767ebc0856be89ba.png)

### (己方)编辑代码

这里修改README文件, 并新建文本文件作为例子.

![0d246043a10ee9c8df59febf5f5d07c57a58be91](assets/0d246043a10ee9c8df59febf5f5d07c57a58be91.png)

每个人都会有自己的代码风格, 到底是用制表符(Tab)还是空格(Space)?

每行是80字符还是120字符?

这种圣战不应该在PR中出现, PR应该遵循项目已有的风格. 例如: 如果原来使用的驼峰命名变量, PR中就应该使用驼峰命名, 否则有80%的几率会被驳回.

### (己方)提交并同步代码到仓库

将修改完的代码同步到 GitHub 仓库.

在 Git 中输入.

```shell
git add .
```

在 Git 中输入.

```shell
git commit -m "修改了README文件, 并新建了文本文件"
```

在 Git 中输入.

```shell
git push --set-upstream origin ModifyREADME
```

![8b38a6c26f5e26fcf30fc1e05ca2ca3ed93d906a](assets/8b38a6c26f5e26fcf30fc1e05ca2ca3ed93d906a.png)

### (己方)提交PR

回到线上仓库.

![e13a02d7a04a18a87f2dff62418a99eaab3def68](assets/e13a02d7a04a18a87f2dff62418a99eaab3def68.png)

![fa834742ce5c8dee0cd93d2fcb7ae08d7a943031](assets/fa834742ce5c8dee0cd93d2fcb7ae08d7a943031.png)

![bcaa22f989841822e1d73dc079416cf8fe5fc8b6](assets/bcaa22f989841822e1d73dc079416cf8fe5fc8b6.png)

如果对方仓库有说明PR的描述格式, 请优先按照格式书写描述!

可以看见你提交的PR已经躺在这里等待处理了(处不处理看对方心情(不是)).

![1b8d1d139913ec409acf49b9eb08077e4bda7c95](assets/1b8d1d139913ec409acf49b9eb08077e4bda7c95.png)

点进去可以看见详细信息.

![51d96cbc3d7f7ad5688f62171fc709b636ffac5e](assets/51d96cbc3d7f7ad5688f62171fc709b636ffac5e.png)

如果PR改动很大, 你想边改边得到别人及时的反馈, 可以先创建PR后, 在标题上加上**[WIP]**是Work In Progress的缩写, 表示工作还未完成. 但尽量不要把未完成的PR提交到别人的项目上(可能会引起别人反感), 通常**WIP**的PR都是自己的项目里面使用就行了.

### (对方)驳回PR

![9e57d6456b2c05a9208f1ebb4801f3e5cf970145](assets/9e57d6456b2c05a9208f1ebb4801f3e5cf970145.png)

如果这里点了同意, 那就合并了, 同步一下本地仓库就完事了.

如果不满意, 或者有其他需求, 请说明告知.

![0f89070c9686cca532b21d8065a4be3c4eac37c6](assets/0f89070c9686cca532b21d8065a4be3c4eac37c6.png)

### (己方)按照对方的要求修改代码

如果你收到了对方发的消息, 例如:

![a564f94b5230d4af5df2964e7ceb4e5df3fff00b](assets/a564f94b5230d4af5df2964e7ceb4e5df3fff00b.png)

你可以在心里暗骂一声: `BYD, 要求还挺多`, 然后根据对方的想法修改代码, 或者在下方发送评论.

![c92c02e32e7037d39f12e7b9559090e4974400a7](assets/c92c02e32e7037d39f12e7b9559090e4974400a7.png)

被迫修改了代码, 然后提交并同步至仓库.

同步后会自动同步到PR.

![3c0ba74b39a8e635a13c49f0bb7e2da665343d58](assets/3c0ba74b39a8e635a13c49f0bb7e2da665343d58.png)

在正常的PR中, 可能要改好几次, 请放平心态, 一切都是为了开源精神.

### (对方)同意PR

![15fc4bb12ad1e12403dc0cb8c7c0fe4d4a503155](assets/15fc4bb12ad1e12403dc0cb8c7c0fe4d4a503155.png)

![5f413c3b4c2a7bc5de19e244e1be6e317b2fdfc3](assets/5f413c3b4c2a7bc5de19e244e1be6e317b2fdfc3.png)

### (双方)PR状态

在对方同意合并后, PR界面会自动关闭, 并显示已合并.

![55c3a453c62ba01882b48005233d3468b9cb246c](assets/55c3a453c62ba01882b48005233d3468b9cb246c.png)

在项目主页, 会显示贡献者.

![db6f0cca1d3fa9bf7f5236e5c6f44c3540685713](assets/db6f0cca1d3fa9bf7f5236e5c6f44c3540685713.png)

### (对方)同步本地仓库

将远程仓库同步到本地仓库.

在 Git 中输入.

```shell
git pull
```

![a02d1355cf6149436b2ec09693bffcc8598bd795](assets/a02d1355cf6149436b2ec09693bffcc8598bd795.png)

### (己方)删除复刻的仓库

这一步不是必须的, 只是保持一个规范的开源协作习惯, 减少意外提交错误项目分支的情况发生.

来到对方项目主页, 找到之前已经合并的提交请求(在关闭的PR列表中), 点击 Delete branch.

![c38b3a404b60dbdc08f698b89bb0ec2b8f538478](assets/c38b3a404b60dbdc08f698b89bb0ec2b8f538478.png)

![21e2a4c657888dc92466838d574e9f8b22d7d51c](assets/21e2a4c657888dc92466838d574e9f8b22d7d51c.png)

删除本地分支.

在 Git 中输入.

```shell
git branch -d ModifyREADME
```

下次交PR前, 先更新本地仓库, 在重复以上步骤.

在 Git 中输入.

```shell
git pull
```

## Gitee

### (对方)初始化仓库

由于懒得在注册一个Gitee账号了, 所以这里偷柒月的来耍耍.

初始化一个新的仓库, 作为教程演示, 这里为了方便, 就直接在Gitee里新建了.

![4f6e2ab144f5d508e57ac2218d19f6e23795fe3e](assets/4f6e2ab144f5d508e57ac2218d19f6e23795fe3e.png)

![0b7db9e6f9b5b2b70eb728aabc4d70dd04680b2e](assets/0b7db9e6f9b5b2b70eb728aabc4d70dd04680b2e.png)

![df4edefbcd42c5aafc1c8e53fe9fb65614fa7e51](assets/df4edefbcd42c5aafc1c8e53fe9fb65614fa7e51.png)

### (己方)复刻仓库

从这一步开始, 就正式进入提交PR的步骤了.

![c7efcfaf69b3c84b5628473deeb0888d108a452a](assets/c7efcfaf69b3c84b5628473deeb0888d108a452a.png)

复刻仓库后, 会自动跳转到自己的仓库.

### (己方)克隆仓库

复制复刻到自己仓库的SSH链接.

在 Git 中输入.

```shell
git clone git@gitee.com:erhai-lake/test.git
```

![b7b051c084ac0c1e67efffd2cd81c9d9dbf37a4c](assets/b7b051c084ac0c1e67efffd2cd81c9d9dbf37a4c.png)

### (己方)新建并切换分支

禁止直接在主分支更改内容, 分支的命名尽量简洁, 并与解决的问题相关.

在 Git 中输入.

```shell
git checkout -b ModifyREADME
```

![e9acef5c40b387a01d4eec9e3ad377dde3fd1594](assets/e9acef5c40b387a01d4eec9e3ad377dde3fd1594.png)

### (己方)编辑代码

这里修改README文件, 并删除`README.en.md`.

![cada5c8c5cbc1a1cd50d503df9edabfd70d61b21](assets/cada5c8c5cbc1a1cd50d503df9edabfd70d61b21.png)

每个人都会有自己的代码风格, 到底是用制表符(Tab)还是空格(Space)?

每行是80字符还是120字符?

这种圣战不应该在PR中出现, PR应该遵循项目已有的风格. 例如: 如果原来使用的驼峰命名变量, PR中就应该使用驼峰命名, 否则有80%的几率会被驳回.

### (己方)提交并同步代码到仓库

将修改完的代码同步到Gitee仓库.

在 Git 中输入.

```shell
git add .
```

在 Git 中输入.

```shell
git commit -m "修改了README文件, 并删除了README.en文件"
```

在 Git 中输入.

```shell
git push --set-upstream origin ModifyREADME
```

![a5c1f6d2e7270ff14517f4f5099669bcc7500bf9](assets/a5c1f6d2e7270ff14517f4f5099669bcc7500bf9.png)

### (己方)提交PR

回到线上仓库.

![3bb9475711bb3d547e96cfc91f162714de8afe9e](assets/3bb9475711bb3d547e96cfc91f162714de8afe9e.png)

![9b126dc68db8f238baa662a1ebdf8e4925d9fdaa](assets/9b126dc68db8f238baa662a1ebdf8e4925d9fdaa.png)

![7bbb203719c992e845bbbf8f21b1ba7fbcd8e751](assets/7bbb203719c992e845bbbf8f21b1ba7fbcd8e751.png)

如果对方仓库有说明PR的描述格式, 请优先按照格式书写描述!

可以看见你提交的PR已经躺在这里等待处理了(处不处理看对方心情(不是)).

![7c7a17534a2ddc0e56eccbc13c488c22daf3dc20](assets/7c7a17534a2ddc0e56eccbc13c488c22daf3dc20.png)

点进去可以看见详细信息.

![6c8a62eff7826e74e2e053662a603091bf02666b](assets/6c8a62eff7826e74e2e053662a603091bf02666b.png)

如果PR改动很大, 你想边改边得到别人及时的反馈, 可以先创建PR后, 在标题上加上**[WIP]**是Work In Progress的缩写, 表示工作还未完成. 但尽量不要把未完成的PR提交到别人的项目上(可能会引起别人反感), 通常**WIP**的PR都是自己的项目里面使用就行了.

### (对方)驳回PR

![e99f82e63739dfc03f7c07655c91bbc1e28bafb3](assets/e99f82e63739dfc03f7c07655c91bbc1e28bafb3.png)

如果这里通过了两个测试, 并点击了合并, 那就合并了, 同步一下本地仓库就完事了.

如果不满意, 或者有其他需求, 请说明告知.

![402b591bddf761e03ad51ec142775669a1e9ade2](assets/402b591bddf761e03ad51ec142775669a1e9ade2.png)

### (己方)按照对方的要求修改代码

如果你收到了对方发的消息, 例如:

![5f60a79eab5ba39d08e612bca4e66cd62787e063](assets/5f60a79eab5ba39d08e612bca4e66cd62787e063.png)

你可以在心里暗骂一声: `BYD, 要求还挺多`, 然后根据对方的想法修改代码, 或者在下方发送评论.

![4e1b73d37de17a89b104234a0951aa40764f9450](assets/4e1b73d37de17a89b104234a0951aa40764f9450.png)

被迫修改了代码, 然后提交并同步至仓库.

同步后会自动同步到PR.

![108e7c2ad61a06c65e575643f3029e2388f48012](assets/108e7c2ad61a06c65e575643f3029e2388f48012.png)

在正常的PR中, 可能要改好几次, 请放平心态, 一切都是为了开源精神.

### (对方)同意PR

![ba14f0cae3c23fd8d8dadfdd198ceca1bb91b744](assets/ba14f0cae3c23fd8d8dadfdd198ceca1bb91b744.png)

![b892acaf4fb8b7d1a69d716d1051777ffa80241c](assets/b892acaf4fb8b7d1a69d716d1051777ffa80241c.png)

### (双方)PR状态

在对方同意合并后, PR界面会自动关闭, 并显示已合并.

![8e9fbf6db5a36a68fbb0921e745613aeca4205be](assets/8e9fbf6db5a36a68fbb0921e745613aeca4205be.png)

在项目主页, 会显示贡献者.

![a60beab3b96f49c33987e7e92204a35790b399d7](assets/a60beab3b96f49c33987e7e92204a35790b399d7.png)

### (对方)同步本地仓库

将远程仓库同步到本地仓库.

在Git中输入.

```shell
git pull
```

![a02d1355cf6149436b2ec09693bffcc8598bd795](assets/a02d1355cf6149436b2ec09693bffcc8598bd795.png)

### (己方)删除复刻的仓库

这一步不是必须的, 只是保持一个规范的开源协作习惯, 减少意外提交错误项目分支的情况发生.

来到对方项目主页, 找到之前已经合并的提交请求(在关闭的PR列表中), 点击 Delete branch.

![ef3ef958f745cb987851d2c76c63c4de9672d017](assets/ef3ef958f745cb987851d2c76c63c4de9672d017.png)

![a91d10efa25dd795561cc6a32a672ef4ec7b2512](assets/a91d10efa25dd795561cc6a32a672ef4ec7b2512.png)

![5c71dc43f1a35824f3aef91fe07a8b8d6c7f6943](assets/5c71dc43f1a35824f3aef91fe07a8b8d6c7f6943.png)

删除本地分支.

在Git中输入.

```shell
git branch -d ModifyREADME
```

下次交PR前, 先更新本地仓库, 在重复以上步骤.

在Git中输入.
```shell
git pull
```
