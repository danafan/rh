// pages/coupons_list/coupons_list.js
Page({
  data: {
    active_tab:'0',   //导航类型
    preferential: [{
      id: "1",
      store_name: "一点点（人民路店）",
      goods_name: "红茶玛奇朵一份",
      total_num: 200,
      rob_num: 118,
      old_price: "39",
      now_price: "12.9",
      discount: "8.5",
      type: "1"
    }, {
      id: "2",
      store_name: "外婆家",
      goods_name: "100元代金券一张",
      total_num: 200,
      rob_num: 32,
      old_price: "100",
      now_price: "80",
      discount: "8.0",
      type: "2"
    }, {
      id: "3",
      store_name: "叫了只炸鸡",
      goods_name: "椒盐整鸡一份",
      rob_num: 65,
      old_price: "42.5",
      now_price: "19.8",
      discount: "7.5",
      type: "1"
    }, {
      id: "2",
      store_name: "江南民家",
      goods_name: "200元代金券一张",
      total_num: 200,
      rob_num: 12,
      old_price: "200",
      now_price: "150",
      discount: "8.5",
      type: "2"
    }, {
      id: "1",
      store_name: "星巴克（西湖店）",
      goods_name: "摩卡一杯",
      rob_num: 16,
      old_price: "28",
      now_price: "12",
      discount: "8.5",
      type: "1"
    }],       //优惠列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //切换导航
  checkTab(e){
    this.setData({
      active_tab:e.currentTarget.dataset.type
    })
  },
  //进入优惠详情
  goDetail(e) {
    let type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '/pages/coupons_detail/coupons_detail?type=' + type,
    });
  },
  //上拉加载
  onReachBottom() {
    console.log('上拉加载')
  },
  onShareAppMessage: function () {

  }
})