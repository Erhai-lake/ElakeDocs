---
title: 超链接标签
createTime: 2024/10/02 14:53:07
---

作用: 点击跳转到其他页面.

标签名:`a`双标签.

:::demo

```html
<a href="//www.elake.top" target="_blank">跳转到洱海官网</a>
```

:::

属性:

* `href`
	* 跳转地址, 不确定跳转地址时, 填`#`, 空链接, 必须属性.
* `target`
	* 跳转方式.
		* `_blank`在新页面打开.
		* `_self`在当前页面跳转(默认).
		* `_parent`在父框架中跳转.
		* `_top`在窗口的整个主体中跳转.
		* `framename`在指定的`iframe`标签中跳转.
