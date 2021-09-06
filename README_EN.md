# Movie Together

---

[简体中文](./README.md)

## Screenshots

![screenshot_1](./demo_screenshot.png)

![screenshot_2](./demo_screenshot2.png)

## Introduce

This project implements a web DEMO that can remotely share audio and video streams and real-time interaction. You can use this to share videos with friends and conduct voice and video interactions at the same time. This application is developed based on Agora.io's remote Web SDK `agora-rtc-sdk-ng` and Vue component library `agora-rtc-vue`. The purpose of this project is to show the API and functions of `agora-rtc-vue`.

## Usage

1. Installation dependencies

2. Enter the APPID you applied for on the Agora.io official website and the corresponding TOKEN to the corresponding location of `src/main.js`

   > Refer to [verifying user permissions](https://docs.agora.io/en/Agora%20Platform/token) to learn how to obtain App ID and Token. You can obtain a temporary token to quickly run the sample project.
   >
   > The channel name used to generate the token must be the same as the channel name used when joining the channel. In order to improve the security of the project, Agora uses Tokens (dynamic keys) to authenticate users who are about to join the channel.
   >
   > The temporary token is for demonstration and testing purposes only.

3. Run the command `yarn serve`
4. Browser open project address
5. Click the button `选择想要分享的影片` to select the video you want to share
6. Click to ``开始观影`` to enter the movie watching interface
7. Share the viewing interface URL to friends
8. Friends open the link, watch the video together and interact

## Q&A

   1. When sharing a video with Chrome under Mac, friends open the URL, the video interface is green
   
      there is a BUG in Chrome under Mac, turn off the Chrome hardware acceleration function, and re-share

   2. Unable to open page
   
      Trust the HTTPS certificate in the setting page in the browser and system.

## Reference documents

- [Agora.io official website](https://www.agora.io)
- [Web SDK documentation](https://docs.agora.io/en/Voice/API%20Reference/web_ng/index.html)
- [agora-rtc-vue documentation (Chinese)](https://webdemo.agora.io/agora_rtc_vue_doc/)

## Feedback

If you have any questions or suggestions, you can give feedback by issues.

## Disclaimer

The code of this project is used to show the APIs and related functions of Agora.io related products. It is not a complete project running in a complete local or online environment. It is used for translation and learning and must not be used for commercial purposes. Agora.io No responsibility is assumed for any losses and liabilities arising from any non-learning purposes of the project code.

When you use this project, please abide by the relevant local laws and regulations. Please confirm your right to use and disseminate the audio and video owners you use during use, and confirm the local laws and regulations governing broadcast and video content. You need to be fully responsible for the authenticity, legality, harmlessness, and functions of the audio and video content you use. Any legal responsibilities related to the use of video and audio are borne by you, and Agora.io does not assume any responsibility.

On the basis of this project following the GPL agreement, Agora.io reserves all rights to the code of this project.

## related resources

- You can read [the FAQ](https://docs.agora.io/en/faq) first
- If you want to know more official examples, you can refer to [the official SDK examples](https://github.com/AgoraIO)
- If you want to understand the application of the Shengwang SDK in complex scenarios, you can refer to [the official scenario case](https://github.com/AgoraIO-usecase)
- If you want to learn about some of the projects maintained by developers in the Soundnet community, you can check [the community](https://github.com/AgoraIO-Community)
- If you have a problem and need help from the developer, you can go to [the developer community](https://rtcdeveloper.com/) to ask questions
- If you need after-sales technical support, you can submit a ticket on [Agora Dashboard](https://dashboard.agora.io)
