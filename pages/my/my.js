// pages/my/my.js
const app = getApp();
Page({
  data: {
    wxInfo: null, //微信用户信息
    userInfo: null,
    red_envelope:2,    //红包
    balance:98.12,           //余额
    integral:18,        //积分
  },
  onShow() {
    this.setData({
      wxInfo: app.globalData.wxInfo,
      userInfo:app.globalData.userInfo
    })
  },
  //红包
  envelopeList() {
    wx.navigateTo({
      url: '/pages/red_envelope/red_envelope?page_type=my',
    });
  },
  //余额
  balanceList() {
    wx.navigateTo({
      url: '/pages/balance_list/balance_list',
    });
  },
  //积分
  integralList() {
    wx.navigateTo({
      url: '/pages/integral_list/integral_list',
    });
  },
  //商家入驻
  tenants(){
    wx.showModal({
      title: '联系电话',
      content: '葛经理 13067882143',
      success: (res) => {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: '13067882143' 
          })
        }
      }
    })
  },
  //分享自定义
  onShareAppMessage: function(res) {
    return app.globalData.shareObj
  },
  //去登录
  login() {
    wx.navigateTo({
      url: '/pages/auth/auth'
    })
  },
})