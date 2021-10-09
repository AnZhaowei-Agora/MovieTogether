# 一起看电影

_[English](./README_EN.md) | 简体中文_

## 简介

本示例项目演示了如何基于 Agora 的 Web SDK `agora-rtc-sdk-ng` 和 Vue 组件库 `agora-rtc-vue` 实现一个可以将本地的音视频流分享给远端用户并进行实时互动的 Web app。用户可以使用此项目与好友远程分享影片并同时进行音视频互动。

本项目的另一目的在于展示 `agora-rtc-vue` 的 API 和功能。

![screenshot_1](./demo_screenshot.png)

![screenshot_2](./demo_screenshot2.png)

## 环境准备
- Agora Web SDK 支持的浏览器，详见[Web SDK 兼容性](https://docs.agora.io/cn/Video/web_sdk_compatibility?platform=Web)。Agora 强烈推荐 Chrome 浏览器官方最新版本。
- 物理音视频采集设备，如内置摄像头和麦克风。
- 安装 Node.js 和 npm
- 安装 yarn

## 运行示例项目

1. 在 `demo_movies_together` 目录下运行 `yarn` 命令安装依赖。
2. 在 `src/main.js` 中填写你在 Agora 控制台获取到的 App ID 及临时 Token。

   > - 参考 [开始使用 Agora 平台](https://docs.agora.io/cn/Agora%20Platform/get_appid_token?platform=All%20Platforms) 了解如何在 Agora 控制台获取 App ID 和生成临时 Token。
   > - 为提高项目的安全性，Agora 使用 Token（动态密钥）对加入频道的用户进行鉴权。临时 Token 仅作为演示和测试用途。生成临时 Token 使用的频道名必须和加入频道时使用的频道名一致。

3. 运行 `yarn serve` 命令。
4. 在 Chrome 浏览器中打开项目地址 `https://localhost:8080/`。
5. 点击 `选择想要分享的影片` 按钮选择影片。
6. 点击 `开始观影` 进入观影界面。
7. 将观影界面 URL 分享给好友。
8. 好友打开链接，即可一起观影并互动。

## Q&A

   1. Q: 在 Mac 上使用 Chrome 分享影片时, 好友打开 URL , 影片界面是绿色的。
      A: Mac 上 Chrome 存在 BUG。关闭 Chrome 硬件加速功能后重新分享即可。
   2. Q: 无法打开页面。
      A: 在浏览器和系统设置中信任 HTTPS 证书。

## 参考文档

- [Agora 官网](https://www.agora.io)
- [Web SDK 文档](https://docs.agora.io/cn/Voice/API%20Reference/web_ng/index.html)
- [agora-rtc-vue 文档](https://webdemo.agora.io/agora_rtc_vue_doc/)

## 反馈

如果你有任何问题或建议，可以通过 issue 的形式反馈。

## 免责声明

本项目代码用于展示 Agora 产品的 API 和相关功能，不是完整的本地线上环境运行的完整项目，仅供翻译学习之用，不得用于商业用途，Agora 对使用本项目代码任何非学习用途而产生的任何损失和责任不承担任何责任。

您在使用本项目时，请遵守当地的相关法律规定，请确认使用过程中您对使用的音频和视频拥有使用和传播的权利，并确认音频和视频内容符合所属地区法律法规的规定，您需对使用的音频和视频内容的真实性、合法性、无害性、有效性等全权负责，与您使用的视频和音频内容相关的任何法律责任由您自行承担，Agora.io不承担任何责任。

在本项目遵循GPL协议的基础上，Agora.io对本项目代码保留所有权利。

## 相关资源

- 你可以先参阅 [常见问题](https://docs.agora.io/cn/faq)
- 如果你想了解更多 Agora 官方示例，可以参考 [官方 SDK 示例](https://github.com/AgoraIO)
- 如果你想了解 Agora SDK 在复杂场景下的应用，可以参考 [官方场景案例](https://github.com/AgoraIO-usecase)
- 如果你想了解 Agora 的一些社区开发者维护的项目，可以查看 [社区](https://github.com/AgoraIO-Community)
- 若遇到问题需要开发者帮助，你可以到 [开发者社区](https://rtcdeveloper.com/) 提问
- 如果需要售后技术支持, 你可以在 [Agora Dashboard](https://dashboard.agora.io) 提交工单