export const META_URL = "https://stranslate.zggsong.com";
export const META_TITLE = "STranslate";
export const META_DESCRIPTION =
  "WPF 开发的一款即开即用、即用即走的翻译(OCR)工具";

export const zh = {
  description: META_DESCRIPTION,
  themeConfig: {
    nav: [
      { text: "🛠️ DeerAPI", link: "/promotion" },
      { text: "首页", link: "/" },
      { text: "使用说明", link: "/docs/" },
      { text: "下载", link: "/download" },
      { text: "关于", link: "/about" },
    ],
    sidebar: {
      "/docs/": [
        {
          text: "使用说明",
          link: "/docs/",
          items: [
            { text: "集成调用", link: "/docs/invoke" },
            { text: "安装卸载", link: "/docs/(un)install" },
            {
              text: "软件配置",
              collapsed: true,
              items: [
                { text: "常规设置", link: "/docs/config/common" },
                { text: "热键设置", link: "/docs/config/hotkey" },
                { text: "翻译服务", link: "/docs/config/translate" },
                { text: "替换翻译", link: "/docs/config/replace" },
                { text: "OCR服务", link: "/docs/config/ocr" },
                { text: "语音服务", link: "/docs/config/tts" },
                { text: "历史记录", link: "/docs/config/history" },
                { text: "导入导出", link: "/docs/config/backup" },
                { text: "关于软件", link: "/docs/config/about" },
              ],
            },
            {
              text: "服务申请",
              link: "/docs/api/",
              collapsed: true,
              items: [
                {
                  text: "文本翻译",
                  collapsed: true,
                  items: [
                    { text: "★本地翻译★", link: "/docs/api/translate/local" },
                    { text: "简明英汉词典", link: "/docs/api/translate/ecdict" },
                    { text: "微软翻译", link: "/docs/api/translate/microsoft" },
                    { text: "阿里翻译", link: "/docs/api/translate/ali" },
                    { text: "百度翻译", link: "/docs/api/translate/baidu" },
                    { text: "腾讯翻译君", link: "/docs/api/translate/tencent" },
                    { text: "有道翻译", link: "/docs/api/translate/youdao" },
                    { text: "小牛翻译", link: "/docs/api/translate/niutrans", },
                    { text: "火山翻译", link: "/docs/api/translate/volcengine", },
                    { text: "彩云小译", link: "/docs/api/translate/caiyun" },
                    { text: "OpenAI", link: "/docs/api/translate/openai" },
                    { text: "Gemini", link: "/docs/api/translate/gemini" },
                    { text: "智谱AI", link: "/docs/api/translate/chatglm" },
                    { text: "Ollama", link: "/docs/api/translate/ollama" },
                    { text: "DeepL", link: "/docs/api/translate/deepl" },
                  ],
                },
                {
                  text: "文本识别",
                  collapsed: true,
                  items: [
                    { text: "WeChatOCR", link: "/docs/api/ocr/wechatocr" },
                    { text: "PaddleOCR", link: "/docs/api/ocr/paddleocr" },
                    { text: "百度通用文字识别", link: "/docs/api/ocr/baidu" },
                    { text: "腾讯通用印刷体识别", link: "/docs/api/ocr/tencent" },
                    { text: "火山文字识别", link: "/docs/api/ocr/volcengine" },
                  ],
                },
                {
                  text: "语音合成",
                  collapsed: true,
                  items: [
                    { text: "离线 TTS", link: "/docs/api/tts/local" },
                    { text: "Azure TTS", link: "/docs/api/tts/azure" },
                  ],
                },
              ],
            },
            { text: "FAQ", link: "/docs/faq" },
          ],
        },
      ],
    },
    footer: {
      copyright: "Copyright © 2024-present ZGGSONG",
    },
    editLink: {
      pattern:
        "https://github.com/ZGGSONG/STranslate-doc/edit/main/vitepress/:path",
      text: "在 GitHub 上编辑此页面",
    },
  },
};
