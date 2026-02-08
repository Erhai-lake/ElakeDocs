---
title: 代码块
icon: tdesign:code
createTime: 2025/12/23 18:45:50
---

## 高亮显示

文档使用[shiki](https://shiki.style/)渲染代码块, 支持超过190种+语言的语法高亮, 你可以在[languages](https://shiki.style/languages)查看所有支持的语言

你可以通过以下语法为你使用的语言所编写的代码实现高亮效果

````markdown
``` [lang]
<!-- 代码内容 -->
```
````

其中, `[lang]`为你使用的语言.

````markdown
``` javascript
const a = 1
console.log(a)
```
````

::: demo-wrapper
``` javascript
const a = 1
console.log(a)
```
:::

## 标题

在` ``` [lang]`之后添加`title="xxxx"`, 可以为当前代码块添加标题.

````markdown
```json title="package.json"
{
	"name": "elake_docs",
	"type": "module",
	"version": "3.0.0",
	"description": "记录点滴 见证思考 分享成长",
}
```
````

::: demo-wrapper
```json title="package.json"
{
	"name": "elake_docs",
	"type": "module",
	"version": "3.0.0",
	"description": "记录点滴 见证思考 分享成长"
}
```
:::

## 代码行号

你可以通过`:line-numbers`/`:no-line-numbers`来控制当前代码块是否显示代码行号. 还可以通过在`:line-numbers`之后添加`=`来自定义起始行号, 例如`:line-numbers=2`表示代码块中的行号从`2`开始.

默认是显示行号, 你可以通过`:no-line-numbers`来禁用行号.

````markdown
``` javascript :no-line-numbers
// 禁用行号
const line2 = "This is line 2"
const line3 = "This is line 3"
```
````

::: demo-wrapper
``` javascript :no-line-numbers
// 禁用行号
const line2 = "This is line 2"
const line3 = "This is line 3"
```
:::

````markdown
``` javascript :line-numbers=5
// 从第5行开始显示
const line2 = "This is line 2"
const line3 = "This is line 3"
```
````

::: demo-wrapper
``` javascript :line-numbers=5
// 从第5行开始显示
const line2 = "This is line 2"
const line3 = "This is line 3"
```
:::

## 行高亮

在`[lang]`之后紧跟随`{xxxx}`, 可以实现行高亮, 其中`xxx`表示要高亮的行号.

````markdown
```javascript{4}
export default {
	data () {
    	return {
      		msg: "Highlighted!"
    	}
  	}
}
```
````

::: demo-wrapper
```javascript{4}
export default {
	data () {
    	return {
      		msg: "Highlighted!"
    	}
  	}
}
```
:::

除了单行之外, 还可以指定多个单行/多行,或两者均指定

 * 多行: 例如`{5-8}`/`{3-10}`/`{10-17}`
 * 多个单行: 例如`{4,7,9}`
 * 多行与单行: 例如`{4,7-13,16,23-27,40}`

````markdown
```javascript{1,4,6-8}
export default { // Highlighted
	data () {
 		return {
      		msg: `Highlighted!
      		This line isn't highlighted,
      		but this and the next 2 are.`,
      		motd: "VuePress is awesome",
      		lorem: "ipsum"
    	}
  	}
}
```
````

::: demo-wrapper
```javascript{1,4,6-8}
export default { // Highlighted
	data () {
 		return {
      		msg: `Highlighted!
      		This line isn't highlighted,
      		but this and the next 2 are.`,
      		motd: "VuePress is awesome",
      		lorem: "ipsum"
    	}
  	}
}
```
:::

### 注释高亮

也可以使用`// [!code highlight]`注释实现行高亮.

````markdown
```javascript
export default {
	data () {
		return {
			msg: "Highlighted!" // [ !code highlight]
		}
	}
}
```
````

::: demo-wrapper
```javascript
export default {
	data () {
		return {
			msg: "Highlighted!" // [!code highlight]
		}
	}
}
```
:::

## 聚焦

在某一行上添加`// [!code focus]`注释将聚焦它并模糊代码的其他部分.

此外, 可以使用`// [!code focus:<lines>]`定义要聚焦的行数.

````markdown
```javascript
export default {
	data () {
		return {
			msg: "Highlighted!" // [ !code focus]
		}
	}
}
```
````

::: demo-wrapper
```javascript
export default {
	data () {
		return {
			msg: "Highlighted!" // [!code focus]
		}
	}
}
```
:::

:::: tip
在不同的语言代码块中, 应该使用该语言的有效的行注释语法.

比如在bash代码块中, 应该使用`# [!code focus]`.

````markdown
```bash
mkdir hello && cd hello  # [ !code focus]
pnpm install
```
````

::: demo-wrapper
```bash
mkdir hello && cd hello  # [!code focus]
pnpm install
```
:::
::::

## 颜色差异

在某一行添加`// [!code --]`或`// [!code ++]`注释将会为该行创建diff, 同时保留代码块的颜色.

````markdown
```javascript
export default {
	data () {
    	return {
      		error: "Removed", // [ !code --]
      		warning: "Added" // [ !code ++]
    	}
  	}
}
```
````

::: demo-wrapper
```javascript
export default {
	data () {
    	return {
      		error: "Removed", // [!code --]
      		warning: "Added" // [!code ++]
    	}
  	}
}
```
:::

:::: tip
在不同的语言代码块中, 应该使用该语言的有效的行注释语法.

比如在bash代码块中, 应该使用`# [!code --]`或`# [!code ++]`.

````markdown
```bash
mkdir hello && cd hello # [ !code ++]
pnpm install  # [ !code --]
```
````

::: demo-wrapper
```bash
```bash
mkdir hello && cd hello # [!code ++]
pnpm install  # [!code --]
```
:::
::::

## 高亮错误和警告

在某一行添加`// [!code warning]`或`// [!code error]`注释将会为该行相应的着色.

````markdown
```javascript
export default {
	data () {
    	return {
      		error: "Removed", // [ !code warning]
      		warning: "Added" // [ !code error]
    	}
  	}
}
```
````

::: demo-wrapper
```javascript
export default {
	data () {
		return {
			error: "Removed", // [!code warning]
			warning: "Added" // [!code error]
		}
	}
}
```
:::

:::: tip
在不同的语言代码块中, 应该使用该语言的有效的行注释语法.

比如在bash代码块中, 应该使用`# [!code warning]`或`# [!code error]`.

````markdown
```bash
mkdir hello && cd hello # [ !code warning]
pnpm install  # [ !code error]
```
````

::: demo-wrapper
```bash
```bash
mkdir hello && cd hello # [!code warning]
pnpm install  # [!code error]
```
:::
::::

## 词高亮

````markdown
```javascript
export function foo() { // [ !code word:Hello]
	const msg = "Hello World"
  	console.log(msg) // prints Hello World
}
```
````

::: demo-wrapper
```javascript
export function foo() { // [!code word:Hello]
	const msg = "Hello World"
	console.log(msg) // prints Hello World
}
```
:::

你还可以指定高亮显示的次数, 例如`[!code word:options:2]`会高亮显示近两个`options`.

````markdown
```javascript
// [ !code word:options:2]
const options = { foo: "bar" }
options.foo = "baz"
console.log(options.foo) // 这个不会被高亮显示
```
````

::: demo-wrapper
```javascript
// [!code word:options:2]
const options = { foo: "bar" }
options.foo = "baz"
console.log(options.foo) // 这个不会被高亮显示
```
:::

:::: tip
在不同的语言代码块中, 应该使用该语言的有效的行注释语法.

比如在bash代码块中, 应该使用`# [!code word:hello]`.

````markdown
```bash
mkdir hello && cd hello  # [ !code word:hello]
```
````

::: demo-wrapper
```bash
```bash
mkdir hello && cd hello  # [!code word:hello]
```
:::
::::

## 空白符

将空白字符(Tab和空格)渲染为可见状态.

在代码块后面添加`:whitespace`.

渲染每行代码行前的空格(小圆点)

````markdown
```xml :whitespace
<catalog>
    <book>
        <title>Everyday Italian</title>
    </book>
</catalog>
```
````

::: demo-wrapper
```xml :whitespace
<catalog>
    <book>
        <title>Everyday Italian</title>
    </book>
</catalog>
```
:::

渲染每行代码行前的 Tab(小箭头)

````markdown
```xml :whitespace
<catalog>
	<book>
		<title>Everyday Italian</title>
	</book>
</catalog>
```
````

::: demo-wrapper
```xml :whitespace
<catalog>
	<book>
		<title>Everyday Italian</title>
	</book>
</catalog>
```
:::

渲染所有的空格(小圆点和小箭头)

````markdown
```javascript :whitespace=all
function foo( ) {
	return "Hello World"  
}
```
````

::: demo-wrapper
```javascript :whitespace=all
function foo( ) {
	return "Hello World"
}
```
:::

## 禁用代码折叠

在代码块后面添加`:no-collapsed-lines`来禁用代码折叠.

````markdown
```c :no-collapsed-lines
...省略...
```
````

::: demo-wrapper
默认

```c
#include <stdio.h>

#define ARR_LEN 7

void qsort(int v[], int left, int right);
void printArr(int v[], int len);

int main()
{
	int i;
	int v[ARR_LEN] = { 4, 3, 1, 7, 9, 6, 2 };
	printArr(v, ARR_LEN);
	qsort(v, 0, ARR_LEN-1);
	printArr(v, ARR_LEN);
	return 0;
}

void qsort(int v[], int left, int right)
{
	int i, last;
	void swap(int v[], int i, int j);

	if (left >= right)
		return;
	swap(v, left, (left + right) / 2);
	last = left;
	for (i = left+1; i <= right; i++)
		if (v[i] < v[left])
			swap(v, ++last, i);
	swap(v, left, last);
	qsort(v, left, last-1);
	qsort(v, last+1, right);
}

void swap(int v[], int i, int j)
{
	int temp;

	temp = v[i];
	v[i] = v[j];
	v[j] = temp;
}

void printArr(int v[], int len)
{
	int i;
	for (i = 0; i < len; i++)
		printf("%d ", v[i]);
	printf("\n");
}
```

禁用折叠

```c :no-collapsed-lines
#include <stdio.h>

#define ARR_LEN 7

void qsort(int v[], int left, int right);
void printArr(int v[], int len);

int main()
{
	int i;
	int v[ARR_LEN] = { 4, 3, 1, 7, 9, 6, 2 };
	printArr(v, ARR_LEN);
	qsort(v, 0, ARR_LEN-1);
	printArr(v, ARR_LEN);
	return 0;
}

void qsort(int v[], int left, int right)
{
	int i, last;
	void swap(int v[], int i, int j);

	if (left >= right)
		return;
	swap(v, left, (left + right) / 2);
	last = left;
	for (i = left+1; i <= right; i++)
		if (v[i] < v[left])
			swap(v, ++last, i);
	swap(v, left, last);
	qsort(v, left, last-1);
	qsort(v, last+1, right);
}

void swap(int v[], int i, int j)
{
	int temp;

	temp = v[i];
	v[i] = v[j];
	v[j] = temp;
}

void printArr(int v[], int len)
{
	int i;
	for (i = 0; i < len; i++)
		printf("%d ", v[i]);
	printf("\n");
}
```
:::

## 代码分组

代码组是通过标签页形式组织代码, 您可以清晰对比不同技术栈/配置方案或语言版本的实现差异.

通过`@tab:active`语法指定默认显示的代码标签

````markdown{14}
::: code-tabs
@tab config.js
```javascript
/**
 * @type {import('vuepress').UserConfig}
 */
const config = {
  // ..
}

export default config
```

@tab:active config.ts
```ts
import type { UserConfig } from 'vuepress'

const config: UserConfig = {
  // ..
}

export default config
```
:::
````

:::: demo-wrapper
::: code-tabs
@tab config.js
```javascript
/**
 * @type {import('vuepress').UserConfig}
 */
const config = {
  // ..
}

export default config
```

@tab:active config.ts
```ts
import type { UserConfig } from 'vuepress'

const config: UserConfig = {
  // ..
}

export default config
```
:::
::::

还配备了自动识别图标的功能

::: code-tabs
@tab:active pnpm

```shell
pnpm i
```

@tab yarn

```shell
yarn
```

@tab npm

```shell
npm install
```

:::

#### 支持的图标类别
主题默认适配以下技术栈的图标

* 运行环境: Node.js/Deno/Bun
* 包管理器: pnpm/yarn/npm
* 前端框架: Vue/React/Angular/Svelte/Solid/Next.js/Nuxt
* 编程语言: TypeScript/JavaScript/C/C++/Java/Python/Rust/Kotlin/Swift/Go

## 导入代码

导入代码可以让你在MD文件中导入另一个文件的代码, 并为其高亮显示.

它可以帮助你在文章中引用其他文件的代码, 避免编写重复的代码.

代码语言会根据文件扩展名进行推断, 但我们建议你显式指定代码语言.

```markdown
@[code markdown](card.md)
```

::: demo-wrapper
@[code markdown](card.md)
:::

如果你只想导入这个文件的一部分

```markdown
<!-- 仅导入第 1 行至第 10 行 -->
@[code markdown{1-10}](card.md)
```

::: demo-wrapper
<!-- 仅导入第 1 行至第 10 行 -->
@[code markdown{1-10}](card.md)
:::
