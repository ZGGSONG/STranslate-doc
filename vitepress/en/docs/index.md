---
title: STranslate
titleTemplate: User Manual
---

# User Manual

## Introduction

After opening the software, it will silently run in the background, waiting to be called upon. Clicking anywhere outside the software will automatically hide it.

| Bright | Dark |
| :--: | :--: |
| ![](/img/mainview.png) | ![](/img/mainview2.png) |

## Global Hotkeys

| Hotkey | Function | Demo |
| :-- | :-- | :-- |
| `Alt` + `A` | Open software interface, input content and press `Enter` to translate | ![](/img/input.gif) |
| `Alt` + `D` | Copy current mouse selection and translate | ![](/img/crossword.gif) |
| `Alt` + `S` | Take a screenshot of the selected area and translate | ![](/img/screenshot.gif) |
| `Alt` + `G` | Open main interface | ![](/img/open.gif) |
| `Alt` + `Shift` + `A` | Open clipboard monitoring, translate text after copying | ![](/img/clipboardmonitor.gif) |
| `Alt` + `Shift` + `D` | Open mouse hover translation, translate text after selecting | ![](/img/mousehook.gif) |
| `Alt` + `Shift` + `S` | Offline OCR (based on PaddleOCR) | ![](/img/ocr.gif) |
| `Alt` + `Shift` + `F` | Silent OCR (auto-copy to clipboard after OCR) | ![](/img/silentocr.gif) |

## Software Hotkeys
| Hotkey | Function |
| :-- | :-- |
| `ESC` | Hide interface (including cancel request) |
| `Ctrl` + `,` | Open settings |
| `Ctrl` + `/` | Open history |
| `Ctrl` + `Shift` + `A` | Hide/show input box |
| `Ctrl` + `Shift` + `Q` | Exit program |
| `Ctrl` + `Shift` + `T` | Toggle on top |
| `Ctrl` + `Shift` + ` R` | Switch theme |
| `Ctrl` + `ScrollUp` | Zoom in |
| `Ctrl` + `ScrollDown` | Zoom out |
| `Ctrl` + `**` | Reset default font size |
| `Ctrl` + `+` | Increase interface width and maximum height |
| `Ctrl` + `-` | Decrease interface width and maximum height |
| `Ctrl` + `0` | Restore interface configuration width and maximum height |
| `Ctrl` + `Alt` + `+` | Increase width |
| `Ctrl` + `Alt` + `-` | Decrease width |
| `Ctrl` + `Shift` + `+` | Increase maximum height |
| `Ctrl` + `Shift` + `-` | Decrease maximum height |
| `Ctrl` + `1...8` | Copy translation results in sequence |
| `Ctrl` + `9` | Copy last translation result |

## QR Code Function

| Method 1 | Method 2 | Method 3 |
| :--: | :--: | :--: |
|![qrcode](/img/qrcode.png)|![qrcode2](/img/qrcode2.png) | ![qrcode3](/img/qrcode3.png) |

## Upgrade Function

> Files are on GitHub, need to use a proxy, otherwise, it will be very slow！！！  
> In addition, the downloaded file does not contain the `Runtime` version.
> If you don't want to install `. NET8 Runtime` Please go to the [Release](https://github.com/ZGGSONG/STranslate/releases) page to download the software compression package marked with `self contained`

![update](/img/update.gif)

## Translation

- [STranslate Service (built-in)](https://github.com/ZGGSONG/deepl-api)
- Download the execution file for the corresponding platform [here](https://github.com/ZGGSONG/STranslate/releases/tag/0.01)
- Download the author's packaged [Docker image](https://hub.docker.com/r/zggsong/translate)
- Open source project [https://github.com/OwO-Network/DeepLX](https://github.com/OwO-Network/DeepLX)
- [Simplified English Dictionary](https://github.com/skywind3000/ECDICT)
- [Microsoft Translation](https://azure.microsoft.com/zh-cn/products/--services/ai-translator)
- [Alibaba Translation](https://www.aliyun.com/product/ai/base_alimt)
- [Baidu Translation](https://fanyi-api.baidu.com)
- [Tencent Translation](https://cloud.tencent.com/product/tmt)
- [Youdao Translation](https://ai.youdao.com/)
- [Xiaoniu Translation](https://niutrans.com/trans?type=text)
- [Huawei Engine](https://www.volcengine.com/)
- [Caiyun Translation](https://dashboard.caiyunapp.com/user/sign_in/)
- [OpenAI](https://openai.com)
- [Gemini](https://makersuite.google.com/app/apikey)
- [ZhiPu AI](https://open.bigmodel.cn/)
- [Ollama](https://ollama.com)
- [Linyi](https://lingyiwanwu.com/)
- [DeepSeek](https://www.deepseek.com/)
- [Groq](https://wow.groq.com/)
- [Kimi](https://www.moonshot.cn/)
- [baidu qianfan](https://qianfan.cloud.baidu.com/)
> Theoretically supports all AI platforms compatible with OpenAI API  
> Domestic accessible public `Gemini API`: `https://gemini.vercel.zggsong.com`  
> Simplified English Dictionary is on GitHub, slow to download, can manually click to download offline resource package ([official-offline resource package](https://github.com/skywind3000/ECDICT/releases/download/1.0.28/ecdict-sqlite-28.zip), [domestic-offline resource package](https://www.123pan.com/s/AxlRjv-u5VmA.html)), put it in the software root directory and click to download again to use immediately

## TTS

- [Offline TTS (built-in)](https://learn.microsoft.com/zh-cn/dotnet/api/system.speech.synthesis.speechsynthesizer?view=dotnet-plat-ext-8.0)
- [Azure TTS](https://azure.microsoft.com/zh-cn/products/ai-services/text-to-speech)

## OCR

- PaddleOCR (built-in)
- Baidu Universal Text Recognition
- Tencent Universal Printed Text Recognition

## Thanks

- Special thanks to [zu1k](https://github.com/zu1k)
- Thanks to [Bob](https://bobtranslate.com/guide/) for inspiration
- Thanks to [PaddleOCRSharp](https://gitee.com/raoyutian/paddle-ocrsharp) for wrapping PaddleOCR
- Thanks to [WpfTool](https://github.com/NPCDW/WpfTool) for screenshot functionality
- Thanks to [Tai](https://github.com/Planshit/Tai) for upgrade functionality
- Thanks to [LxgwWenKai](https://github.com/lxgw/LxgwWenKai) for open-source font
- Thanks to [pot-desktop](https://pot-app.com/) for reference prompt design


## Tips

If you think it's not bad, you can buy the author a cup of coffee

| WeChat | Alipay |
| :--: | :--: |
|![wehcatpay](/img/wechatpay.jpg) | ![alipay](/img/alipay.jpg) |