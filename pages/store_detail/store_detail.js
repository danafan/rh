// pages/store_detail/store_detail.js
Page({
  data: {
    active_tab:'2',         //选中的导航
    tag_list: [{
      id: '1',
      val: '有宝宝椅'
    }, {
      id: '2',
      val: '免费wifi'
    }, {
      id: '3',
      val: '免费停车'
    }]
  },
  onLoad: function (options) {

  },
  //上拉加载
  onReachBottom() {
    console.log('上拉加载')
  },
  //进入优惠详情
  goDetail(e) {
    let type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '/pages/coupons_detail/coupons_detail?type=' + type,
    });
  },
  //切换导航
  checkTab(e){
    this.setData({
      active_tab:e.currentTarget.dataset.tab_index
    })
  }
})