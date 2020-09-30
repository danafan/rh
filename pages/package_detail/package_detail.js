// pages/store_detail/store_detail.js
Page({
  data: {
    banner_list: ['https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-001.jpg', 'https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg', 'https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-001.jpg']
  },
  //点击查看图片
  openBigImg(e) {
    let index = e.currentTarget.dataset.index;
    wx.previewImage({
      current: this.data.banner_list[index], // 当前显示图片的http链接
      urls: this.data.banner_list // 需要预览的图片http链接列表
    })
  },
})