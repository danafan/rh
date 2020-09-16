// pages/my/my.js
const app = getApp();
Page({
  data: {
    wxUser: null, //微信用户信息
    red_envelope:2,    //红包
    balance:98,           //余额
    integral:18,        //积分
  },
  onLoad: function(options) {
    this.setData({
      wxUser: app.globalData.wxUser
    })
  },
  //红包
  envelopeList() {
    wx.navigateTo({
      url: '/pages/red_envelope/red_envelope?page_type=my',
    });
  },
  //分享自定义
  onShareAppMessage: function(res) {
    return app.globalData.shareObj
  }
})