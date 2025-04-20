# 洱海文档

## 文档仓库地址

[GitHub](//github.com/Erhai-lake/elake-docs)

[Gitee](//gitee.com/erhai-lake/elake-docs)

## 开始

### 克隆仓库

```shell
git clone git@github.com:Erhai-lake/ElakeDocs.git
```

或者

```shell
git clone https://github.com/Erhai-lake/ElakeDocs.git
```
### 设置 NPM 镜像源(可选)

使用腾讯源

```shell
npm config set registry https://mirrors.cloud.tencent.com/npm/
```

### 安装 PNPM

```shell
npm install pnpm -g
```

### 设置 PNPM 镜像源(可选)

使用腾讯源

```shell
pnpm config set registry https://mirrors.cloud.tencent.com/npm/
```

### 安装依赖

```shell
pnpm i
```

### 运行

```shell
pnpm run dev
```

访问 [//localhost:3000](//localhost:3000)

## 命令

* `GitLog`: 手动刷新文档的提交记录, 用于更新贡献者和更新日志
* `PictureSHA1`: 将编者随便命名的图片文件名修改为SHA1值, 统一规范防止重名
* `dev`: 本地调试, 启动本地调试服务器`localhost:3000`
* `build`: 构建静态页面
* `production`: 浏览构建后的静态页面

> 如果你使用VS Code请使用运行和调试功能里的启动项, 我已经配置好了`launch.json`

```shell
git checkout stable
git merge master
git push
```

## 主要分支

* `master`: 主分支, 用于存放最新的文档
* `production`: 构建分支, 当`master`更新到一定体积且稳定时, 将`master`分支合并到`production`分支, 构建出静态页面, 自动构建并部署到`GitHub Pages`供大家访问

> [!WARNING]
> 请不要直接修改`production`分支!
