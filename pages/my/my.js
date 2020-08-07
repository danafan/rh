// pages/my/my.js
const app = getApp();
Page({
  data: {
    wxUser: null, //微信用户信息
    red_package_num:2
  },
  onLoad: function(options) {
    console.log(app.globalData.wxUser)
    this.setData({
      wxUser: app.globalData.wxUser
    })
  },
  //点击登录
  login() {
    wx.navigateTo({
      url: '/pages/auth/auth',
    });
  },
  //我的订单
  orderList(e) {
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/my_order/my_order?index=' + index
    });
  },
  //我的红包
  envelopeList() {
    wx.navigateTo({
      url: '/pages/red_envelope/red_envelope?page_type=my',
    });
  },
  bindGetUserInfo(e) {
    app.globalData.wxUser = e.detail.userInfo;
    this.setData({
      wxUser: app.globalData.wxUser
    })
  },
  //分享自定义
  onShareAppMessage: function(res) {
    return app.globalData.shareObj
  }
})