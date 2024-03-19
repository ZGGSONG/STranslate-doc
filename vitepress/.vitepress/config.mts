import { defineConfig } from "vitepress";
import { zhConfig } from "./lang/zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "STranslate",
  description: "WPF 开发的一款即开即用、即用即走的翻译(OCR)工具",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/logo/favicon.ico" }]],
  themeConfig: {
    logo: "/logo/logo.svg",
    siteTitle: "STranslate",
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
          en: {},
        },
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/ZGGSONG/STranslate" },
    ],
  },
  locales: {
    root: {
      label: "中文",
      lang: "zh",
      ...zhConfig,
    },
    // en: {
    //   label: "English",
    //   lang: "en",
    //   ...enConfig,
    // },
  },
});
