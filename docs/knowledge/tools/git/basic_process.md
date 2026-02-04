---
title: 常见指令
createTime: 2025/08/04 02:22:34
---

Git工作目录下对于文件的修改(增加, 删除, 更新)会存在几个状态, 这些修改的状态会随着我们执行Git的命令而发生变化.

![50f64ae063c6160747c9c04044b348615d5f6bae](assets/50f64ae063c6160747c9c04044b348615d5f6bae.png)

## 初始化 Git 仓库

```shell
git init
```

## 加入暂存区

将工作区的文件, 加入暂存区.

```shell
git add 单个文件名|通配符
```

指加入所有文件

```shell
git add .
```

## 提交本地仓库

将暂存区的文件提交到本地仓库的当前分支.

```shell
git commit -m "注释"
```

注释是必填的.

## 同步远程仓库

将本地仓库同步到远程仓库.

```shell
git push
```

## 其他指令

### 查看文件的修改状态

查看文件的修改状态(暂存区, 工作区).

```shell
git status
```

### 查看提交日志

查看提交日志信息.

```shell
git log [参数]
```

## 参数

* --all 显示所有分支.
* --pretty=oneline 将提交信息显示为一行.
* --abbrev-commit 使输出的commit更简短.
* --graph 以图的形式输出.

### 版本回退

版本切换.

将当前分支切换到指定的commitID.

```shell
git reset --hard commitID
```

commitID 可以用`git log`查看.

### 查看版本回退日志

查看版本回退日志.

```shell
git reflog
```

### 添加文件到忽略列表

如果你不希望某些文件被git管理.

在工作目录创建一个文件`.gitignore`(文件名固定).

然后在里面写上要忽略的文件名/目录, 支持通配符, 一行一个.
