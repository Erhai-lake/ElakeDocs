# 洱海文档

## 文档仓库地址

[GitHub](https://github.com/Erhai-lake/ElakeDocs)

[Gitee](https://gitee.com/erhai-lake/ElakeDocs)

## 开始

### 克隆仓库

```shell
git clone git@github.com:Erhai-lake/ElakeDocs.git

git clone git@gitee.com:erhai-lake/ElakeDocs.git
```

或者

```shell
git clone https://github.com/Erhai-lake/ElakeDocs.git

git clone https://gitee.com/erhai-lake/ElakeDocs.git
```

### 安装 PNPM

```shell
npm install pnpm -g
```

### 安装依赖

```shell
pnpm install
```

### 运行

```shell
pnpm run docs:dev
```

访问 [http://localhost:8080](http://localhost:8080)

## 命令

* `PictureSHA1`: 将编者随便命名的图片文件名修改为SHA1值, 统一规范防止重名.
* `docs:dev`: 本地调试, 启动本地调试服务器`localhost:8080`.
* `docs:build`: 构建静态页面.
* `docs:dev-clean`: 清理缓存并重新启动本地调试服务器.
* `docs:preview`: 预览构建后的静态页面.
* `vp-update`: 更新 VuePress 依赖.

```shell
git checkout dev
git rebase master
git checkout master
git merge dev
git push github master
```

## 主要分支

* `dev`: 开发分支, 用于存放最新的文档.
* `master`: 主分支(构建分支).
* `production`: 存放构建产物的分支.

> [!WARNING]
> 请不要直接修改`master`和`production`分支!