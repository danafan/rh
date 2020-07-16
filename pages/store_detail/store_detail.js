// pages/store_detail/store_detail.js
Page({
  data: {
    active_tab:'1',         //选中的导航
  },
  onLoad: function (options) {

  },
  //切换导航
  checkTab(e){
    this.setData({
      active_tab:e.currentTarget.dataset.tab_index
    })
  }
})