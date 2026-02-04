---
title: Java 项目的代码结构
createTime: 2025/12/27 01:39:49
---

```mermaid
flowchart TD; A["project(工程)"] --> B["moduke(模块)"] --> C["package(包)"] --> D["class(类)"]
```

我来举个例子, 比如说我要写个B站.

* B站系统(project).
    * 首页(moduke).
        * 用户界面(package).
            * 主页(class).
            * 视频播放器(class).
            * 搜索栏(class).
        * 数据服务(package).
            * 视频服务(class).
            * 用户服务(class).
    * 个人主页(moduke).
        * 用户界面(package).
            * 个人资料页面(class).
            * 关注列表(class).
        * 数据服务(package).
            * 简介服务(class).
            * 会计服务(class).
    * 推荐(moduke).
        * 个性化推荐(package).
            * 推荐算法(class).
            * 内容筛选器(class).
        * 用户界面(package).
            * 推荐列表(class).
            * 建议栏(class).

差不多就是这个样子, 将不同的功能分开.

## 在 IDEA 创建 project

![f95d5197e55a96e174f49d5e7afb9488f57c68e1](assets/f95d5197e55a96e174f49d5e7afb9488f57c68e1.png)

![3a1505191e18b75ca8f1adfc32b06f70cdd61085](assets/3a1505191e18b75ca8f1adfc32b06f70cdd61085.png)

![cccfc9f0d8573d07fddba87e4f5155a94dcd5553](assets/cccfc9f0d8573d07fddba87e4f5155a94dcd5553.png)

这样一个全新的项目就诞生了.

## 在 IDEA 创建 moduke

![2835eff5a06179d1a3348b577e0c38498f36886b](assets/2835eff5a06179d1a3348b577e0c38498f36886b.png)

![d6d42a3c4712e62981bdb79a079c340020366135](assets/d6d42a3c4712e62981bdb79a079c340020366135.png)

![d1eb988b8c4719c741ab9c8996b5e608f456be2f](assets/d1eb988b8c4719c741ab9c8996b5e608f456be2f.png)

这样一个新的模块就诞生了.

## 在 IDEA 创建 package

![9a4af7410ddde57085d0a7ff3973f25182d73244](assets/9a4af7410ddde57085d0a7ff3973f25182d73244.png)

![7bcad0f14268953b537f1e6702be2031c3519dce](assets/7bcad0f14268953b537f1e6702be2031c3519dce.png)

:::warning
包名不是单单一个名字这么简单, 一般是倒过来的公司域名和技术名, 全部小写, 例如:

`top.elake.hello`
:::

输入完后回车.

![37eed0b33be505b6a2c68f90e5a5af585637d972](assets/37eed0b33be505b6a2c68f90e5a5af585637d972.png)

:::tip
如果你的包不是像我这个的, 而是这样的.

![62353ed0a902a1570d6ab3308039b539fd6e02d8](assets/62353ed0a902a1570d6ab3308039b539fd6e02d8.png)

可以按着下面的方法设置, 看个人喜好.

![2cef05eb9573b13081f39614a4c491d77fae1d9f](assets/2cef05eb9573b13081f39614a4c491d77fae1d9f.png)
:::

这样一个新的包就诞生了.

## 在 IDEA 创建 class

![fba6c4aedccabfd87b303082f76b19c6063eac25](assets/fba6c4aedccabfd87b303082f76b19c6063eac25.png)

![a891f04f13c30afc7969686b8be89087318707ef](assets/a891f04f13c30afc7969686b8be89087318707ef.png)

输入完名称后回车.

![2d46dcb07e8a96fee4d2c456db0fc8dced04d846](assets/2d46dcb07e8a96fee4d2c456db0fc8dced04d846.png)

这样一个新的类就诞生了.
