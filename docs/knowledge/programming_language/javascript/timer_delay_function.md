---
title: 定时器-延时函数
createTime: 2024/10/02 14:53:08
---

JS 内置的一个用来让代码延迟执行的函数.

`setTimeout(函数, 延迟毫秒数)`

`setTimeout`仅执行一次, 所以可以理解为把一段代码延迟执行.

:::demo
```html
<p>点击按钮</p>
<button onclick="test()">测试</button>
<script>
	const TEST = document.querySelector("p")
	function test() {
		TEST.innerHTML = `正在倒计时...`
		setTimeout(() => {
			TEST.innerHTML = `滴滴滴~滴滴滴~时间到!~`
		}, 3000)
	}
</script>
```
:::

和间歇函数一样有返回值, 返回定时器ID.

使用`clearTimeout(定时器ID)`关闭定时器, 这里不在过多赘述, 可以翻[定时器-间歇函数](timer_interval_function)的看.
