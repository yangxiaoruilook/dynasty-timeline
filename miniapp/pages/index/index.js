const app = getApp();

Page({
  data: {
    url: app.globalData.webUrl
  },
  onLoad() {},
  onMessage(e) {},
  onError(e) {
    console.error('web-view error:', e);
  }
});
