---
title: 定时器-间歇函数
createTime: 2024/10/02 14:53:08
---

## 开启定时器

`setInterval(函数, 间隔时间)`

作用: 每隔一段时间, 就调用一次函数.

间隔时间的不用加单位, 但是单位是毫秒(ms).

:::demo
```html
<p id="test">点击按钮</p>
<button onclick="test()">测试</button>
<script>
	let num = null
	function test() {
		// 避免重复开启定时器
		clearInterval(num)
		let i = 0
		let max = 5
		// 开启定时器
		num = setInterval(() => {
			i++
			// 关闭定时器
			if (i >= max) clearInterval(num)
			// 在页面上显示
			document.getElementById("test").innerHTML = `定时器ID: ${num}, 1秒钟执行一次, 已经执行${i}次了, 还需${max - i}次`
		}, 1000)
	}
</script>
```
:::

如果想一直执行下去, 就不用关闭定时器了

```javascript
let i = 0
setInterval(() => {
    i++
    console.log(`1秒钟执行一次, 已经执行${i}次了`)
}, 1000)
```

## 返回值

定时器在开启的时候, 会被分配一个整数型的ID, 有了这个ID, 我们才能对定时器进行操作.

:::warning
定时器的ID如果要使用变量存储, 需要使用`let`, 因为定时器**每次**开启, 都会分配一个ID, 除非你的定时器只开一次.
:::

上面已经有个例子了, 这里就不重复了.

## 关闭定时器

`clearInterval(定时器ID)`

用于关闭指定ID的定时器.

一样看上面的例子.
