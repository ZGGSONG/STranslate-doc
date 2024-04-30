---
title: STranslate
titleTemplate: Service Request
---

# Service Request

## Text Translate

At present, the software provides local services and some free public API calls, the number of overall is not a lot, and public API due to the number of people using too much, there is a certain probability of repeated failure after a period of time to re-entry into force, the use of experience is not good. On the one hand, you can use local services and self-built to alleviate, but overall translation services rely on personal reverse major platform services and then public maintenance costs are too large, or honest access to major platforms to translate API services, after all, major platforms to individual users of free use of the quota is still very full, basically can be realized by registering that is free to use.

---

The following APIs have been accessed so far

- [ECDict](https://github.com/skywind3000/ECDICT)
- [Microsoft](https://azure.microsoft.com/zh-cn/products/--services/ai-translator)
- [Ali](https://www.aliyun.com/product/ai/base_alimt)
- [Baidu](https://fanyi-api.baidu.com)
- [Tencent](https://cloud.tencent.com/product/tmt)
- [Youdao](https://ai.youdao.com/)
- [Niutrans](https://niutrans.com/trans?type=text)
- [Volcengine](https://www.volcengine.com/)
- [Caiyun](https://dashboard.caiyunapp.com/user/sign_in/)
- [OpenAI](https://openai.com)
- [Gemini](https://makersuite.google.com/app/apikey)
- [ChatGLM](https://open.bigmodel.cn/)
- [Ollama](https://ollama.com/)

> Some of the vendor APIs in the AI large model translation have the same interface as the OpenAI API, so you can directly use OpenAI to configure the API and model key to complete the configuration，如：[01](https://lingyiwanwu.com/)、[DeepSeek](https://www.deepseek.com/)、[Groq](https://wow.groq.com/)、[Kimi](https://www.moonshot.cn/) 

## OCR

The software supports a variety of text recognition (OCR) services, comes with OCR services of high quality and speed, but the model only supports the Chinese and English, digital punctuation, if there are other needs, please apply for the API supported by their own

> Due to the built-in PaddleOCR, the model dependencies and other files are relatively large, resulting in a larger overall software package.

- PaddleOCR(Completely offline)
- BaiduOCR
- TencentOCR

## TTS

The software integrates text-to-speech (TTS) services, and the currently supported TTS services are as follows

- [Offline TTS](https://learn.microsoft.com/zh-cn/dotnet/api/system.speech.synthesis.speechsynthesizer?view=dotnet-plat-ext-8.0)
- [Azure TTS](https://azure.microsoft.com/zh-cn/products/ai-services/text-to-speech)
