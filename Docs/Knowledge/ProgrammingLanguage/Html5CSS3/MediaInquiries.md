# 媒体查询

媒体查询能够**检测视口的宽度**,然后编写**差异化的CSS样式**

当某个**条件成立**,**执行对应的CSS样式**

```css
@media (媒体特征) {
    选择器 {
        CSS属性
    }
}
```

目前rem布局方案中,将网页等分成**10**份,Html标签的字号为**视口宽度**的**1/10**

```css
@media (width: 320px) {
    html {
        font-size: 32px;
    }
}

@media (width: 375px) {
    html {
        font-size: 37.5px;
    }
}

@media (width: 414px) {
    html {
        font-size: 41.4px;
    }
}
```

## 媒体查询的完整写法(了解)

`@media 关键词 媒体类型 and (媒体特性) { CSS代码 }`

* 关键词/逻辑操作符
  * and
  * only
  * not
* 媒体类型
  * 用来**区分设备类型**,如屏幕设备,打印设备等,其中手机,电脑,平板,都属于屏幕设备
  * `screen`:带屏幕设备
  * `print`:打印预览模式
  * `speech`:屏幕阅读模式
  * `all`:默认,包括以上3种情形
* 媒体特性
  * `width`,`height`:视口宽高
  * `max-width`,`max-height`:视口最大宽高
  * `min-width`,`min-height`:视口最小宽高
  * `orientation`:屏幕方向
    * `portrit`:竖屏
    * `landscape`:横屏

## 外部CSS

`<link rel="stylesheet" media="逻辑符 媒体类型 and (媒体特性) href="CSS"`
