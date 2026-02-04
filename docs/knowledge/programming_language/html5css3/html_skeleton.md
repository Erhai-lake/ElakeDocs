---
title: Html 骨架
createTime: 2024/10/02 14:53:07
---

```html
<html lang="zh_CN">
	<head>
        <title>网页标题</title>
	</head>
	<body>
        网页主体
	</body>
</html>
```

`html`: ==整个网页==, 网页的所有内容都要在这里面.

`head`: ==网页头部==, 存放给浏览器看的代码, 如引入**CSS**等.

`body`: ==网页主体==, 存放给用户展示的代码, 如图片, 文字等.

`lang`: ==网页的语言==, 声明网页的语言, `en`为英文, `zh_CN`为简体中文, 像**edge**这样自带翻译的浏览器, 会根据这一行判断是否需要弹窗翻译窗口.

`title`: ==网页的标题==.

新建一个`index.html`文件(网页名可以自定义, 但首页默认为index)

## 快速生成骨架

WebStorm和VSCode都可以通过输入英文感叹号`!`然后按Tab来快速生成骨架.

其中WebStorm在新建`html`文件时会自动生成骨架, 骨架中包含了`html`, `head`, `body`等标签.

![33fd357304c0bb5dc79be00fec1a10c0b68c9226](assets/33fd357304c0bb5dc79be00fec1a10c0b68c9226.png)

### 解析 VSCode 生成的骨架

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>

</body>
</html>
```

`<!DOCTYPE html>`: 声明该网页使用**Html5**进行渲染.

`lang="en"`:`html`属性, 声明网页的语言, `en`为英文, `zh_CN`为简体中文, 像**edge**这样自带翻译的浏览器, 会根据这一行判断是否需要弹窗翻译窗口.

![4e0f22325cbd71345f1279e72ee8afd48f961b8b](assets/4e0f22325cbd71345f1279e72ee8afd48f961b8b.png)

`<meta charset="UTF-8">`: 声明该网页使用UTF-8编码.

`<meta name="viewport" content="width=device-width,  initial-scale=1.0">`: 设置网页在移动设备上的显示方式, `width=device-width`表示页面的宽度应该等于设备的宽度, `initial-scale=1.0`表示页面的初始缩放比例为1.0, 即不进行缩放.

`<title>Document</title>`: 网页标题.

`<body></body>`: 写网页主体的地方.
