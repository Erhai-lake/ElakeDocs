---
title: 远程仓库
createTime: 2025/08/04 02:22:34
---

前面我们已经知道了Git中存在两种类型的仓库, 即本地仓库和远程仓库.

远程仓库我们可以借助一些代码托管平台来实现, 毕竟常用的有GitHub, Gitee, GitLab等.

* [GitHub](https://github.com)
   * `https://github.com`
   * 一个面向开源及私有软件项目的托管平台, 只支持Git作为唯一的版本库格式进行托管.
* [Gitee](https://gitee.com)
   * `https://gitee.com`
   * 是国内的一个代码托管平台, 由于服务器在国内, 所以相比GitHub, Gitee(码云)速度更快.
* [GitLab](https://about.gitlab.com)
   * `https://about.gitlab.com`
   * 一个用于仓库管理系统的开源项目, 使用Git作为代码管理工具, 并在此基础上搭建起来的web服务, 一般用于在企业, 学校等内部网络搭建git私服.

GitHub和Gitee(码云)都是把代码放在别人的代码托管平台, 而GitLab是自部署的, 把代码放在自己服务器.

## 配置 SSH 秘钥

相当于身份验证.

1. 生成 SSH 公钥
   1. ```shell
      ssh-keygen -t rsa
      ```
   2. 一直回车, 如果以存在, 会覆盖掉.
   3. 生成的公钥会放在当前用户目录下的`.ssh`文件夹, 如:
   4. `C:\Users\Administrator\.ssh\id_rsa.pub`
2. 在代码托管平台绑定SSH秘钥(下一步有详细步骤).
3. 验证是否配置成功.
   1. GitHub:
      ```shell
      ssh -T git@github.com
      ```
   2. Gitee:
      ```shell
      ssh -T git@gitee.com
      ```
   3. 如果需要确认, 就输入yes.
   4. 返回`Hi xxx! You've successfully...`就说明成功了.

### 配置远程仓库平台的 SSH 秘钥

#### GitHub

可以直接点击这里的[网址](https://github.com/settings/keys), 或者在设置里找到`SSH and GPG keys`.

![9da62074107a2496bc1bbc071ec8add723ebf1ea](assets/9da62074107a2496bc1bbc071ec8add723ebf1ea.png)

![75e10f2efafc566c892f340afd1aeb4f7129ad47](assets/75e10f2efafc566c892f340afd1aeb4f7129ad47.png)

秘钥就是直接把`id_rsa.pub`文件里面的内容粘贴进去.

#### Gitee

可以直接点击这里的[网址](https://gitee.com/profile/sshkeys), 或者在设置里找到`SSH 公钥`.

![b980fcda2eb12f25438ed8de56465fb55e48c510](assets/b980fcda2eb12f25438ed8de56465fb55e48c510.png)

SSH Key就是直接把`id_rsa.pub`文件里面的内容粘贴进去.

## 本地仓库绑定远程仓库

```shell
git remote add 名字 远程仓库地址
```

例如:

```shell
git remote add 洱海文档GitHub https://github.com/Erhai-lake/ElakeDocs.git

git remote add 洱海文档GitHub git@github.com:Erhai-lake/ElakeDocs.git
```

远程仓库地址推荐使用SSH的, 也就是上面例子中的第二个.

## 查看本地仓库已绑定的远程仓库

```shell
git remote
```

## 将本地仓库同步到远程仓库

```shell
git push [-f] 远程仓库名|origin 本地分支名|master:远端分支名|master
```

例如:
```shell
git push origin master:master
```

如果本地分支名和远端分支名是一样的, 可以省略, 例如:

```shell
git push origin master
```

`-f`参数是强制覆盖.

## 克隆仓库

```shell
git clone 远程仓库地址 本地目录名
```

如果不写本地目录名, 则使用仓库名.

如果填写`.`, 就在当前目录下.

## 抓取

将仓库里的更新抓取到本地, 不进行合并.

```shell
git fetch 远端仓库名 分支名
```

```shell
git fetch
```

远端仓库名和分支名不指定, 则抓取全部分支.

## 拉取

将仓库里的更新抓取到本地, 自动合并, 等同于`fetch+merge`.

```shell
git pull 远端仓库名 分支名
```

```shell
git pull
```

远端仓库名和分支名不指定, 则抓取全部分支.
