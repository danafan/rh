// pages/red_envelope/red_ envelope.js
Page({
  data: {
    list: [{
      id: '1',
      title: "会员专享红包",
      money: "30",
      time: "2020-08-25",
      is_check: false
    }, {
      id: '2',
      title: "会员专享红包",
      money: "10",
      time: "2020-08-10",
      is_check: false
    }, {
      id: '3',
      title: "会员专享红包",
      money: "10",
      time: "2020-08-10",
      is_check: false
    }, {
      id: '4',
      title: "会员专享红包",
      money: "10",
      time: "2020-08-10",
      is_check: false
    }, {
      id: '5',
      title: "会员专享红包",
      money: "10",
      time: "2020-08-10",
      is_check: false
    }, {
      id: '6',
      title: "会员专享红包",
      money: "10",
      time: "2020-08-10",
      is_check: false
    }],
    active_index: "",
    now_price: 0
  },
  onLoad: function(options) {

  },
  //选择红包
  check(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      active_index: this.data.active_index === index ? '' : index
    }, () => {
      this.setData({
        now_price: this.data.active_index === '' ? 0 : this.data.list[this.data.active_index].money
      })
    })
  },
  //返回确认订单
  placeOrder() {
    wx.navigateTo({
      url: '/pages/place_order/place_order',
    });
  }
})