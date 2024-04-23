---
title: STranslate
titleTemplate: FAQ
---

# FAQ

1. 问：划词翻译无法获取? 答：建议开启管理员权限启动，`设置`-`常规设置`-`以管理员权限启动`-`重启软件`
2. 问：公共接口挂了怎么办？答：用的人越来越多，公共接口在官方认为是一个ip疯狂请求，会被限制请求，最好的是自己建一个，下面免费接口里面任选一种方式，在软件中修改或添加你的本地接口(如: `http://127.0.0.1:8080/translate`，具体ip、端口以实际为准) 注: [1.0.6.201](https://github.com/ZGGSONG/STranslate/releases/tag/1.0.6.201) 开始有本地服务，直接开启后可替代自建免费服务
3. 问：有没有别的官方接口？答：提`Feature Issue`，有空的话我会优先适配
4. 问：存在BUG？提[Issue](https://github.com/ZGGSONG/STranslate/issues)，最好带上所运行`软件版本`、`系统版本`、`复现条件`，有条件可以带上`视频`或`GIF`
5. 问：软件设置不生效？答：软件设置页面基本需要修改完配置，点击保存后生效，部分配置修改完立即生效的也在配置说明处标注了 `[立即生效]`
6. 问：静默OCR不出现内容？答：静默OCR，将OCR识别的文字写入剪贴板，所以不显示内容[#60](https://github.com/ZGGSONG/STranslate/issues/60)
7. 问：调用全局快捷键截图时主窗口不隐藏？答：全局快捷键触发截图时不主动操作窗口，仅当主窗口点击截图按钮时主动隐藏主窗口[#61](https://github.com/ZGGSONG/STranslate/issues/61)