//app.js
// const api = require('./utils/api.js')
// const utils = require('./utils/util.js')
App({
  onLaunch: function () {
    //获取顶部导航栏信息
    this.setNavigation();
    //获取微信用户信息
    this.wxUserInfo();
    //获取用户登录信息
    // this.login();
  },
  //获取顶部导航栏信息
  setNavigation() {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2; //导航高度
        this.globalData.startBarHeight = statusBarHeight,
        this.globalData.navgationHeight = navHeight - statusBarHeight
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  //获取用户登录信息
  login() {
    const openid = wx.getStorageSync('openid');
    if (openid) {
      //判断微信服务端是否过期
      this._checkWXSession();
    } else {
      //微信登录
      this._wxLogin();
    }
  },
  //判断微信服务端是否过期
  _checkWXSession() {
    wx.checkSession({
      success: () => {
        //微信未过期，获取用户状态
        this.getUserStatus();
      },
      fail: () => {
        //已过期，先微信登录，再用户登录
        this._wxLogin();
      }
    })
  },
  //微信登录
  _wxLogin() {
    wx.login({
      success: (res) => {
        this._serLogin(res.code)
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },
  //用户登录
  _serLogin(code) {
    utils.get(api.getOpenId, {
      code: code
    }).then(res => {
      wx.setStorageSync('openid', res.openid);
      this.globalData.session_key = res.session_key;
      //获取用户状态
      this.getUserStatus();
    })
  },
  //获取用户状态
  getUserStatus() {
    utils.get(api.getUserStatus, {
      openid: wx.getStorageSync('openid')
    }).then(res => {
      if (res.userInfo) {
        this.globalData.userInfo = res.userInfo;
        console.log(this.globalData.userInfo)
      } else {
        this.globalData.userInfo = null;
      }
    })
  },

  //获取微信用户信息
  wxUserInfo() {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          //获取用户信息
          wx.getUserInfo({
            success: res => {
              this.globalData.wxInfo = res.userInfo;
            }
          })
        }
      }
    })
  },
  globalData: {
    baseUrl: "http://localhost:8089/static/uploads/",
    startBarHeight: "",             //导航栏信息
    navgationHeight: "",
    wxInfo: null, //微信用户信息
    userInfo: null, //后台用户信息
    locationInfo: null, //用户地址信息（市，地区编号、经纬度）
    session_key: null,
    shareObj: {
      title: '免费的本地信息服务平台',
      // imageUrl: "/images/banner_01.png",
      path: '/pages/index/index'
    }, //自定义分享的内容
  }
})