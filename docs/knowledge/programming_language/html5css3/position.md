---
title: 定位
createTime: 2024/10/02 14:53:07
---

作用: 灵活的**改变**盒子在网页中的**位置**.

实现:

1. 定位模式: `position`.

2. 偏移量: 设置盒子的位置.

   1. `left`.
   2. `right`.
   3. `top`.
   4. `bottom`.

## 相对定位

`position: relative;`

元素先放置在未添加定位时的位置, 再在不改变页面布局的前提下调整元素位置(因此会在此元素未添加定位时所在位置留下空白).

`position:relative`对`table-*-group`, `table-row`, `table-column`, `table-cell`, `table-caption`元素无效.

例子:

::::demo

:::code-tabs
@tab:active HTML
```html
<p>你可以打开F12看见, 红块和边界间隔都是100px</p>
<div class="a">
	<div class="b"></div>
</div>
```

@tab CSS
```css
.a {
	width: 400px;
	height: 400px;
	background-color: orange;
}

.b {
	position: relative;
	top: 100px;
	left: 100px;
	width: 200px;
	height: 200px;
	background-color: red;
}
```
:::

::::

## 绝对定位

`position: absolute;`

元素会被移出正常文档流, 并不为元素预留空间, 通过指定元素相对于最近的非`static`定位祖先元素的偏移, 来确定元素位置.绝对定位的元素可以设置外边距`margins`, 且不会与其他边距合并.

使用场景: **子级**绝对定位, **父级**相对定位.

例子1(直接使用绝对定位):

::::demo

:::code-tabs
@tab:active HTML
```html
<p>你可以打开F12看见, 红块和边界间隔都是100px</p>
<div class="a">
   <div class="b"></div>
</div>
```

@tab CSS
```css
.a {
   margin: auto;
   width: 400px;
   height: 400px;
   background-color: orange;
}

.b {
   position: absolute;
   top: 100px;
   left: 100px;
   width: 200px;
   height: 200px;
   background-color: red;
}
```
:::

::::

例子2(子级绝对定位, 父级相对定位):

::::demo

:::code-tabs
@tab:active HTML
```html
<p>你可以打开F12看见, 红块和边界间隔都是100px</p>
<div class="a">
   <div class="b"></div>
</div>
```

@tab CSS
```css
.a {
   margin: auto;
   position: relative;
   width: 400px;
   height: 400px;
   background-color: orange;
}

.b {
   position: absolute;
   top: 100px;
   left: 100px;
   width: 200px;
   height: 200px;
   background-color: red;
}
```
:::

::::

## 定位居中

实现步骤:

1. 绝对定位.
2. 水平, 垂直偏移量为`50%`.
3. ==子级==向左, 上移动==自身尺寸==的==一半==.
   * 左, 上的外边距为 -尺寸的一半.
   * `transform: translate(-50%, -50%)`方便.

例子:

### 方法一

::::demo

:::code-tabs
@tab:active HTML
```html
<div>
   <img src="assets/304ba504f27b147a71e00dd072a6be3dbb43138e.gif" width="500" alt="img">
</div>
```

@tab CSS
```css
div{
   width: 100%;
   height: 500px;
}

img{
   position: absolute;
   top: 50%;
   left: 50%;
   margin-top: -250px; /*[!code ++]*/
   margin-left: -250px; /*[!code ++]*/
}
```
:::

::::

### 方法二

::::demo

:::code-tabs
@tab:active HTML
```html
<div>
   <img src="assets/304ba504f27b147a71e00dd072a6be3dbb43138e.gif" width="500" alt="img">
</div>
```

@tab CSS
```css
div{
   width: 100%;
   height: 500px;
}

img{
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%) /*[!code ++]*/
}
```
:::

::::

## 固定定位

`position: fixed`

元素会被移出正常文档流, 并不为元素预留空间, 而是通过指定元素相对于屏幕视口(viewport)的位置来指定元素位置. 元素的位置在屏幕滚动时不会改变.

场景: 顶部导航栏, 随着滚动条滚动, 固定在顶部.

例子:

::::demo

:::code-tabs
@tab:active HTML
```html
<div class="container">
   <div class="nav">导航栏</div>
   <p>可以输入 p{$}*100 快速生成</p>
   <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p><p>15</p><p>16</p><p>17</p><p>18</p><p>19</p><p>20</p><p>21</p><p>22</p><p>23</p><p>24</p><p>25</p><p>26</p><p>27</p><p>28</p><p>29</p><p>30</p><p>31</p><p>32</p><p>33</p><p>34</p><p>35</p><p>36</p><p>37</p><p>38</p><p>39</p><p>40</p><p>41</p><p>42</p><p>43</p><p>44</p><p>45</p><p>46</p><p>47</p><p>48</p><p>49</p><p>50</p><p>51</p><p>52</p><p>53</p><p>54</p><p>55</p><p>56</p><p>57</p><p>58</p><p>59</p><p>60</p><p>61</p><p>62</p><p>63</p><p>64</p><p>65</p><p>66</p><p>67</p><p>68</p><p>69</p><p>70</p><p>71</p><p>72</p><p>73</p><p>74</p><p>75</p><p>76</p><p>77</p><p>78</p><p>79</p><p>80</p><p>81</p><p>82</p><p>83</p><p>84</p><p>85</p><p>86</p><p>87</p><p>88</p><p>89</p><p>90</p><p>91</p><p>92</p><p>93</p><p>94</p><p>95</p><p>96</p><p>97</p><p>98</p><p>99</p><p>100</p>
</div>
```

@tab CSS
```css
* {
	padding: 0;
	margin: 0;
}

.container {
	padding-top: 64px;
	height: 400px;
}

.nav {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 64px;
	background-color: orange;
	text-align: center;
	line-height: 64px;
}
```
:::

::::
