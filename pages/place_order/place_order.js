// pages/place_order/place_order.js
Page({
  data: {
    number: 1, //默认商品数量
    red_package_num: 1, //红包数量
    red_package_money:30,  //使用红包金额
    integral_use:false, //是否使用积分
    balance_use:false,   //是否使用余额
  },
  onLoad(options){
    console.log(options)
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
  //套餐详情
  packageDetail() {
    wx.navigateTo({
      url: '/pages/package_detail/package_detail'
    });
  },
  //选择红包
  envelopeList(){
    wx.navigateTo({
      url: '/pages/red_envelope/red_envelope?page_type=order',
    });
  },
  //操作余额
  checkBalance() {
    this.setData({
      balance_use: !this.data.balance_use
    })
  },
  //操作积分
  checkIntegral(){
    this.setData({
      integral_use: !this.data.integral_use
    })
  },
  //提交订单
  placeOrder(){
    wx.navigateTo({
      url: '/pages/pay_order/pay_order',
    });
  }
})