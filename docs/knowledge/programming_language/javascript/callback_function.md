---
title: 回调函数
createTime: 2024/10/02 14:53:08
---

如果将函数A作为参数传递给函数B时, 我们称函数A为==回调函数==.

还记得之前讲的定时器么?他就是一个==回调函数==.

```javascript
const test = () =>  {
    console.log("我是回调函数...")
}

// 函数test作为参数, 传递给了setInterval, test就是回调函数
setInterval(test, 1000)
```

或者是事件监听, 他也是一个==回调函数==.

```javascript
BUT.addEventListener("click", function () {
    console.log("我是回调函数...")
})
```

回调函数不会立刻执行, 回调函数本质上还是一个函数, 只不过将它当成了参数使用.

使用匿名函数作为回调函数是比较常见的.
