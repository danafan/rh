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
    isGrass:false,        //默认未点击种草
    current_index: 0, //默认选中图片的下标
    show_img: false, //默认不显示大图
    shu: 1, //默认banner当前数
  },
  onLoad: function(options) {
    //设置导航栏
    // wx.setNavigationBarTitle({ title: 'i热乎' })
  },
  //点击种草
  grassSet(){
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