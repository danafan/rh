// pages/pay_order/pay_order.js
Page({
  data: {

  },
  onLoad(options) {
    console.log(options.order_id)
  },
  // 订单详情
  orderDetail(e) {
    let order_id = e.currentTarget.dataset.order_id;
    wx.navigateTo({
      url: '/pages/order_detail/order_detail?order_id=' + order_id
    });
  }

})