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
    service_list: [{
      store_id: '1',
      page_img: "../../images/banner_01.png",
      remaining_num: '8',
      sold_num: '182',
      grass_num: "1442",
      store_name: "同学少年 湘派小串",
      desc: "108元抢原价283元的【烤串3-4人套餐】",
      end_time: "2020.07.08-2020.08.08",
      price: "108",
      original_price: "288",
    }], //信息列表
    show_index: 0, //解决顶部滑动bug
    info_id: "",
    isLoad: true,
    page: 1
  },
  //分享自定义
  onShareAppMessage: function(res) {
    return app.globalData.shareObj
  },
  onLoad(option) {
    console.log(option)
    this.setData({
      active_index: parseInt(option.index) + 1,
      show_index: parseInt(option.index) >= 9 ? 6 : parseInt(option.index) >= 5 ?  5: parseInt(option.index),
      info_id: option.id
    })
    // console.log(this.data.show_index)
    //获取一级分类列表
    this.getCateGory();
    //获取信息列表
    // this.getInfoList();
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
    this.setData({
      info_id: e.currentTarget.dataset.id,
      service_list: [],
      active_index: e.currentTarget.dataset.index,
      isLoad: true,
      page: 1
    })
    //获取信息列表
    this.getInfoList();
  },
  //上拉加载
  onReachBottom() {
    if (this.data.isLoad) {
      this.setData({
        page: this.data.page + 1
      })
      //获取信息列表
      this.getInfoList();
    }
  },
  //获取信息列表
  getInfoList() {
    let req = {
      level_01_id: this.data.info_id,
      page: this.data.page
    };
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
        service_list: [...this.data.service_list, ...res.data]
      })
    })
  },
  //拨打电话
  call(v) {
    if (!app.globalData.userInfo) {
      wx.navigateTo({
        url: '/pages/auth/auth',
      });
    } else {
      let phone = v.currentTarget.dataset.phone;
      wx.makePhoneCall({
        phoneNumber: phone
      })
    }
  },
  //点击进入详情
  detail() {
    wx.navigateTo({
      url: "/pages/detail/detail"
    })
  }
})