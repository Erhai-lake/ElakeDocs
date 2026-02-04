---
title: 内置构造函数
createTime: 2025/12/28 17:17:44
---

* 引用类型.
    * Object.
    * Array.
    * RegExp.
    * Date.
* 包装类型.
    * String.
    * Number.
    * Boolean.

## Object

Object是内置的构造函数, 用于创建普通对象.

```javascript
const USER = new Object({ Name: "洱海", Age: 18 })
console.log(USER)
// {Name: "洱海", Age: 18}
```

推荐使用字面量方式声明对象, 而不是Object构造函数.

### 获取对象所有属性

`Object.keys(对象)`

静态方法获取对象中所有的属性.

返回一个数组.

```javascript
const Erhai_lake = { Name: "洱海", Age: 18 }

const ARR = Object.keys(Erhai_lake)
console.log(ARR)
// ["Name", "Age"]
```

### 获取对象所有值

`Object.values(对象)`

静态方法获取对象中所有的属性.

返回一个数组.

```javascript
const Erhai_lake = { Name: "洱海", Age: 18 }

const ARR = Object.values(Erhai_lake)
console.log(ARR)
// ["洱海", 18]
```

### 拷贝对象

`Object.assign(对象, 被拷贝的对象)`

静态方法拷贝对象.

返回一个数组.

```javascript
// 将Erhai_lake拷贝给Elake
const Erhai_lake = { Name: "洱海", Age: 18 }
const Elake = {}
Object.assign(Elake, Erhai_lake)

console.log(Erhai_lake)
// {Name: "洱海", Age: 18}
console.log(Elake)
// {Name: "洱海", Age: 18}
```

## Array

Array是内置构造函数, 用于创建数组.

```javascript
const ARR = new Array(3, 5)
console.log(ARR)
// [3, 5]
```

创建数组建议使用==字面量==创建, 不用Array构造函数创建.

### 遍历数组

`forEach(函数)`

实例方法查找遍历数组元素.

这个之前写过.

### 过滤数组

`filter(函数)`

实例方法筛选满足条件的项, 返回一个新数组.

```javascript
const ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 筛选出偶数
const Test = ARR.filter((N) => {
    // 如果true就返回
    return N % 2 === 0
})

console.log(Test)
// [2, 4, 6, 8, 10]
```

### 迭代数组

`map(函数)`

实例方法按需处理数组后返回.

这个之前写过.

### 累加器

`reduce(函数)`

实例方法返回累计处理的结果.

经常用于==求和==.

```javascript
const ARR = [1, 2, 3, 4, 5]
// 计算总和
const SUM = ARR.reduce((Accumulator, CurrentValue) => {
    // 累加器(Accumulator)是累加的结果
    // 当前值(CurrentValue)是当前正在处理的元素
    console.log(`上一次值: ${Accumulator}`)
    console.log(`当前值: ${CurrentValue}`)
    console.log(`返回值: ${Accumulator + CurrentValue}\n`)
    return Accumulator + CurrentValue;
    // 0 是初始值
}, 0)

console.log(SUM) // 输出: 15
```

#### 执行过程

1. 如果==没有起始值==, 则==上一次值以数组的第一个数组元素的值==.
2. 每一次循环, 把==返回值==给做为下一次循环的==上一次值==.
3. 如果==有起始值==, 则==起始值做为上一次值==.

刚刚的例子的计算过程如下:

```markdown
上一次值: 0
当前值: 1
返回值: 1

上一次值: 1
当前值: 2
返回值: 3

上一次值: 3
当前值: 3
返回值: 6

上一次值: 6
当前值: 4
返回值: 10

上一次值: 10
当前值: 5
返回值: 15
```

### 拼接数组

`join("拼接符")`

实例方法数组元素拼接为字符串后返回字符串.

```javascript
const ARR = [1, 2, 3, 4, 5]
// 拼接符如果不填, 默认是
console.log(ARR.join())
// 1,2,3,4,5
```

### 查找元素

`find(函数)`

实例方法查找元素, 返回符合测试条件的第一个元素值, 如果没有返回`understand`.

```javascript
const ARR = [1, 1, 4, 5, 1, 4]
const Find = ARR.find((N) => {
    return N === 1
})

console.log(Find)
// 1
```

### 检测数组全部元素

`every(函数)`

实例方法检测数组所有元素是否都符合指定条件, 如果==所有元素==都通过检测返回`true`, 否则返回`false`.

```javascript
const ARR = [1, 1, 4, 5, 1, 4]
const EVERY = ARR.every((N) => {
    // 如果全部元素大于或等于1才返回true
    // 否则返回false
    return N >= 1
})

console.log(EVERY)
// true
```

### 检测数组部分元素

`some(函数)`

实例方法检测数组所有元素是否都符合指定条件, 如果==任意元素==通过检测返回`true`, 否则返回`false`.

```javascript
const ARR = [1, 1, 4, 5, 1, 4]
const SOME = ARR.some((N) => {
    // 只要有元素符合, 就返回true
    // 否则返回false
    return N === 5
})

console.log(SOME)
// true
```

### 合并数组

`concat(数组)`

实例方法合并两个数组, 返回新的数组.

```javascript
const ARR1 = [1, 1, 4, 5, 1, 4]
const ARR2 = [1, 9, 1, 9, 8, 1, 0]
const CONCAT = ARR1.concat(ARR2)

console.log(CONCAT)
// [1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 8, 1, 0]
```

### 排序数组

`sort(函数)`

实例方法对原数组单元值排序.

```javascript
const ARR1 = [1, 1, 4, 5, 1, 4]
const ARR2 = [1, 1, 4, 5, 1, 4]
// 升序, 默认
// 直接写Array1.sort()也是可以的
ARR1.sort((A, B) => {
    return A - B
})
// 降序
ARR2.sort((A, B) => {
    return B - A
})

console.log(ARR1)
// [1, 1, 1, 4, 4, 5]
console.log(ARR2)
// [5, 4, 4, 1, 1, 1]
```

### 添加删除替换元素

`splice(开始索引, 结束索引, ...替换字符)`

实例方法用于添加, 删除或替换数组中的元素.

```javascript
// 删除元素
const ARR1 = [1, 1, 4, 5, 1, 4]
// 从索引1开始删除2个元素
ARR1.splice(1, 2)
console.log(ARR1)
// [1, 5, 1, 4]

// 添加元素
const ARR2 = [1, 1, 4, 5, 1, 4]
// 从索引2开始, 不删除任何元素, 添加A和B
ARR2.splice(2, 0, "A", "B")
console.log(ARR2)
// [1, 1, "A", "B", 4, 5, 1, 4]

// 替换元素
const ARR3 = [1, 1, 4, 5, 1, 4]
// 从索引1开始, 删除2个元素, 并添加A和B
ARR3.splice(1, 2, "A", "B");
console.log(ARR3)
// [1, "A", "B", 5, 1, 4]
```

### 反转数组

`reverse()`

实例方法反转数组.

```javascript
const ARR = [1, 1, 4, 5, 1, 4]
ARR.reverse()

console.log(ARR)
// [4, 1, 5, 4, 1, 1]
```

### 查找元素索引值

`findIndex(函数)`

实例方法查找元素索引值, 如果找到, 返回索引值, 否则返回-1.

```javascript
const ARR = [1, 1, 4, 5, 1, 4]
const FindIndex = ARR.findIndex((N) => {
    return N === 5
})

console.log(FindIndex)
// 3
```

## String

### 获取字符串长度

`length`

实例属性获取字符串长度.

```javascript
const STR = "技术宅的创造之梦, 如洱海般辽阔深邃."

console.log(STR.length)
// 18
```

### 拆分字符串

`split(分割符)`

实例方法将字符串分割成数组.

```javascript
const STR = "技术宅的创造之梦, 如洱海般辽阔深邃."

console.log(STR.split(", "))
// ["技术宅的创造之梦", "如洱海般辽阔深邃."]
```

### 截取字符串

`substring(开始索引, 结束索引)`

实例方法字符串截取.

```javascript
const STR = "技术宅的创造之梦, 如洱海般辽阔深邃."

console.log(STR.substring(4))
// 创造之梦, 如洱海般辽阔深邃.
console.log(STR.substring(4, 12))
// 创造之梦, 如洱海
```

### 检测字符串以某字符开头

`startsWith(检测字符串, 要检测的字符索引)`

实例方法检测字符串是否以某字符开头.

```javascript
const STR = "技术宅的创造之梦, 如洱海般辽阔深邃."

console.log(STR.startsWith("技"))
// true
console.log(STR.startsWith("宅", 2))
// true
```

### 检测字符串以某字符结尾

`endsWith(检测字符串, 要检测的字符索引)`

实例方法检测字符串是否以某字符结尾.

```javascript
const STR = "技术宅的创造之梦, 如洱海般辽阔深邃."

console.log(STR.endsWith("."))
// true
// 检测前8个字符是否以梦结尾
console.log(STR.endsWith("梦", 8))
// true
```

### 检测字符串

`includes(搜索的字符串, 要检测的字符索引)`

实例方法检测字符串.

```javascript
const STR = "技术宅的创造之梦, 如洱海般辽阔深邃."

// 只要有任意字符串就可以返回true
console.log(STR.includes("梦, 如洱"))
// true
console.log(STR.includes("辽阔", 2))
// true
```

### 字符转大写

`toUpperCase(搜索的字符串, 要检测的字符索引)`

实例方法检测字符串.

```javascript
const STR = "abcDEF"

console.log(STR.toUpperCase())
// ABCDEF
```

### 查找字符索引

`indexOf(搜索的字符串, 要检测的字符索引)`

实例方法检测字符串, 如果找到, 返回索引值, 否则返回-1.

```javascript
const STR = "技术宅的创造之梦, 如洱海般辽阔深邃."

console.log(STR.indexOf("技"))
// 0
console.log(STR.indexOf("技", 2))
// -1
```

### 替换字符串

`replace(被替换是字符串或正则表达式, 要替换的字符串)`

实例方法替换字符串, 支持正则表达式.

```javascript
const STR = "技术宅的创造之梦, 如洱海般辽阔深邃."

console.log(STR.replace("辽阔深邃", "水草丰茂"))
// 技术宅的创造之梦, 如洱海般水草丰茂.
console.log(STR.replace(/辽阔深邃/g, "水草丰茂"))
// 技术宅的创造之梦, 如洱海般水草丰茂.
```

### 查找字符串

`match(被替换是字符串或正则表达式, 要替换的字符串)`

实例方法查找字符串, 支持正则表达式.

```javascript
const STR = "技术宅的创造之梦, 如洱海般辽阔深邃."

console.log(STR.match("辽阔深邃"))
// ["辽阔深邃", index: 13, input: "技术宅的创造之梦,如洱海般辽阔深邃.", groups: undefined]
console.log(STR.match(/辽阔深邃/g))
// ["辽阔深邃"]
```

## Number

Number是内置的构造函数, 用于创建数值.

### 保留小数点长度

`toFixed(保留位数)`

保留小数点长度

```javascript
const NUM = 114.514

console.log(NUM.toFixed())
// 114
console.log(NUM.toFixed(1))
// 114.5
```
