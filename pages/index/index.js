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
    baseUrl: app.globalData.baseUrl,
    location: "",
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
    package_list: [{
      package_id: '1',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-001.jpg",
      store_name: "虾小哥 浇汁大虾",
      package_name: "大吉大利今晚吃鸡套餐",
      old_price: "38",
      now_price: "12",
      sold_num: "182"
    }, {
      package_id: '2',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg",
      store_name: "老男孩 川湘菜",
      package_name: "美味单人套餐（含米饭）",
      old_price: "42",
      now_price: "18",
      sold_num: "160"
    }, {
      package_id: '3',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-001.jpg",
      store_name: "好生活麻辣香锅",
      package_name: "干锅有机花菜套餐",
      old_price: "29",
      now_price: "12.8",
      sold_num: "78"
    }], //套餐列表
    preferential: [{
      id: "1",
      food_img: 'https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi.jpg',
      store_name: "一点点（人民路店）",
      goods_name: "红茶玛奇朵一份",
      total_num: 200,
      rob_num: 118,
      old_price: "39",
      now_price: "12.9",
      discount: "8.5",
    }, {
      id: "2",
      food_img: 'https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-005.jpg',
      store_name: "外婆家",
      goods_name: "西湖醋鱼",
      total_num: 200,
      rob_num: 32,
      old_price: "88",
      now_price: "68",
      discount: "8.0"
    }, {
      id: "3",
      food_img: 'https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-007.jpg',
      store_name: "叫了只炸鸡",
      goods_name: "椒盐整鸡一份",
      rob_num: 65,
      old_price: "42.5",
      now_price: "19.8",
      discount: "7.5"
    }], //特价菜列表
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
    }], //店铺列表
    startBarHeight: 0,
    navgationHeight: 0,
    isLoad: true, //默认可以加载
    page: 1, //当前页码
  },
  onLoad: function(options) {
    //获取粉丝总数
    // this.getFansTotal();
    //获取顶部导航栏信息
    this.setNavigation();
    //获取地理位置信息
    // this.wxLocationInfo();
    //获取一级分类列表
    // this.getCateGory();
    //获取信息列表
    // let req = { level_01_id: 0 }
    // this.getInfoList(req);
  },
  //进入店铺详情
  storeDetail() {
    wx.navigateTo({
      url: '/pages/store_detail/store_detail',
    });
  },
  //进入特价菜列表
  goList() {
    wx.navigateTo({
      url: '/pages/food_list/food_list',
    });
  },
  onPageScroll: function(e) { // 页面滚动监听
    this.setData({
      scrollTop: (e.scrollTop) / 100
    })
  },
  //获取粉丝总数
  getFansTotal() {
    util.get(api.getFansTotal).then(res => {
      this.setData({
        fans_total: res.data + 8520
      })
    })
  },
  //获取一级分类列表
  getCateGory() {
    util.get(api.getCategoryList, {
      p_id: 0
    }).then(res => {
      let data = res.data;
      this.setData({
        category_list: data
      })
    })
  },
  //获取信息列表
  getInfoList(req) {
    req.page = this.data.page;
    util.get(api.infoList, req).then(res => {
      if (res.data.length < 8) {
        this.setData({
          isLoad: false
        })
      }
      res.data.map(item => {
        //处理文件数组
        if (item.file_list) {
          item.files = item.file_list.split("_");
        }
        //区分图片或视频
        if (item.file_list && item.file_list.indexOf('mp4') > -1) {
          item.file_type = 'video'
        } else {
          item.file_type = 'image'
        }
        //处理标签数组
        if (item.tag_txts) {
          item.tag_txts = item.tag_txts.split("_");
        }
        //处理时间显示
        item.ddd = dateTime.getFormatTime(item.create_time);
        //处理不同的信息
        if (item.diff_data) {
          let diffObj = JSON.parse(item.diff_data);
          var diffArr = [];
          for (var k in diffObj) {
            var type = "";
            if (k == 'check_sneq') {
              type = "类型";
            } else if (k == 'sex') {
              type = "性别";
            } else if (k == 'company') {
              type = "公司名称";
            } else if (k == 'wage') {
              type = "薪资";
            } else if (k == 'work_addres') {
              type = "工作地址";
            } else if (k == 'experience') {
              type = "工作经验";
            } else if (k == 'age') {
              type = "年龄";
            } else if (k == 'house_location') {
              type = "房屋地址";
            } else if (k == 'destination') {
              type = "目的地";
            } else if (k == 'origin') {
              type = "出发地";
            } else if (k == 'number') {
              type = "乘坐人数";
            } else if (k == 'origin_time') {
              type = "乘车时间";
            }
            diffArr.push({
              type: type,
              val: diffObj[k]
            })
          }
          item.diff_data = diffArr
        }
      })
      this.setData({
        info_list: [...this.data.info_list, ...res.data]
      })
    })
  },
  //搜索
  search() {
    // wx.navigateTo({
    //   url: "/pages/search/search"
    // })
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
  //下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新')
    // this.setData({
    //   isLoad: true,
    //   page: 1,
    //   info_list: []
    // })
    //获取信息列表
    // let req = { level_01_id: 0, page: this.data.page }
    // this.getInfoList(req);
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
  },
  //点击跳转到分类页面
  goCategory(e) {
    let id = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/category/category?id=' + id + '&index=' + index
    })
  },


})