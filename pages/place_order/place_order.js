// pages/place_order/place_order.js
Page({
  data: {
    number: 1, //默认数量
    red_package_num: 1, //红包数量
    integral_use:false,
    order_id:""
  },
  onLoad(options){
    let order_id = options.order_id;
    this.setData({
      order_id: order_id
    })
    console.log(this.data.order_id)
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
  },
  //选择红包
  envelopeList(){
    wx.navigateTo({
      url: '/pages/red_envelope/red_envelope?page_type=order',
    });
  },
  //操作积分
  checkUse(){
    this.setData({
      integral_use: !this.data.integral_use
    })
  }
})