// pages/order/order.js
Page({
  data: {
    tab_index: '0', //默认选中全部
    order_list: [{
      order_id: "1",
      store_icon: '../../images/banner_01.png',
      store_name: "沪小川",
      goods_icon: '../../images/banner_02.jpg',
      order_name: '沪小川双人套餐',
      order_status: '1', //1:待使用；2:待支付；3:待评价；4:已退款；5:已完成；6:已取消
      order_status_text: "待使用",
      create_order_time: '2020-07-12 13:24:52', //下单时间
      pay_time: '2020-07-12 13:24:52', //付款时间
      consumption_time: '2020-07-12 13:24:52', //消费时间
      arrive_time: '2020-07-12 13:24:52', //退款时间
      end_time: '2020-08-12 13:24:52', //订单有效期
      number: '1', //商品数量
      total_money: '88' //总金额
    }, {
      order_id: "2",
      store_icon: '../../images/banner_03.jpg',
      store_name: "渝上侬重庆火锅",
      goods_icon: '../../images/banner_02.jpg',
      order_name: '渝上侬火锅2-4人套餐',
      order_status: '2', //1:待使用；2:待支付；3:待评价；4:已退款；5:已完成；6:已取消
      order_status_text: "待支付",
      create_order_time: '2020-07-12 13:24:52', //下单时间
      pay_time: '2020-07-12 13:24:52', //付款时间
      consumption_time: '2020-07-12 13:24:52', //消费时间
        arrive_time: '2020-07-12 13:24:52', //退款时间
      end_time: '2020-08-12 13:24:52', //订单有效期
      number: '1', //商品数量
      total_money: '88' //总金额
    }, {
      order_id: "3",
      store_icon: '../../images/banner_01.png',
      store_name: "老好人象山海鲜",
      goods_icon: '../../images/banner_01.png',
      order_name: '江巴人重庆市井火锅2人餐',
      order_status: '3', //1:待使用；2:待支付；3:待评价；4:已退款；5:已完成；6:已取消
      order_status_text: "待评价",
      create_order_time: '2020-07-12 13:24:52', //下单时间
      pay_time: '2020-07-12 13:24:52', //付款时间
      consumption_time: '2020-07-12 13:24:52', //消费时间
        arrive_time: '2020-07-12 13:24:52', //退款时间
      end_time: '2020-08-12 13:24:52', //订单有效期
      number: '1', //商品数量
      total_money: '88' //总金额
    }, {
      order_id: "4",
      store_icon: '../../images/banner_03.jpg',
      store_name: "原生态自助烤肉",
      goods_icon: '../../images/banner_02.jpg',
      order_name: '龙井先生私房餐厅2-3人餐',
      order_status: '4', //1:待使用；2:待支付；3:待评价；4:已退款；5:已完成；6:已取消
      order_status_text: "已退款",
      create_order_time: '2020-07-12 13:24:52', //下单时间
      pay_time: '2020-07-12 13:24:52', //付款时间
      consumption_time: '2020-07-12 13:24:52', //消费时间
        arrive_time: '2020-07-12 13:24:52', //退款时间
      end_time: '2020-08-12 13:24:52', //订单有效期
      number: '1', //商品数量
      total_money: '88' //总金额
    }, {
      order_id: "5",
      store_icon: '../../images/banner_02.jpg',
      store_name: "海蒸鲜（绿地新都会店）",
      goods_icon: '../../images/banner_01.png',
      order_name: '遇见川夫人单人餐',
      order_status: '5', //1:待使用；2:待支付；3:待评价；4:已退款；5:已完成；6:已取消
      order_status_text: "已完成",
      create_order_time: '2020-07-12 13:24:52', //下单时间
      pay_time: '2020-07-12 13:24:52', //付款时间
      consumption_time: '2020-07-12 13:24:52', //消费时间
        arrive_time: '2020-07-12 13:24:52', //退款时间
      end_time: '2020-08-12 13:24:52', //订单有效期
      number: '1', //商品数量
      total_money: '88' //总金额
    }, {
      order_id: "6",
      store_icon: '../../images/banner_01.png',
      store_name: "万福烤肉",
      goods_icon: '../../images/banner_01.png',
      order_name: '遵义羊肉粉',
      order_status: '6', //1:待使用；2:待支付；3:待评价；4:已退款；5:已完成；6:已取消
      order_status_text: "已取消",
      create_order_time: '2020-07-12 13:24:52', //下单时间
      pay_time: '2020-07-12 13:24:52', //付款时间
      consumption_time: '2020-07-12 13:24:52', //消费时间
        arrive_time: '2020-07-12 13:24:52', //退款时间
      end_time: '2020-08-12 13:24:52', //订单有效期
      number: '1', //商品数量
      total_money: '88' //总金额
    }]
  },
  onLoad: function(options) {
    // this.setData({
    //   tab_index: options.index
    // })
  },
  //切换顶部导航
  checkTab(e) {
    this.setData({
      tab_index: e.currentTarget.dataset.index
    })
  },

  //上拉加载
  onReachBottom() {
    console.log('上拉加载')
  },
  onShareAppMessage: function() {

  }
})