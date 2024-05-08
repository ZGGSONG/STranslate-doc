---
title: STranslate
titleTemplate: ExternalCall
---

# Integration Call

> Similar to the desktop software "有道翻译官" (Youdao Translator Official)

![snipdo](/img/snipdo.gif)

[Click to download](https://apps.microsoft.com/detail/9npz2tvkjvt7?hl=en&gl=CN)

# API Call

> `/` and `translate` are similar

1. `/translate`
     - `GET`: Input translation
     - `POST` `$content`: Translate content immediately
2. `/translate_force`
     - `GET`: Input translation
     - `POST` `$content`: Force translate content immediately
3. `/translate_input` `GET`: Input translation
4. `/translate_ocr`
     - `GET`: OCR screenshot
     - `POST` `$filepath`: Recognize image text and translate
5. `/translate_crossword` `GET`: Crossword translation
6. `/translate_mousehook` `GET`: Open/close mouse hook
7. `/listenclipboard` `GET`: Open/close clipboard listener
8. `/ocr`
     - `GET`: Screenshot OCR
     - `POST` `$filepath`: Recognize image text
9. `/ocr_silence`
     - `GET`: Silent screenshot OCR
     - `POST`: Recognize image text silently and copy to clipboard
10. `/ocr_qrcode`
     - `GET`: Screenshot QR code recognition
     - `POST`: Recognize QR code in image
11. `/open_window` `GET`: Open main window
12. `/open_preference` `GET`: Open preference window
13. `/open_history` `GET`: Open history record page
14. `/forbiddenhotkey` `GET`: Disable/enable global hotkey

Translation example:

```shell
#parameter is the content to be translated
curl http://127.0.0.1:50020/translate -d "Hello world."
```

OCR Example:

```shell
#parameter is a file path
curl http://127.0.0.1:50020/ocr -d "D:\\tmp\\stranslate.png"
```