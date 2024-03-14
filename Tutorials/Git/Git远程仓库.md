# Git远程仓库

前面我们已经知道了 Git 中存在两种类型的仓库,即本地仓库和远程仓库.

远程仓库我们可以借助一些代码托管平台来实现,毕竟常用的有 GitHub Gitee(码云) GitLab等.

* GitHub
  * `https://github.com`
  * 一个面向开源及私有软件项目的托管平台,只支持 Git 作为唯一的版本库格式进行托管.
* Gitee(码云)
  * `https://gitee.com`
  * 是国内的一个代码托管平台,由于服务器在国内,所以相比 GitHub ,Gitee(码云)速度更快
* GitLab
  * `https://about.gitlab.com`
  * 一个用于仓库管理系统的开源项目,使用 Git 作为代码管理工具,并在此基础上搭建起来的 web 服务,一般用于在企业,学校等内部网络搭建git私服.

GitHub和Gitee(码云)都是把代码放在别人的代码托管平台,而GitLab是自部署的,把代码放在自己服务器

## 配置SSH秘钥

相当于身份验证

1. 生成SSH公钥
   1. `ssh-keygen -t rsa`
   2. 一直回车,如果以存在,会覆盖掉
   3. 生成的公钥会放在当前用户目录下的`.ssh`文件夹,如:
   4. `C:\Users\Administrator\.ssh\id_rsa.pub`
2. 在代码托管平台绑定SSH秘钥
3. 验证是否配置成功
   1. GitHub:`ssh -T git@github.com`
   2. Gitee:`ssh -T git@gitee.com`
   3. 如果需要确认,就输入yes
   4. 返回`Hi xxx! You've successfully...`就说明成功了

## 本地仓库绑定远程仓库

`git remote add 名字 远程仓库地址`

`git remote add origin 远程仓库地址`

远程仓库地址推荐使用SSH的

## 查看本地仓库已绑定的远程仓库

`git remote`

## 将本地仓库同步到远程仓库

`git push [-f] 远程仓库名|origin 本地分支名|master:远端分支名|master`

`git push origin master:master`

如果本地分支名和远端分支名是一样的,可以省略

`git push origin master`

-f参数是强制覆盖

## 克隆仓库

`git clone 远程仓库地址 本地目录名`

如果不写本地目录名,则使用仓库名

## 抓取

将仓库里的更新抓取到本地,不进行合并

`git fetch 远端仓库名 分支名`

`git fetch`

远端仓库名和分支名不指定,则抓取全部分支

## 拉取

将仓库里的更新抓取到本地,自动合并,等同于 fetch+merge

`git pull 远端仓库名 分支名`

`git pull`

远端仓库名和分支名不指定,则抓取全部分支