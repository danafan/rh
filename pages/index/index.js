//index.js
//获取应用实例
const app = getApp()
// const api = require('../../utils/api.js')
// const util = require('../../utils/util.js')
// const dateTime = require('../../utils/dateTime.js')
//获取地理位置
// var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
// var qqmapsdk;
Page({
  data: {
    store_list: [{
      store_id: '1',
      store_img: "https://img.meituan.net/msmerchant/c79e7df9b2f6af4c5ed51f76cf9b5ea5199546.jpg@220w_125h_1e_1c",
      store_type: "火锅",
      store_name: "狼一家铁锅炖",
      star_num: '4.8',
      sort: '1',
      te: "锅包肉18元",
      hui: "2人餐48元，4人餐88元，3人餐99元，4-6人餐128元",
      quan: "88代100元，70代100元",
      location_text: '宁围街道',
      distance: '5.2',
      on_the_pin: '198',
      package_list: [{
        package_id: "1",
        package_name: "特价双人套餐",
        package_img: '../../images/banner_02.jpg',
        old_price: "188",
        now_price: "98",
      }, {
        package_id: "2",
        package_name: "特价双人套餐",
        package_img: '../../images/banner_02.jpg',
        old_price: "188",
        now_price: "98",
      }, {
        package_id: "7",
        package_name: "特价双人套餐",
        package_img: '../../images/banner_02.jpg',
        old_price: "188",
        now_price: "98",
      }, {
        package_id: "11",
        package_name: "特价双人套餐",
        package_img: '../../images/banner_02.jpg',
        old_price: "188",
        now_price: "98",
      }, {
        package_id: "12",
        package_name: "特价双人套餐",
        package_img: '../../images/banner_02.jpg',
        old_price: "188",
        now_price: "98",
      }]
    }, {
      store_id: '2',
      store_img: "https://p0.meituan.net/bbia/924694704c857ad6509d4254fe53fbe2959847.gif@130w_130h_1e_1c",
      store_type: "自助餐",
      store_name: "金鲨自助烤场",
      star_num: '5.0',
      sort: '',
      te: "锅包肉18元",
      hui: "2人餐48元，4人餐88元，4-6人餐128元",
      quan: "88代100元，70代100元",
      location_text: '人民路',
      distance: '3.6',
      on_the_pin: '66',
      package_list: [{
        package_id: "3",
        package_name: "特价双人套餐",
        package_img: '../../images/banner_02.jpg',
        old_price: "188",
        now_price: "98",
      }, {
        package_id: "4",
        package_name: "特价双人套餐",
        package_img: '../../images/banner_02.jpg',
        old_price: "188",
        now_price: "98",
      }]
    }, {
      store_id: '3',
      store_img: "https://p0.meituan.net/bbia/1938bea7c5349478ea3d7c27a392384266681.jpg@130w_130h_1e_1c",
      store_type: "海鲜",
      store_name: "胖子海鲜大排档",
      star_num: '4.9',
      sort: '2',
      te: "锅包肉18元",
      hui: "2人餐48元，4人餐88元，4-6人餐128元",
      quan: "88代100元，70代100元",
      location_text: '大学路',
      distance: '11.5',
      on_the_pin: '88',
      package_list: [{
        package_id: "5",
        package_name: "特价双人套餐",
        package_img: '../../images/banner_02.jpg',
        old_price: "188",
        now_price: "98",
      }, {
        package_id: "6",
        package_name: "特价双人套餐",
        package_img: '../../images/banner_02.jpg',
        old_price: "188",
        now_price: "98",
      }]
    }], //店铺列表
    startBarHeight: 0,
    navgationHeight: 0,
    isLoad: true, //默认可以加载
    page: 1, //当前页码
  },
  onLoad: function(options) {
    //获取顶部导航栏信息
    this.setNavigation();
    //获取地理位置信息
    // this.wxLocationInfo();
  },
  //抵扣券列表
  couponsList() {
    wx.navigateTo({
      url: '/pages/coupons_list/coupons_list',
    });
  },
  //获取当前位置
  getLocationInfo() {
    // if (this.data.location == '点击获取') {
    //   //获取地理位置信息
    //   this.openSet();
    // }
  },
  //获取地理位置信息
  wxLocationInfo() {
    wx.getSetting({
      success: (res) => {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success: () => {
              this.wxGetLocation();
            },
            fail: (err) => {
              this.setData({
                location: "点击获取"
              })
            }
          })
        } else {
          this.wxGetLocation();
        }
      }
    })
  },
  openSet() {
    wx.openSetting({
      success: (res) => {
        this.wxGetLocation();
      }
    })
  },
  // wx.getLocation
  wxGetLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        app.globalData.locationObj.latitude = res.latitude;
        app.globalData.locationObj.longitude = res.longitude;
        let req = {
          latitude: res.latitude,
          longitude: res.longitude
        }
        this.getApi(req);
      }
    })
  },
  // api
  getApi(req) {
    qqmapsdk = new QQMapWX({
      key: 'L4BBZ-KNVK6-TAXSF-M4PC6-TLLAZ-5UBGR'
    });
    this.setData({
      location: "获取中"
    })
    qqmapsdk.reverseGeocoder({
      location: req,
      success: (res) => {
        let address_obj = res.result.address_component;
        app.globalData.locationObj.address = address_obj.city;
        let detail_address = address_obj.city + address_obj.district + address_obj.street;
        app.globalData.locationObj.detail_address = detail_address;
        this.setData({
          location: res.result.address_component.city
        })
      }
    })
  },
  //获取顶部导航栏信息
  setNavigation() {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2; //导航高度
        this.setData({
          startBarHeight: statusBarHeight,
          navgationHeight: navHeight - statusBarHeight
        })
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  //分享自定义
  onShareAppMessage: function(res) {
    return app.globalData.shareObj
  },
  //上拉加载
  onReachBottom() {
    console.log('上拉加载')
    // if (this.data.isLoad) {
    //   this.setData({
    //     page: this.data.page + 1
    //   })
    //   //获取信息列表
    //   let req = { level_01_id: 0, page: this.data.page }
    //   this.getInfoList(req);
    // }
  }


})