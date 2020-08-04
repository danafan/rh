// pages/place_order/place_order.js
Page({
  data: {
    number: 1, //默认数量
    red_package_num: 1, //红包数量
  },
  // 操作数量
  changeNum(e) {
    let type = e.currentTarget.dataset.type;
    if (type == 'add') {
      this.setData({
        number: this.data.number + 1
      })
    } else if (type == 'jian') {
      if (this.data.number == 1) {
        wx.showToast({
          title: '最少选择一件',
          icon: "none",
          mask: true,
          duration: 2000
        })
      } else {
        this.setData({
          number: this.data.number - 1
        })
      }
    }
  }
})