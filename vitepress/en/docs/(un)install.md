---
title: STranslate
titleTemplate: Install/Uninstall
---

# Installation

## Download

### Direct Download

[Go to Download](../download.md)

### Scoop
1. Install Scoop [Scoop](https://scoop.sh/)
2. Add source and install `STranslate`
3. [Scoop.sh](https://scoop.sh/#/apps?q=STranslate)
```shell
scoop bucket add extras
scoop install extras/stranslate
```

[scoop-cn](https://github.com/duzyn/scoop-cn) can be used in China. For specific steps, query this `Readme`

## Default Method (Recommended)

Download the compressed package `STranslate_` + version number + `_win-x64`, and run it by double-clicking. 

> If prompted to download .NET 8 runtime, follow the installation guide. 
> Download address: https://dotnet.microsoft.com/en-us/download/dotnet/8.0

## Independent Installation
Download the compressed package `STranslate_` + version number + `_win-x64_self_contained`, which does not require .NET runtime and can be run directly, but this method does not support software one-key upgrade functionality, and it is recommended to use the previous installation method.

# Uninstallation

## Clean up Cache
Open cmd and run the following command:
> Or double-click the `ClearCache.bat` file in the directory.
```shell
rd /s /q "%localappdata%\stranslate"
```

## Delete Software
Delete the software directory.