// components/OrderItem/order_item.js
Component({
  properties: {
    order_info: {
      type: Object,
      value: {}
    }
  },
  data: {

  },
  methods: {
    //店铺详情
    storeOrder() {
      wx.navigateTo({
        url: '/pages/store_detail/store_detail'
      });
    },
    //订单详情
    orderDetail(e) {
      let order_id = e.currentTarget.dataset.order_id;
      wx.navigateTo({
        url: '/pages/order_detail/order_detail?order_id=' + order_id
      });

    },
    // 立即支付
    payOrder(e) {
      let order_id = e.currentTarget.dataset.order_id;
      wx.navigateTo({
        url: '/pages/pay_order/pay_order?order_id=' + order_id
      });
    },
    //再来一单
    placeOrder(e) {
      let order_id = e.currentTarget.dataset.order_id;
      wx.navigateTo({
        url: '/pages/place_order/place_order?order_id=' + order_id
      });
    },
    //去评价
    evaluation(e) {
      let order_id = e.currentTarget.dataset.order_id;
      wx.navigateTo({
        url: '/pages/evaluation/evaluation?order_id=' + order_id
      });
    }

  }
})