# 引用Js

## 内部Js

直接写在html文件里,用`script`标签包住

例子:

```html
<!DOCTYPE html>
<html lang="zh_CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>在内部引入js弹窗警告框</title>
</head>
<body>
  <script>
    alert('Hello World')
  </script>
</body>
</html>
```

## 外部Js

代码写在以`.js`后缀的文件里,通过`script`标签引入到html页面中

例子:

```html
<!DOCTYPE html>
<html lang="zh_CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>在外部引入js弹窗警告框</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

```js
alert('Hello World')
```

## 内联Js

代码写在标签内部(了解即可,后面Vue框架才是重点)

例子:

```html
<!DOCTYPE html>
<html lang="zh_CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>在内联引入js弹窗警告框</title>
</head>
<body>
  <button onclick="alert('可能吗¿')">点击月薪过亿</button>
</body>
</html>
```

