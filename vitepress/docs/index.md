---
title: STranslate
titleTemplate: 使用说明
---

# 使用说明

## 介绍

打开软件后会静默在后台，等待调用，点击软件外部任意处即自动隐藏到后台——即用即走。

| 明亮 | 黑暗 |
| :--: | :--: |
| ![](/img/mainview.png) | ![](/img/mainview2.png) |

## 全局快捷键

| 快捷键 | 功能 | 演示 |
| :-- | :-- | :-- |
| `Alt` + `A` | 打开软件界面，输入内容按`回车`翻译 | ![](/img/input.gif) |
| `Alt` + `D` | 复制当前鼠标选中内容并翻译 | ![](/img/crossword.gif) |
| `Alt` + `S` | 截图选中区域内容并翻译 | ![](/img/screenshot.gif) |
| `Alt` + `G` | 打开主界面 | ![](/img/open.gif) |
| `Alt` + `Shift` + `A` | 打开监听剪贴板，复制文字后立即翻译 | ![](/img/clipboardmonitor.gif) |
| `Alt` + `Shift` + `D` | 打开监听鼠标划词，鼠标滑动选中文字立即翻译 | ![](/img/mousehook.gif) |
| `Alt` + `Shift` + `S` | 完全离线文字识别(基于PaddleOCR) | ![](/img/ocr.gif) |
| `Alt` + `Shift` + `F` | 静默OCR(OCR后自动复制到剪贴板) | ![](/img/silentocr.gif) |

## 软件内快捷键
| 快捷键 | 功能 |
| :-- | :-- |
| `ESC` | 隐藏界面(含取消请求) |
| `Ctrl` + `,` | 打开设置 |
| `Ctrl` + `/` | 打开历史记录 |
| `Ctrl` + `Shift` + `A` | 隐藏/显示输入框 |
| `Ctrl` + `Shift` + `Q` | 退出程序 |
| `Ctrl` + `Shift` + `T` | 置顶/取消置顶 |
| `Ctrl` + `滚轮上` | 放大文字 |
| `Ctrl` + `滚轮下` | 缩小文字 |
| `Ctrl` + **`** | 恢复默认文字大小 |
| `Ctrl` + `+` | 放大界面(宽度、最大高度) |
| `Ctrl` + `-` | 缩小界面(宽度、最大高度) |
| `Ctrl` + `0` | 界面恢复配置大小(宽度、最大高度) |
| `Ctrl` + `Alt` + `+` | 宽度增加 |
| `Ctrl` + `Alt` + `-` | 宽度减少 |
| `Ctrl` + `Shift` + `+` | 最大高度增加 |
| `Ctrl` + `Shift` + `-` | 最大高度减少 |
| `Ctrl` + `1...8` | 按顺序复制翻译服务结果 |
| `Ctrl` + `9` | 复制最后一个翻译服务结果 |

## 二维码功能

| 方式一 | 方式二 | 方式三 |
| :--: | :--: | :--: |
|![qrcode](/img/qrcode.png)|![qrcode2](/img/qrcode2.png) | ![qrcode3](/img/qrcode3.png) |

## 升级功能

> 文件在github上，需要挂代理，否则很慢！！！  
> 此外，升级方式所下载的为不带有`Runtime`的版本，如需带有`Runtime`版本，前往 [Release](https://github.com/ZGGSONG/STranslate/releases) 页面下载带有 `self contained` 标记的软件压缩包

![update](/img/update.gif)

## 翻译

- [STranslate服务(内置)](https://github.com/ZGGSONG/deepl-api)
- 下载对应平台可 [执行文件](https://github.com/ZGGSONG/STranslate/releases/tag/0.01)
- 下载作者打包的 [Docker镜像](https://hub.docker.com/r/zggsong/translate)
- 开源项目 [https://github.com/OwO-Network/DeepLX](https://github.com/OwO-Network/DeepLX)
- [简明英汉词典](https://github.com/skywind3000/ECDICT)
- [微软翻译](https://azure.microsoft.com/zh-cn/products/--services/ai-translator)
- [阿里翻译](https://www.aliyun.com/product/ai/base_alimt)
- [百度翻译](https://fanyi-api.baidu.com)
- [腾讯翻译君](https://cloud.tencent.com/product/tmt)
- [有道翻译](https://ai.youdao.com/)
- [小牛翻译](https://niutrans.com/trans?type=text)
- [火山引擎](https://www.volcengine.com/)
- [彩云小译](https://dashboard.caiyunapp.com/user/sign_in/)
- [OpenAI](https://openai.com)
- [Gemini](https://makersuite.google.com/app/apikey)
- [智谱AI](https://open.bigmodel.cn/)
- Ollama
- Linyi
- DeepSeek
- Groq
> 理论上支持所有兼容OpanAI API的AI平台API
> 国内可访问的公共 `Gemini API`: `https://gemini.vercel.zggsong.com`
> 简明英汉词典在Github上，下载慢的可以手动点击下载离线资源包([官方-离线资源包](https://github.com/skywind3000/ECDICT/releases/download/1.0.28/ecdict-sqlite-28.zip)、[国内-离线资源包](https://www.123pan.com/s/AxlRjv-u5VmA.html))，放在软件根目录后再次点击下载后即可立即使用

## TTS

- [离线TTS(内置)](https://learn.microsoft.com/zh-cn/dotnet/api/system.speech.synthesis.speechsynthesizer?view=dotnet-plat-ext-8.0)
- [Azure TTS](https://azure.microsoft.com/zh-cn/products/ai-services/text-to-speech)

## OCR

- PaddleOCR(内置)
- 百度通用文字识别
- 腾讯通用印刷体识别

## 感谢

- 特别鸣谢 [zu1k](https://github.com/zu1k)
- 感谢 [Bob](https://bobtranslate.com/guide/) 的启发
- 感谢 [PaddleOCRSharp](https://gitee.com/raoyutian/paddle-ocrsharp) 对paddleocr的封装
- 感谢 [WpfTool](https://github.com/NPCDW/WpfTool) 截图功能
- 感谢 [Tai](https://github.com/Planshit/Tai) 升级功能
- 感谢 [霞鹜文楷](https://github.com/lxgw/LxgwWenKai) 开源字体
- 感谢 ChatGPT
- 感谢 [pot-desktop](https://pot-app.com/) 参考prompt设计


## 打赏

觉得不错的话可以请作者喝杯阔落

| 微信 | 支付宝 |
| :--: | :--: |
|![wehcatpay](/img/wechatpay.jpg) | ![alipay](/img/alipay.jpg) |