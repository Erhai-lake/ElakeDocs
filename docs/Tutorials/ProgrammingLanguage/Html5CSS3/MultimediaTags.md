---
id: MultimediaTags
title: 多媒体标签
---

# 多媒体标签

## 音频标签

作用:在网页中插入一个音频

标签名:`audio`双标签

```html showLineNumbers
<audio src="音频地址" controls loop autoplay></audio>
```

属性:

* src
  * 音频地址,支持MP3,Ogg,Wav,必须属性
* controls
  * 显示音频控件(播放暂停等按钮)
* loop
  * 循环播放
* autoplay
  * 自动播放(为了提升用户体验,浏览器一般会禁用自动播放的功能)

## 视频标签

作用:在网页中插入一个视频

标签名:`video`双标签

```html showLineNumbers
<video src="视频地址" controls loop muted autoplay></video>
```

属性:

* src
  * 视频地址,支持MP4,WebM,Ogg,必须属性
* controls
  * 显示视频控件(播放暂停等按钮)
* loop
  * 循环播放
* muted
  * 静音播放
* autoplay
  * 自动播放(为了提升用户体验,浏览器一般会在静音状态播放)
