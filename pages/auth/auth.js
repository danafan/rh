// pages/auth/auth.js
var app = getApp();
const locationApi = require('../../utils/getLocation.js')
const api = require('../../utils/api.js')
const util = require('../../utils/util.js')

Page({
  data: {
    type: ""
  },
  onLoad() {
    //判断哪一个没授权
    this.judgeAuth();
  },
  //判断哪一个没授权
  judgeAuth() {
    if (!app.globalData.locationInfo) { //用户地址信息（市，经纬度）
      this.setData({
        type: '-1'
      })
      wx.setNavigationBarTitle({
        title: '获取当前位置'
      })
    } else if (!app.globalData.wxInfo) { //微信信息
      this.setData({
        type: '1'
      })
      wx.setNavigationBarTitle({
        title: '微信授权'
      })
    } else if (!app.globalData.userInfo) { //手机号
      this.setData({
        type: '2'
      })
      wx.setNavigationBarTitle({
        title: '快速注册'
      })
    }
  },
  //获取地理位置信息(只有首页用)
  wxLocationInfo() {
    wx.openSetting({
      success: (res) => {
        locationApi.wxGetLocation().then(res => {
          app.globalData.locationInfo = res;
          wx.switchTab({
            url: '/pages/index/index'
          })
        });
      },
      fail: error => {
        console.log(error)
      }
    })
  },
  //获取微信头像和昵称
  bindGetUserInfo(e) {
    if (e.detail.userInfo) {
      app.globalData.wxInfo = e.detail.userInfo;
      if (!app.globalData.userInfo) {
        this.setData({
          type: '2'
        })
        wx.setNavigationBarTitle({
          title: '用户注册' // 其他页面传过来的标题名
        })
      } else {
        wx.navigateBack({
          delta: 1
        })
      }
    } else {
      console.log("取消登录")
    }
  },
  //获取用户手机号
  // getPhoneNumber(e) {
  //   let iv = e.detail.iv;
  //   let encryptedData = e.detail.encryptedData;
  //   let address = app.globalData.locationObj.detail_address;
  //   let openid = wx.getStorageSync('openid');
  //   let session_key = app.globalData.session_key;
  // },
  // 注册
  register() {
    app.globalData.userInfo = '哈哈哈'
    wx.navigateBack({
      delta: 1
    })
    // let req = {
    //   phone: parseInt((Math.random() + 1) * Math.pow(10, 11 - 1)),
    //   wx_head_img: app.globalData.wxUser.wx_head_img,
    //   wx_nickname: app.globalData.wxUser.wx_nickname,
    //   create_addr: app.globalData.detail_address
    // }
    // util.get(api.register, req).then(res => {
    //   if (res.code == 1) {
    //     wx.switchTab({
    //       url: `/pages/${this.data.page_url}/${this.data.page_url}`
    //     })
    //   } else {
    //     wx.showToast({
    //       title: res.msg,
    //       icon: 'none',
    //       duration: 1500
    //     })
    //   }
    // })
  }
})
