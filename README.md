## 构建

- 前端环境
	- Node.js(>=18.20.1)
	- Npm(>=10.5.0)/Yarn(>=v1.22.22)
- 开发工具
	- VsCode

### 安装前端环境

> 推荐使用 [nvm](https://github.com/coreybutler/nvm-windows) 安装配置 Node.js，详细教程可参考 [windows](https://juejin.cn/post/7093787595951308836)、[macos](https://blog.csdn.net/CaptainJava/article/details/83866880)

安装好`nvm`之后使用`cmd`安装`Node.js(18.20.1)`

<details>

<summary>网络不好的话请换源</summary>

阿里源
```shell
nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm node_mirror https://npmmirror.com/mirrors/node/
```

其他源：[nvm 切换国内镜像](https://nvm.p6p.net/use/mirror.html)

</details>

```shell
# 安装 nodejs
nvm install 18.20.1

# 等待结束

# 使用 nodejs
nvm use 18.20.1

# 检查版本
node -v
# 输出：v18.20.1

npm -v
# 输出：10.5.0
```

### 编译项目

`VsCode`打开项目文件夹使用`Ctrl`+`J`/`Command`+`J`打开终端进行编译

```shell
# 开始编译，网不好的话请尝试配置代理或者参考上面换源
npm run dev

# 编译成功查看输出
 vitepress v1.0.0-rc.45

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### 预览编译效果

根据编译输出结果浏览器访问 `http://localhost:5173/` 即可看到网页内容

### 目录结构

- [Markdown 基础](https://www.runoob.com/markdown/md-tutorial.html)
- 文档结构

```txt
.
|-- node_modules  # 库文件，不用管
|-- package.json # 项目配置文件，不用管
|-- vitepress # 文档目录
|   |-- index.md # 首页
|   |-- about.md # 关于页面
|   |-- download.md # 下载页面
|   |-- docs # 文档内容（中文）
|   |   |-- (un)install.md # 安装写在目录
|   |   |-- api
|   |   |   |-- index.md # Api 默认页面
|   |   |   |-- ocr
|   |   |   |   |-- baidu.md # 百度 ocr 配置，下面以此类推
|   |   |   |   |-- paddleocr.md
|   |   |   |   |-- tencent.md
|   |   |   |   `-- volcengine.md
|   |   |   |-- translate
|   |   |   |   |-- ali.md # 阿里翻译配置，下面以此类推
|   |   |   |   |-- baidu.md
|   |   |   |   |-- caiyun.md
|   |   |   |   |-- chatglm.md
|   |   |   |   |-- deepl.md
|   |   |   |   |-- ecdict.md
|   |   |   |   |-- gemini.md
|   |   |   |   |-- local.md
|   |   |   |   |-- microsoft.md
|   |   |   |   |-- niutrans.md
|   |   |   |   |-- ollama.md
|   |   |   |   |-- openai.md
|   |   |   |   |-- tencent.md
|   |   |   |   |-- volcengine.md
|   |   |   |   `-- youdao.md
|   |   |   `-- tts
|   |   |       |-- azure.md # Azure tts 配置，下面以此类推
|   |   |       `-- local.md
|   |   |-- config
|   |   |   |-- about.md # 软件介绍页面，下面以此类推
|   |   |   |-- backup.md
|   |   |   |-- common.md
|   |   |   |-- history.md
|   |   |   |-- hotkey.md
|   |   |   |-- ocr.md
|   |   |   |-- replace.md
|   |   |   |-- translate.md
|   |   |   `-- tts.md
|   |   |-- faq.md # 问题页面
|   |   |-- index.md # 使用说明页面
|   |   `-- invoke.md # 集成调用页面
|   |-- en # 文档内容（英文）
|   |   |-- index.md # 英文首页
|   |   |-- download.md # 英文下载页
|   |   |-- about.md # 英文关于页面
|   |   |-- docs
|   |   |   |-- (un)install.md
|   |   |   |-- api
|   |   |   |   |-- index.md
|   |   |   |   |-- ocr
|   |   |   |   |   |-- baidu.md
|   |   |   |   |   |-- paddleocr.md
|   |   |   |   |   |-- tencent.md
|   |   |   |   |   `-- volcengine.md
|   |   |   |   |-- translate
|   |   |   |   |   |-- ali.md
|   |   |   |   |   |-- baidu.md
|   |   |   |   |   |-- caiyun.md
|   |   |   |   |   |-- chatglm.md
|   |   |   |   |   |-- deepl.md
|   |   |   |   |   |-- ecdict.md
|   |   |   |   |   |-- gemini.md
|   |   |   |   |   |-- local.md
|   |   |   |   |   |-- microsoft.md
|   |   |   |   |   |-- niutrans.md
|   |   |   |   |   |-- ollama.md
|   |   |   |   |   |-- openai.md
|   |   |   |   |   |-- tencent.md
|   |   |   |   |   |-- volcengine.md
|   |   |   |   |   `-- youdao.md
|   |   |   |   `-- tts
|   |   |   |       |-- azure.md
|   |   |   |       `-- local.md
|   |   |   |-- config
|   |   |   |   |-- about.md
|   |   |   |   |-- backup.md
|   |   |   |   |-- common.md
|   |   |   |   |-- history.md
|   |   |   |   |-- hotkey.md
|   |   |   |   |-- ocr.md
|   |   |   |   |-- replace.md
|   |   |   |   |-- translate.md
|   |   |   |   `-- tts.md
|   |   |   |-- faq.md
|   |   |   |-- index.md
|   |   |   `-- invoke.md
|   |-- .vitepress # vitepress 配置目录，一般不用管
|   |   |-- lang # 增删文档页面需要更新
|   |   |   |-- en.js
|   |   |   `-- zh.js
|   `-- public # 编译打包自动生成文件，不用管
|       |-- img
|       |   |-- alipay.jpg
|       |   |-- api
|       |   |   |-- ali_01.png
|       |   |   |-- ali_02.png
|       |   |   |-- ali_03.png
|       |   |   |-- ali_04.png
|       |   |   |-- ali_05.png
|       |   |   |-- ali_06.png
|       |   |   |-- ali_07.gif
|       |   |   |-- baidu_01.png
|       |   |   |-- baidu_02.png
|       |   |   |-- caiyun_01.png
|       |   |   |-- caiyun_02.png
|       |   |   |-- chatglm_01.png
|       |   |   |-- chatglm_02.png
|       |   |   |-- chatglm_03.png
|       |   |   |-- chatglm_04.png
|       |   |   |-- openai.gif
|       |   |   `-- stranslate.gif
|       |   |-- clipboardmonitor.gif
|       |   |-- crossword.gif
|       |   |-- encrypt.gif
|       |   |-- favicon.svg
|       |   |-- history.gif
|       |   |-- hotkey.gif
|       |   |-- input.gif
|       |   |-- jb_beam.svg
|       |   |-- mainview.png
|       |   |-- mainview2.png
|       |   |-- mousehook.gif
|       |   |-- ocr.gif
|       |   |-- ocr_paddleocr.gif
|       |   |-- open.gif
|       |   |-- preference_backup.gif
|       |   |-- preference_ocr.gif
|       |   |-- preference_tts.gif
|       |   |-- qrcode.png
|       |   |-- qrcode2.png
|       |   |-- qrcode3.png
|       |   |-- screenshot.gif
|       |   |-- service-sort.gif
|       |   |-- service.gif
|       |   |-- service_add.gif
|       |   |-- silentocr.gif
|       |   |-- snipdo.gif
|       |   |-- snipdo_1.png
|       |   |-- snipdo_2.png
|       |   |-- snipdo_3.png
|       |   |-- snipdo_3_1.png
|       |   |-- snipdo_4.png
|       |   |-- tts_local.gif
|       |   |-- update.gif
|       |   |-- updatehotkey.gif
|       |   `-- wechatpay.jpg
|       `-- logo
|           |-- favicon.ico
|           `-- logo.svg
`-- yarn.lock # 版本信息，不用管
```

### 开始编写

现在就可以去目录里去找要更新的内容直接编写就可以啦，编写保存网页即可自动刷新

---

### 提交 PR

[Bilibili](https://www.bilibili.com/video/BV1Qp4y1T797)
