---
title: 字体图标
createTime: 2024/10/02 14:53:07
---

展示的是==图标==, 本质是==字体==.

作用: 在网页中添加简单地, 颜色单一的小图标.

优点:

* 灵活性: 灵活的修改样式, 例如:尺寸, 颜色等.
* 轻量性: 体积小, 渲染快, 降低服务器请求次数.
* 兼容性: 几乎兼容所有主流浏览器.
* 使用方便: 先下载再使用.

国内可以使用阿里的[iconfont图标库](https://www.iconfont.cn).

可以直接下载图标源文件, 或者添加至项目, 合并成字体图标.

![afaea0527bd47837a80efbf6e6be28f9619ec581](assets/afaea0527bd47837a80efbf6e6be28f9619ec581.png)

![e6024fbbd747425c7cea785b5c5ef41633ce84c4](assets/e6024fbbd747425c7cea785b5c5ef41633ce84c4.png)

![37096ce964c9170584a1901a6f5a36e100dbf58d](assets/37096ce964c9170584a1901a6f5a36e100dbf58d.png)

![c012edad5bcf96c0e6856ff03d2bf5ec3f2aea9c](assets/c012edad5bcf96c0e6856ff03d2bf5ec3f2aea9c.png)

![30426851c6ead83bc207f0c4c36dbba44845c5b6](assets/30426851c6ead83bc207f0c4c36dbba44845c5b6.png)

![6b5cbadcd9e4b2aaac2fa4ab4beba76d9eaf0362](assets/6b5cbadcd9e4b2aaac2fa4ab4beba76d9eaf0362.png)

推荐使用Font class方法, Vue.js推荐使用Symbol方法, 根据教程使用即可.

引入项目下面生成的fontclass代码.

```html
<link rel="stylesheet" href="iconfont.css">
```

挑选相应图标并获取类名, 应用于页面.

```html
<span class="ErhaiLakeUI-icon xxx"></span>
```

## 上传自定义图标

只能上传SVG的矢量图.

![3e53bf8df2a57157f2096d6894e3ffc7281a7d16](assets/3e53bf8df2a57157f2096d6894e3ffc7281a7d16.png)

在确认编辑页面点击去除颜色提交后, 等待审核通过后即可.

![21401abec17f7b3cb42af10b86bf24e1ae869b32](assets/21401abec17f7b3cb42af10b86bf24e1ae869b32.png)
