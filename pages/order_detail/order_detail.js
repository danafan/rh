// pages/order_detail/order_detail.js
Page({
  data: {
    order_info:{
      order_status: '5',            //1:待使用；2:待支付；3:待评价；4:退款/售后；5:已完成
      refund_status: '',            //1:退款中；2:已退款；3:退款失败
      order_status_text:'退款中',    //退款描述
      order_type: '1',              //1:套餐；2:优惠券；3:特价菜
    }
  },
  onLoad: function (options) {
    console.log(options.order_id)
  },
  //确认订单
  placeOrder() {
    wx.navigateTo({
      url: '/pages/place_order/place_order',
    });
  }
})