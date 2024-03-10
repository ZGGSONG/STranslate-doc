export const META_URL = "https://stranslate.zggsong.com";
export const META_TITLE = "STranslate";
export const META_DESCRIPTION =
  "WPF 开发的一款即开即用、即用即走的翻译(OCR)工具";

export const zhConfig = {
  description: META_DESCRIPTION,
  themeConfig: {
    nav: [
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
                { text: "服务设置", link: "/docs/config/service" },
                { text: "语音设置", link: "/docs/config/tts" },
                { text: "历史记录", link: "/docs/config/history" },
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
