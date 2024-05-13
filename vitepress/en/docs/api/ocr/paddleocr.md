---
title: STranslate
titleTemplate: PaddleOCR
---

No need to apply, it is built-in the software and can be added and enabled in the OCR service.

![](/img/ocr_paddleocr.gif)

## Description
Current offline OCR model supports the following languages:
`Auto`: Chinese, English (including Traditional), numbers, and punctuation
`Japanese`: Japanese OCR
`Korean`: Korean OCR

Note that when switching between PaddleOCR languages, it may cause a significant increase in memory usage, and the first-time loading of the OCR engine after switching will slow down. However, once loaded, the engine will be very fast, and subsequent memory usage will decrease to around 100MB (Base on Windows 10 22H2).

> Some people may ask why we don't cache multiple language OCR engines? The issue is that a single OCR engine takes up approximately 100MB of memory during testing and debugging, which is estimated to be unacceptably high for most users.