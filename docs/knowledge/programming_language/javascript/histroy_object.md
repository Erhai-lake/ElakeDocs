---
title: histroy 对象
createTime: 2024/10/02 14:53:08
---

histroy 的数据类型是对象, 主要管理历史记录, 该对象与浏览器地址的操作相对应.如前进, 后退, 历史记录等等.

这个对象一般在实际开发中比较少用到, 但是会在一些OA办公系统中见到.

## 常用的刷新和方法

### back

```javascript
histroy.back()
```

方法, 用于后退.

### forward

```javascript
histroy.forward()
```

方法, 用于前进.

### go

~~还在go, 还在go~~

```javascript
histroy.go(1)
```

方法, 用于通过参数前进和后退(输入1, 就是前进1个页面, 输入-1就是后退1个页面)
