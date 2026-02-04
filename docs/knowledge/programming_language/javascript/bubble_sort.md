---
title: 冒泡排序
createTime: 2024/10/02 14:53:08
---

* 冒泡排序是一种简单的排序算法.
* 它重复地走访过要排序的数列, 一次比较两个元素, 如果他们的顺序错误就把他们交换过来.走访数列的工作是重复地进行直到没有再需要交换, 也就是说该数列已经排序完成.
* 这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端.
* 比如数组`[2, 3, 1, 4, 5]`经过排序成为了`[1, 2, 3, 4, 5]`或者`5, 4, 3, 2, 1`.

## 分析

[VisuAlgo](https://visualgo.net/zh/sorting)这个网站提供了多种排序的动画生成用于方便理解, 下方的图片来源就是这个网站.

### 初始

![13aff8c332b0494d6a00bcb016e8cceaceb45416](assets/13aff8c332b0494d6a00bcb016e8cceaceb45416.png)

### 第一步

2不大于3, 跳过.

![93f592221927711c44cde73dce4fdb032cce2f63](assets/93f592221927711c44cde73dce4fdb032cce2f63.png)

### 第二步

3大于1, 交换.

![3f455d55dee0c2f26c26662e5ae911902e89244b](assets/3f455d55dee0c2f26c26662e5ae911902e89244b.png)

![ae0f9bdbfe669c4804a79741488d8329445d454f](assets/ae0f9bdbfe669c4804a79741488d8329445d454f.png)

### 第三步

3不大于4, 跳过.

![cfdeb3f9d2d5f2518959d858acfd68513bd8a3c0](assets/cfdeb3f9d2d5f2518959d858acfd68513bd8a3c0.png)

### 第四步

4不大于5, 跳过.

![1eb786a308cfb2630d9b88ed5f45b7af0fd80d0e](assets/1eb786a308cfb2630d9b88ed5f45b7af0fd80d0e.png)

![889a4d9c42ae2e240b5cd8856443a847157cc39d](assets/889a4d9c42ae2e240b5cd8856443a847157cc39d.png)

### 第五步

2大于1, 交换.

![d31cddd78aaef4d4d947a40c2de668f294d3cb55](assets/d31cddd78aaef4d4d947a40c2de668f294d3cb55.png)

![499fb78ebda5131d7ce019dd2d7531c6d0288094](assets/499fb78ebda5131d7ce019dd2d7531c6d0288094.png)

### 第六步

2不大于3, 跳过.

![1fa49355147857531a7a02050d0da13ae28b14d5](assets/1fa49355147857531a7a02050d0da13ae28b14d5.png)

### 第七步

3不大于4, 跳过.

![d1338d6abdf28347b3f0e1fd925e0cf6b82b2e7d](assets/d1338d6abdf28347b3f0e1fd925e0cf6b82b2e7d.png)

![61a3654ea97cd5546068e9637e6a4548beb5ecf7](assets/61a3654ea97cd5546068e9637e6a4548beb5ecf7.png)

### 第八步

1不大于2, 跳过.

![97ec1363b779c7d87fcba34a29d725101e01a34f](assets/97ec1363b779c7d87fcba34a29d725101e01a34f.png)

### 第九步

2不大于3, 跳过.

![b7344881d3da50e845a692d626096666f1ca2a39](assets/b7344881d3da50e845a692d626096666f1ca2a39.png)

![ed54a751795f2f7f46388158ada3604b8cae5fb4](assets/ed54a751795f2f7f46388158ada3604b8cae5fb4.png)

### 动画

![1723c2c68513a81c8318e95e8373bd195fbce8ce](assets/1723c2c68513a81c8318e95e8373bd195fbce8ce.gif)

## 代码

知道了原理, 就来写算法吧.

```javascript
let Arr = [10, 5, 6, 4, 8, 2, 1, 5, 9, 8, 5, 0, 2, 4, 6, 10, 8, 9, 5]
console.log(Arr)
let Max = Arr.length - 1
for (let I = 0; I < Max; I++) {
    let Done = true
    for (let J = 0; J < Max; J++) {
        if (Arr[J] > Arr[J + 1]) {
            let Temp = Arr[J]
            Arr[J] = Arr[J + 1]
            Arr[J + 1] = Temp
            Done = false
        }
    }
    if (Done) {
        break
    }
}
console.log(Arr)
```

