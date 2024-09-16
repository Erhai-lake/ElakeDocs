---
id: Recursion
title: 递归
---

# 递归

> 突然发现我没写递归,但是深拷贝要用,赶紧来补一下

**如果一个函数在内部可以调用其本身,那么这个函数就是递归函数**

简单来说就是,函数内部自己调用自己,这个函数就是递归函数

递归函数的作用和循环效果类似

由于递归很容易发生**栈溢出(stack overflow)**,所以**必须要加退出条件`return`**

```js showLineNumbers
Num = 0
const T = () => {
    if (Num >= 10) {
        return
    }
    Num++
    console.log(Num)
    T()
}

T()
```

