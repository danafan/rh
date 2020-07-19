// pages/store_detail/store_detail.js
Page({
  data: {
    active_tab:'1',         //选中的导航
    isGrass:false,          //默认未种草
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
  //种草
  changeGrass(){
    this.setData({
      isGrass: !this.data.isGrass
    })
  },
  //切换导航
  checkTab(e){
    this.setData({
      active_tab:e.currentTarget.dataset.tab_index
    })
  }
})