---
title: STranslate
titleTemplate: 服务申请
---

# 服务申请

## 文本翻译

目前软件提供本地服务和部分免费公开API调用，数量总体来说不算很多，并且公开API由于使用人数过多，有一定概率反复失效过一段时间重新生效，使用体验不佳。一方面可以使用本地服务和自建以缓解，但总体来说翻译服务靠个人逆向各大平台的服务再公开维护成本过大，还是老老实实接入各大平台翻译API服务吧，毕竟各大平台给个人用户的免费使用额度还是很充盈的，基本可以实现注册即免费使用。

---

目前已经接入了如下API

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
- [Ollama](https://ollama.com/)

> AI大模型翻译中部分厂商API与OpenAI API接口相同，可直接使用OpenAI进行配置，配置API和模型密钥即可完成，如：[零一万物](https://lingyiwanwu.com/)、[DeepSeek](https://www.deepseek.com/)、[Groq](https://wow.groq.com/) 等等

## 文字识别

软件支持多种文字识别(OCR)服务，自带OCR服务质量高，速度快，不过模型仅支持中英文、数字标点，如有别的需求，请自行申请所支持的API

> 由于内置PaddleOCR，模型依赖等文件比较大，导致软件整体打包后比较大

- PaddleOCR(完全离线)
- 百度通用文字识别
- 腾讯通用印刷体识别

## 语音合成

软件集成文本转语音(TTS)服务，目前支持的TTS服务如下

- [离线TTS](https://learn.microsoft.com/zh-cn/dotnet/api/system.speech.synthesis.speechsynthesizer?view=dotnet-plat-ext-8.0)
- [Azure TTS](https://azure.microsoft.com/zh-cn/products/ai-services/text-to-speech)
