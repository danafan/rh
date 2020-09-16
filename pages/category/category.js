// pages/service/service.js
var app = getApp();
// const api = require('../../utils/api.js')
// const util = require('../../utils/util.js')
// const dateTime = require('../../utils/dateTime.js')
Page({
  data: {
    category_list: [{
      id: '1',
      iocn: '../../images/cate_02.png',
      name: '火锅'
    }, {
      id: '2',
      iocn: '../../images/cate_03.png',
      name: '烧烤烤肉'
    }, {
      id: '3',
      iocn: '../../images/cate_05.png',
      name: '海鲜'
    }, {
      id: '4',
      iocn: '../../images/cate_02.png',
      name: '自助餐'
    }, {
      id: '5',
      iocn: '../../images/cate_03.png',
      name: '特色菜'
    }, {
      id: '6',
      iocn: '../../images/cate_04.png',
      name: '川湘菜',
      tag: '无辣不欢'
    }, {
      id: '7',
      iocn: '../../images/cate_05.png',
      name: '日韩料理'
    }, {
      id: '8',
      iocn: '../../images/cate_02.png',
      name: '蛋糕甜点'
    }, {
      id: '9',
      iocn: '../../images/cate_04.png',
      name: '快餐西餐'
    }], //分类列表
    active_index: 0, //默认选中的顶部导航下标
    show_index: 0, //解决顶部滑动bug
    info_id: "", //选中的导航ID
    store_left_list: [],
    store_right_list: [],
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
        package_id:"1",
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
    isLoad: true,
    page: 1
  },
  //分享自定义
  onShareAppMessage: function(res) {
    return app.globalData.shareObj
  },
  onLoad(option) {
    this.setData({
      active_index: option.index == '9' ? 0 : parseInt(option.index) + 1,
      show_index: option.index >= 6 && option.index < 9 ? 6 : option.index == '9' ? 0 : option.index,
      info_id: option.id
    })
    // console.log(this.data.show_index)
    //获取一级分类列表
    this.getCateGory();
    //获取信息列表
    this.getInfoList();
  },
  //获取一级分类列表
  getCateGory() {
    let obj = {
      id: "0",
      name: '全部分类'
    }
    let category_list = this.data.category_list;
    category_list.unshift(obj);
    this.setData({
      category_list: category_list
    })
    console.log(this.data.category_list)
    // util.get(api.getCategoryList, {
    //   p_id: 0
    // }).then(res => {
    //   let data = res.data;
    //   let obj = {
    //     category_id: 0,
    //     category_name: '全部'
    //   }
    //   data.unshift(obj);
    //   this.setData({
    //     category_list: data
    //   })
    // })
  },
  //点击切换顶部导航
  changeCurrent(e) {
    let option = e.currentTarget.dataset;
    this.setData({
      active_index: parseInt(option.index),
      info_id: option.id,
      // store_list: [],
      // isLoad: true,
      // page: 1
    })
    //获取信息列表
    // this.getInfoList();
  },
  //上拉加载
  onReachBottom() {
    console.log("上拉加载...");
    // if (this.data.isLoad) {
    //   this.setData({
    //     page: this.data.page + 1
    //   })
    //   //获取信息列表
    //   this.getInfoList();
    // }
  },
  //获取信息列表
  getInfoList() {
    this.data.store_list.map((item, index) => {
      if ((index + 1) % 2 == 0) {
        let arr = this.data.store_right_list;
        arr.push(item)
        this.setData({
          store_right_list: arr
        })
      } else {
        let arr = this.data.store_left_list;
        arr.push(item)
        this.setData({
          store_left_list: arr
        })
      }
    })
  },
  // //拨打电话
  // call(v) {
  //   if (!app.globalData.userInfo) {
  //     wx.navigateTo({
  //       url: '/pages/auth/auth',
  //     });
  //   } else {
  //     let phone = v.currentTarget.dataset.phone;
  //     wx.makePhoneCall({
  //       phoneNumber: phone
  //     })
  //   }
  // },
  //点击进入详情
  detail() {
    wx.navigateTo({
      url: "/pages/detail/detail"
    })
  }
})