# Switch语句

```js
switch (数据) {
  case 值1:
    代码1
    break
  case 值2:
    代码2
    break
  default:
    代码3
    break
}
```

找到跟数据**全等**的`case`值,并执行里面的代码

如果没有**全等**的值,则执行`defaul`t里的代码

例:如果数据跟值2全等,则执行代码2

注意

* `Switch case`语句一般用于等值判断,不适合区间判断
* `Switch case`语句一般需要搭配`break`关键词使用,没有`break`会造成`case`穿透

```js
switch (1) {
  case 1:
    console.log("输入的是1");
    break
  case 2:
    console.log("输入的是2");
    break
  case 3:
    console.log("输入的是3");
    break
  default:
    console.log("没有对应的值");
    break
}
// 输入的是1
```

如果忘了写`break`会发是什么

```js
switch (1) {
  case 1:
    console.log("输入的是1");
  case 2:
    console.log("输入的是2");
  case 3:
    console.log("输入的是3");
  default:
    console.log("没有对应的值");
}
// 输入的是1
// 输入的是2
// 输入的是3
// 没有对应的值
```

可以看见他将所有分支都执行了一遍,因为没有`break`,没有退出`Switch`语句,这种现象,叫做穿透

`default`后面可以不加`break`,因为已经到底了,加不加无所谓了