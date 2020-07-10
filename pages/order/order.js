// pages/order/order.js
Page({
  data: {
    tab_index:'1',    //默认选中第一个导航
  },
  onLoad: function (options) {

  },
  checkTab(e){
    this.setData({
      tab_index:e.currentTarget.dataset.index
    })
  },
  onShareAppMessage: function () {

  }
})