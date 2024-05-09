---
title: STranslate
titleTemplate: 安装卸载
---

# 安装

## 下载

### 直接下载

[前往下载](../download.md)

### Scoop

1. 安装Scoop [Scoop](https://scoop.sh/)
2. 添加源并安装`STranslate`

```shell
scoop bucket add hamster https://github.com/ZGGSONG/hamster
scoop install stranslate
```
> 其他官方知名`Bucket`已提交PR, 需要Merge, 后续合并了再更新到该文档中, 目前为本人个人自建`Bucket`

## 默认方式(推荐)

直接下载`STranslate_`+版本号+`_win-x64`的`exe`文件，双击运行即可

> 如果提示下载.net 8 runtime 跟随引导安装即可
> 下载地址：https://dotnet.microsoft.com/en-us/download/dotnet/8.0

## 独立安装

下载`STranslate_`+版本号+`_win-x64_self_contained`的`exe`文件，无需.net runtime即可直接运行，但是此方式安装不支持软件一键升级功能，推荐使用上一种安装方式

# 卸载

## 清理缓存

打开 cmd 运行下面的命令即可
> 或者双击运行目录下的`ClearCache.bat`文件
```shell
rd /s /q "%localappdata%\stranslate"
```

## 删除软件

删除软件运行目录

