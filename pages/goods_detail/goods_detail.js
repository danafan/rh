// pages/store_detail/store_detail.js
Page({
  data: {
    banner_list: [{
      id: "1",
      img_url: "../../images/banner_01.png"
    }, {
      id: "2",
      img_url: "../../images/banner_02.jpg"
    }, {
      id: "3",
      img_url: "../../images/banner_03.jpg"
    }], //轮播图
    tag_list: [{
      id: '1',
      val: '有宝宝椅'
    }, {
      id: '2',
      val: '免费wifi'
    }, {
      id: '3',
      val: '免费停车'
    }],
    rules_list: [{
      id: '1',
      val: '每桌限用1份'
    }, {
      id: '2',
      val: '满400可用'
    }, {
      id: '3',
      val: '不与其他优惠叠加使用'
    }, {
      id: '4',
      val: '营业时间：9:00 -- 22:00'
    }, {
      id: '5',
      val: '使用期限：2020-07-26至2020-08-26（周末、法定节假日通用）'
    }]
    // current_index: 0, //默认选中图片的下标
    // show_img: false, //默认不显示大图
    // shu: 1, //默认banner当前数
  },
  onLoad: function(options) {
    //设置导航栏
    // wx.setNavigationBarTitle({ title: 'i热乎' })
  },
  //进入店铺详情
  storeDetail() {
    wx.navigateTo({
      url: '/pages/store_detail/store_detail',
    });
  },
  //点击其他优惠
  goDetail() {
    wx.redirectTo({
      url: '/pages/goods_detail/goods_detail',
    });
  },
  //点击种草
  grassSet() {
    this.setData({
      isGrass: !this.data.isGrass
    })
  },
  //监听banner变化
  changeBanner(e) {
    this.setData({
      shu: e.detail.current + 1
    })
  },
  //打开大图
  openBigImg(e) {
    let img_obj = e.currentTarget.dataset;
    this.setData({
      current_index: img_obj.index,
      show_img: true
    })
  },
  //关闭大图
  close() {
    this.setData({
      show_img: false
    })
  },
  onShareAppMessage: function() {

  }
})