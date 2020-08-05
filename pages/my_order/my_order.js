// pages/my_order/my_order.js
Page({
  data: {
    tab_index: '0',    //默认选中全部
    order_list: [{
      order_id: "1",
      store_icon: '../../images/banner_01.png',
      store_name: "星巴克（西湖店）",
      order_status: '1',//1:待使用；2:待支付；3:待评价；4:退款/售后；5:已完成
      order_status_text: "待使用",
      apply_time: '',                      //申请退款时间
      failure_desc: '',                      //失败说明
      refund_status: '',  //1:退款中；2:已退款；3:退款失败
      order_type: '1',//1:套餐；2:优惠券；3:特价菜
      goods_icon: '../../images/banner_02.jpg',
      vouchers_money: "",
      order_name: '沪小川双人套餐',
      create_time: '2020-07-12 13:24:52',  //下单时间
      number: '1',
      total_money: '36',
      end_time: '2020-08-12 13:24:52'      //有效期
    }, {
      order_id: "2",
      store_icon: '../../images/banner_02.jpg',
      store_name: "竹筷子松江味",
      order_status: '1',//1:待使用；2:待支付；3:待评价；4:退款/售后；5:已完成
      order_status_text: "待使用",
      apply_time: '',                      //申请退款时间
      failure_desc: '',                      //失败说明
      refund_status: '',  //1:退款中；2:已退款；3:退款失败
      order_type: '2',//1:套餐；2:优惠券；3:特价菜
      goods_icon: '',
      vouchers_money: "100",
      order_name: '',
      create_time: '2020-07-12 13:24:52',
      number: '1',
      total_money: '100',
      end_time: '2020-08-12 13:24:52'
    }, {
      order_id: "3",
      store_icon: '../../images/banner_02.jpg',
      store_name: "遇见川芙蓉",
      order_status: '1',//1:待使用；2:待支付；3:待评价；4:退款/售后；5:已完成
      order_status_text: "待使用",
      apply_time: '',                      //申请退款时间
      failure_desc: '',                      //失败说明
      refund_status: '',  //1:退款中；2:已退款；3:退款失败
      order_type: '3',//1:套餐；2:优惠券；3:特价菜
      goods_icon: '../../images/banner_03.jpg',
      vouchers_money: "",
      order_name: '烤墨鱼一份',
      create_time: '2020-07-12 13:24:52',
      number: '2',
      total_money: '18',
      end_time: '2020-08-12 13:24:52'
    }, {
      order_id: "4",
      store_icon: '../../images/banner_03.jpg',
      store_name: "渝上侬重庆火锅",
      order_status: '2',//1:待使用；2:待支付；3:待评价；4:退款/售后；5:已完成
      order_status_text: "待支付",
      apply_time: '',                      //申请退款时间
      failure_desc: '',                      //失败说明
      refund_status: '',  //1:退款中；2:已退款；3:退款失败
      order_type: '1',//1:套餐；2:优惠券；3:特价菜
      goods_icon: '../../images/banner_02.jpg',
      vouchers_money: "",
      order_name: '渝上侬火锅2-4人套餐',
      create_time: '2020-07-12 13:24:52',
      number: '1',
      total_money: '108',
      end_time: '2020-08-12 13:24:52'
    }, {
      order_id: "5",
      store_icon: '../../images/banner_01.png',
      store_name: "老好人象山海鲜",
      order_status: '3',//1:待使用；2:待支付；3:待评价；4:退款/售后；5:已完成
      order_status_text: "待评价",
      apply_time: '',                      //申请退款时间
      failure_desc: '',                      //失败说明
      refund_status: '',  //1:退款中；2:已退款；3:退款失败
      order_type: '1',//1:套餐；2:优惠券；3:特价菜
      goods_icon: '../../images/banner_01.png',
      vouchers_money: "",
      order_name: '江巴人重庆市井火锅2人餐',
      create_time: '2020-07-12 13:24:52',
      number: '1',
      total_money: '180',
      end_time: '2020-08-12 13:24:52'
    }, {
      order_id: "6",
      store_icon: '../../images/banner_03.jpg',
      store_name: "原生态自助烤肉",
      order_status: '4',//1:待使用；2:待支付；3:待评价；4:退款/售后；5:已完成
      order_status_text: "退款中",
      apply_time: '2020-07-12 13:24:52',     //申请退款时间
      failure_desc: '',                      //失败说明
      refund_status: '1',  //1:退款中；2:已退款；3:退款失败
      order_type: '1',//1:套餐；2:优惠券；3:特价菜
      goods_icon: '../../images/banner_02.jpg',
      vouchers_money: "",
      order_name: '龙井先生私房餐厅2-3人餐',
      create_time: '2020-07-12 13:24:52',
      number: '1',
      total_money: '100',
      end_time: '2020-08-12 13:24:52'
    }, {
      order_id: "7",
      store_icon: '../../images/banner_02.jpg',
      store_name: "海蒸鲜（绿地新都会店）",
      order_status: '4',//1:待使用；2:待支付；3:待评价；4:退款/售后；5:已完成
      order_status_text: "已退款",
      apply_time: '2020-07-12 13:24:52',     //申请退款时间
      failure_desc: '',                      //失败说明
      refund_status: '2',  //1:退款中；2:已退款；3:退款失败
      order_type: '1',//1:套餐；2:优惠券；3:特价菜
      goods_icon: '../../images/banner_01.png',
      vouchers_money: "",
      order_name: '遇见川夫人单人餐',
      create_time: '2020-07-12 13:24:52',
      number: '1',
      total_money: '88',
      end_time: '2020-08-12 13:24:52'
    }, {
      order_id: "8",
      store_icon: '../../images/banner_01.png',
      store_name: "万福烤肉",
      order_status: '4',//1:待使用；2:待支付；3:待评价；4:退款/售后；5:已完成
      order_status_text: "退款失败",
      apply_time: '2020-07-12 13:24:52',     //申请退款时间
      failure_desc: '不想给你退款',                      //失败说明
      refund_status: '3',  //1:退款中；2:已退款；3:退款失败
      order_type: '1',//1:套餐；2:优惠券；3:特价菜
      goods_icon: '../../images/banner_01.png',
      vouchers_money: "",
      order_name: '遵义羊肉粉',
      create_time: '2020-07-12 13:24:52',
      number: '1',
      total_money: '69.8',
      end_time: '2020-08-12 13:24:52'
    }, {
      order_id: "9",
      store_icon: '../../images/banner_01.png',
      store_name: "万福烤肉",
      order_status: '5',//1:待使用；2:待支付；3:待评价；4:退款/售后；5:已完成
      order_status_text: "已完成",
      apply_time: '',     //申请退款时间
      failure_desc: '',                      //失败说明
      refund_status: '',  //1:退款中；2:已退款；3:退款失败
      order_type: '1',//1:套餐；2:优惠券；3:特价菜
      goods_icon: '../../images/banner_02.jpg',
      vouchers_money: "",
      order_name: '叫了只炸鸡',
      create_time: '2020-07-12 13:24:52',
      number: '1',
      total_money: '88',
      end_time: '2020-08-12 13:24:52'
    }]
  },
  onLoad: function (options) {
    this.setData({
      tab_index: options.index
    })
  },
  //切换顶部导航
  checkTab(e) {
    this.setData({
      tab_index: e.currentTarget.dataset.index
    })
  },
  //订单详情
  orderDetail(e) {
    let order_id = e.currentTarget.dataset.order_id;
    wx.navigateTo({
      url: '/pages/order_detail/order_detail?order_id=' + order_id
    });
  },
  //上拉加载
  onReachBottom() {
    console.log('上拉加载')
  },
  onShareAppMessage: function () {

  }
})