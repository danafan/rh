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
      name: '小吃快餐'
    }, {
      id: '9',
      iocn: '../../images/cate_04.png',
      name: '西餐'
    }, {
      id: '10',
      iocn: '../../images/cate_03.png',
      name: '蛋糕奶茶'
    }], //分类列表
    active_index: 0, //默认选中的顶部导航下标
    show_index: 0, //解决顶部滑动bug
    info_id: "", //选中的导航ID
    store_left_list: [],
    store_right_list:[],
    store_list: [{
      store_id: '1',
      store_img: "../../images/banner_02.jpg",
      store_type: "火锅",
      store_name: "狼一家铁锅炖",
      star_num: '4.8',
      sort: '1',
      te: '',
      hui: '3',
      quan: '2',
      location_text: '宁围街道',
      distance: '5.2',
      on_the_pin: '198',
    }, {
      store_id: '2',
      store_img: "../../images/banner_01.png",
      store_type: "自助餐",
      store_name: "金鲨自助烤场",
      star_num: '5.0',
      sort: '',
      te: '1',
      hui: '4',
      quan: '3',
      location_text: '人民路',
      distance: '3.6',
      on_the_pin: '66',
    }, {
      store_id: '3',
      store_img: "../../images/banner_03.jpg",
      store_type: "海鲜",
      store_name: "胖子海鲜大排档",
      star_num: '4.9',
      sort: '2',
      te: '1',
      hui: '3',
      quan: '',
      location_text: '大学路',
      distance: '11.5',
      on_the_pin: '88',
    }], //套餐列表
    isLoad: true,
    page: 1
  },
  //分享自定义
  onShareAppMessage: function(res) {
    return app.globalData.shareObj
  },
  onLoad(option) {
    this.setData({
      active_index: parseInt(option.index) + 1,
      show_index: parseInt(option.index) >= 9 ? 6 : parseInt(option.index) >= 5 ? 5 : parseInt(option.index),
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
      id: 0,
      name: '全部分类'
    }
    let hh = this.data.category_list;
    hh.unshift(obj);
    this.setData({
      category_list: hh
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
    this.data.store_list.map((item,index) => {
      if((index + 1)%2 == 0){
        let arr = this.data.store_right_list;
        arr.push(item)
        this.setData({
          store_right_list: arr
        })
      }else{
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