---
title: 在VS Code使用Git
createTime: 2025/08/04 02:22:34
---

## 在VS Code配置Git

安装好 VS Code 和 Git 后, VS Code会自动识别Git的位置, 如果没有自动识别到, 则需要手动配置.

![b38460634ba1da9b8124ef4e2cfae3c293b66e0e](assets/b38460634ba1da9b8124ef4e2cfae3c293b66e0e.png)

点击后会打开一个`settings.json`的文件, 并且会自动写入配置.

![e46cd214fddec58703ed0a3b56344a1811cc5140](assets/e46cd214fddec58703ed0a3b56344a1811cc5140.png)

如果没有请自行输入:

```json
{
	"git.path": "Git路径, 例如:C:/Program Files/Git/cmd/git.exe"
}
```

## 克隆仓库

点击克隆.

![106d0fa1d5d7989a0ceeaba1bcdc3392a7e17d53](assets/106d0fa1d5d7989a0ceeaba1bcdc3392a7e17d53.png)

在弹窗输入或选择远端仓库.

![9279877deef39a9262880dea1dd2bb71f9efd0b9](assets/9279877deef39a9262880dea1dd2bb71f9efd0b9.png)

选择保存的位置(不需要新建文件夹).

![e43c1f0b65e91af6f6fc18ce3eddc40cecffc1f2](assets/e43c1f0b65e91af6f6fc18ce3eddc40cecffc1f2.png)

## 其他功能的使用方法

在VS Code的Git下拉列表中, 是VS Code现支持的所有功能(遇到BUG还请用命令行).

不知道有没有必要写, 需要的可以告知一声, 要的人多的话, 应该会更新.
