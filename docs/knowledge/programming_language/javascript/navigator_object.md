---
title: navigator 对象
createTime: 2024/10/02 14:53:08
---

navigator的数据类型是对象, 该对象下记录了浏览器自身的相关信息.

## 常用的属性和方法

### userAgent

获取浏览器的版本和平台.

```html
<script>
    console.log(navigator.userAgent)
</script>
```

`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0`

通常使用这个属性判断是电脑还是移动端, 然后跳转页面.
