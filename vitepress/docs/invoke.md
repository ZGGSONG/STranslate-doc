---
title: STranslate
titleTemplate: 集成调用
---

# 集成调用

> 类似于`有道翻译官`桌面软件的使用体验

![snipdo](/img/snipdo.gif)

安装 `SnipDo` [点击下载](https://apps.microsoft.com/detail/9npz2tvkjvt7?hl=zh-cn&gl=CN)

# Api调用

> `/` 与 `/translate` 相同

1. `/translate`
    - `GET`: 输入翻译
    - `POST` `$content`: 立即翻译内容
2. `/translate_force`
    - `GET`: 输入翻译
    - `POST` `$content`: 立即强制翻译内容
3. `/translate_input` `GET`: 输入翻译
4. `/translate_ocr`
    - `GET`: 截图翻译
    - `POST` `$filepath`: 识别图片文字并翻译
5. `/translate_crossword` `GET`: 划词翻译
6. `/translate_mousehook` `GET`: 打开/关闭监听鼠标划词
7. `/listenclipboard` `GET`: 打开/关闭监听剪贴板
8. `/ocr`:
    - `GET`: 截图OCR
    - `POST` `$filepath`: 识别图片文字
9. `/ocr_silence`:
    - `GET`: 静默截图OCR
    - `POST`: 静默识别图片文字并复制到剪贴板
10. `/ocr_qrcode`:
    - `GET`: 截图识别二维码
    - `POST`: 识别图片二维码
11. `/open_window` `GET`: 打开主界面
12. `/open_preference` `GET`: 打开设置界面
13. `/open_history` `GET`: 打开历史记录页面
14. `/forbiddenhotkey` `GET`: 禁用/启用全局热键