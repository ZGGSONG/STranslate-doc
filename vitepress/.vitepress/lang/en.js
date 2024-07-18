export const META_URL = "https://stranslate.zggsong.com";
export const META_TITLE = "STranslate";
export const META_DESCRIPTION = "A ready-to-use, ready-to-go translation ocr tool developed by WPF";

export const en = {
  description: META_DESCRIPTION,
  themeConfig: {
    nav: [
      { text: "Home", link: "/en/" },
      { text: "Document", link: "/en/docs/" },
      { text: "Download", link: "/en/download" },
      { text: "About", link: "/en/about" },
    ],
    sidebar: {
      "/en/docs/": [
        {
          text: "Document",
          link: "/en/docs/",
          items: [
            { text: "ExternalCall", link: "/en/docs/invoke" },
            { text: "Install", link: "/en/docs/(un)install" },
            {
              text: "Configuration",
              collapsed: true,
              items: [
                { text: "Common", link: "/en/docs/config/common" },
                { text: "Hotkey", link: "/en/docs/config/hotkey" },
                { text: "Translate", link: "/en/docs/config/translate" },
                { text: "Replace", link: "/docs/config/replace" },
                { text: "OCR", link: "/en/docs/config/ocr" },
                { text: "TTS", link: "/en/docs/config/tts" },
                { text: "History", link: "/en/docs/config/history" },
                { text: "Export", link: "/en/docs/config/backup" },
                { text: "About", link: "/en/docs/config/about" },
              ],
            },
            {
              text: "API Application",
              link: "/en/docs/api/",
              collapsed: true,
              items: [
                {
                  text: "TextTranslation",
                  collapsed: true,
                  items: [
                    { text: "STranslate", link: "/en/docs/api/translate/local" },
                    { text: "ECDict", link: "/en/docs/api/translate/ecdict" },
                    { text: "Microsoft", link: "/en/docs/api/translate/microsoft" },
                    { text: "Ali", link: "/en/docs/api/translate/ali" },
                    { text: "Baidu", link: "/en/docs/api/translate/baidu" },
                    { text: "Tencent", link: "/en/docs/api/translate/tencent" },
                    { text: "Youdao", link: "/en/docs/api/translate/youdao" },
                    { text: "Niutrans", link: "/en/docs/api/translate/niutrans", },
                    { text: "Volcengine", link: "/en/docs/api/translate/volcengine", },
                    { text: "Caiyun", link: "/en/docs/api/translate/caiyun" },
                    { text: "OpenAI", link: "/en/docs/api/translate/openai" },
                    { text: "Gemini", link: "/en/docs/api/translate/gemini" },
                    { text: "ChatGLM", link: "/en/docs/api/translate/chatglm" },
                    { text: "Ollama", link: "/en/docs/api/translate/ollama" },
                    { text: "DeepL", link: "/en/docs/api/translate/deepl" },
                  ],
                },
                {
                  text: "OCR",
                  collapsed: true,
                  items: [
                    { text: "PaddleOCR", link: "/en/docs/api/ocr/paddleocr" },
                    { text: "BaiduOCR", link: "/en/docs/api/ocr/baidu" },
                    { text: "TencentOCR", link: "/en/docs/api/ocr/tencent" },
                    { text: "VolcengineOCR", link: "/en/docs/api/ocr/volcengine" },
                  ],
                },
                {
                  text: "TTS",
                  collapsed: true,
                  items: [
                    { text: "Offline TTS", link: "/en/docs/api/tts/local" },
                    { text: "Azure TTS", link: "/en/docs/api/tts/azure" },
                  ],
                },
              ],
            },
            { text: "FAQ", link: "/en/docs/faq" },
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
      text: "Edit this page on GitHub",
    },
  },
};
