// pages/my/my.js
const app = getApp();
Page({
  data: {
    wxUser:null,        //微信用户信息
  },
  onLoad: function (options) {
    console.log(app.globalData.wxUser)
    this.setData({
      wxUser: app.globalData.wxUser
    })
  },
  //点击登录
  login(){
    wx.navigateTo({
      url: '/pages/auth/auth',
    });
  },
  //我的订单
  goOrder(){
    wx.navigateTo({
      url: '/pages/order/order',
    });
  },
  bindGetUserInfo(e) {
    app.globalData.wxUser = e.detail.userInfo;
    this.setData({
      wxUser: app.globalData.wxUser
    })
  },
  //分享自定义
  onShareAppMessage: function (res) {
    return app.globalData.shareObj
  }
})