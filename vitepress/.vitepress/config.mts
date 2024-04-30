import { defineConfig } from "vitepress";
import { zh } from "./lang/zh";
import { en } from "./lang/en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "STranslate",
  description: "WPF 开发的一款即开即用、即用即走的翻译(OCR)工具",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/logo/favicon.ico" }]],
  themeConfig: {
    logo: "/logo/logo.svg",
    siteTitle: "STranslate",
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
                  closeText: "关闭",
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: "Search docs",
                buttonAriaLabel: "Search docs",
              },
              modal: {
                noResultsText: "No recent searches",
                resetButtonTitle: "Clear the search criteria",
                footer: {
                  selectText: "to select",
                  navigateText: "to navigate",
                  closeText: "to close",
                },
              },
            },
          },
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
      ...zh,
    },
    en: {
      label: "English",
      lang: "en",
      ...en,
    },
  },
});
