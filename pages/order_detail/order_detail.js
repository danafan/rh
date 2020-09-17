// pages/order_detail/order_detail.js
Page({
  data: {
    order_info:{
      order_status: "",
      refund_status:""
    }
  },
  onLoad: function (options) {
    let order_id = options.order_id;
    console.log(order_id)
    let obj = {
      order_id: order_id
    }
    this.setData({
      order_info: obj
    })
  },
  //再来一单
  placeOrder() {
    wx.navigateTo({
      url: '/pages/place_order/place_order',
    });
  },
  //申请退款
  applyRefund(e){
    let order_id = e.currentTarget.dataset.order_id;
    wx.navigateTo({
      url: '/pages/refund/refund?order_id=' + order_id
    });
  }
})