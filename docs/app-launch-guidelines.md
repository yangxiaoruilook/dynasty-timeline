# App 启动页体验规范

本项目后续 App 开发默认沿用当前 iOS 启动体验方案，避免重复讨论和回退。

## 核心标准

- 保留第一个原生启动页面，不再额外显示第二个网页启动页面。
- 原生启动页需要稍微延长停留时间，让用户看清品牌画面。
- 启动页消失时必须柔和淡出，不能突然消失或硬切。
- 网页版可以保留网页启动页，但 App 内必须跳过网页启动页。
- 进入首页的过渡要参考支付宝式的顺滑感：系统启动画面承接到 App 首屏，中间不要出现多段跳变、闪白、闪黑或第二张启动页。

## 当前实现位置

- `v3/index.html`：通过 `capacitor:` 环境识别 App 内运行，并隐藏网页启动页。
- `ios-app/ios/App/App/SplashBridgeViewController.swift`：使用同一张启动图做原生承接层，延长显示后淡出。
- `ios-app/ios/App/App/Base.lproj/Main.storyboard`：入口控制器使用 `SplashBridgeViewController`。
- `ios-app/ios/App/App/Base.lproj/LaunchScreen.storyboard`：系统原生启动页。
- `ios-app/ios/App/App/Assets.xcassets/Splash.imageset`：启动图资源。

## 调整原则

如果以后觉得启动页太快或太慢，优先调整 `SplashBridgeViewController.swift` 里的停留时间和淡出时间，不要重新开启 App 内网页启动页。
