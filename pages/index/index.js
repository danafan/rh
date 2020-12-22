//index.js
//获取应用实例
const app = getApp()
const locationApi = require('../../utils/getLocation.js')
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
    loaction_info: {}, //地址信息
    startBarHeight: app.globalData.startBarHeight,
    navgationHeight: app.globalData.navgationHeight,
    isLoad: true, //默认可以加载
    page: 1, //当前页码
    sort_id:'1',    //筛选条件编号
  },
  onLoad() {
    //获取地理位置信息
    this.wxLocationInfo();
  },
  //获取地理位置信息
  wxLocationInfo() {
    locationApi.wxLocationInfo().then(res => {
      app.globalData.locationInfo = res;
      this.setData({
        loaction_info: res
      })
      console.log(this.data.loaction_info)
    })
  },
  //重新选择位置
  // chooseLocation() {
  //   locationApi.chooseLocation().then(res => {
  //     this.setData({
  //       loaction_info: res
  //     })
  //     console.log(this.data.loaction_info)
  //   })
  // },
  // 切换位置
  checkAddress() { 
    wx.navigateTo({
      url: '/pages/check_address/check_address',
    });
  },
  // 搜索
  search() { 
    wx.navigateTo({
      url: '/pages/search/search',
    });
  },
  //切换筛选条件
  checkQuery(e){
    this.setData({
      sort_id:e.detail.sort_id
    })
    console.log(this.data.sort_id)
  },
  //分享自定义
  onShareAppMessage: function(res) {
    return app.globalData.shareObj
  },
  //上拉加载
  onReachBottom() {
    console.log('上拉加载')
  }


})