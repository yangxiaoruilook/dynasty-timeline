# 中国历史图鉴 iOS App

This folder wraps the `../v3` web app as an iOS app with Capacitor.

## Update App Content

After editing `../v3`, run:

```bash
npm run cap:sync
```

This copies `../v3` into `www/` and syncs it into the Xcode project.

## Open In Xcode

```bash
npm run cap:open
```

Or open:

```text
ios/App/App.xcodeproj
```

## Install On iPhone

1. Open the Xcode project.
2. Select target `App`.
3. Open `Signing & Capabilities`.
4. Select your Apple development team.
5. Choose your iPhone as the run device.
6. Click Run.
