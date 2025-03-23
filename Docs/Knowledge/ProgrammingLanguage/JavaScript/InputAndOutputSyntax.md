# 输入输出语法

输入输出也可以理解成人与计算机的交互, 用户通过键盘, 鼠标等向计算机输入信息, 计算机处理后再展示结果给用户, 这便是一次输入输出的过程

## 输入

`prompt('提示词')`

作用:显示一个浏览器对话框

例子:

```js
prompt('请输入用户名:')
```

![07d2cb663e19c26a6bd53d0ea1ee821272a8344f](Assets/07d2cb663e19c26a6bd53d0ea1ee821272a8344f.png)

:::warning
这是WebAPI的内容, 原生JS并没有这个语句
:::

## 输出

### 在网页内输出

`document.write('要输出的内容')`

作用:向body内输出内容

:::warning
如果输出的内容写的是标签, 也会被解析成网页元素
:::

例子:

```js
document.write('<h1>标题</h1>')
```

![06f098f5124bea0314632a338a35a3e2a3df9437](Assets/06f098f5124bea0314632a338a35a3e2a3df9437.png)

### 浏览器警告框

`alert('要输出的内容')`

作用:页面弹窗警告对话框

例子:

```js
alert('警告')
```

![a9b090c2ff6b174a0e495a6529a949338ba01485](Assets/a9b090c2ff6b174a0e495a6529a949338ba01485.png)

### 控制台打印

`console.log('要输出的内容')`

作用:在控制台输出内容, 程序调试, 日志使用

例子:

```js
console.log('正常')
```

![5d2e0cf37582c7fd0de3af45a746b109c507357f](Assets/5d2e0cf37582c7fd0de3af45a746b109c507357f.png)
