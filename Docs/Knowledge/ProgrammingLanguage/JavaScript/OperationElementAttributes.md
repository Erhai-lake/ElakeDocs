# 操作元素属性

除了操作元素内容外, 还可以通过JS设置或修改标签元素属性, 比如通过`src`更换图片

`对象.属性名 = 属性值`

```html
<img src="img1.jpg" width="700">
```

![85b8ff9987c1c87b444dfc437d60db41b6645c91](Assets/85b8ff9987c1c87b444dfc437d60db41b6645c91.png)

```html
<img src="img1.jpg" width="700">
<script>
    // 修改图片和大小
    document.querySelector('img').src = 'img2.webp'
    document.querySelector('img').width = '1000'
</script>
```

![a4876631d427513e0a4bb41a5ee24a57ffc940ef](Assets/a4876631d427513e0a4bb41a5ee24a57ffc940ef.png)
