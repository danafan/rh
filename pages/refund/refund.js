// pages/refund/refund.js
Page({
  data: {
    refund_list: [{
      id: '1',
      name: '计划有变，没时间消费',
      checked: false
    }, {
      id: '2',
      name: '没看清使用规则，要用时发现限制多',
      checked: false
    }, {
      id: '3',
      name: '用现金/支付宝/微信支付了优惠价格',
      checked: false
    }, {
      id: '4',
      name: '店里活动更优惠',
      checked: false
    }, {
      id: '5',
      name: '商家营业但不接待',
      checked: false
    }]
  },
  onLoad(option){
    let order_id = option.order_id;
    console.log(order_id)
  },
  //选择退款原因
  checkItem(e){
    let index = e.currentTarget.dataset.index;
    let id = e.currentTarget.dataset.id;
    let arr = this.data.refund_list;
    arr.map((item,i) => {
      if (index == i){
        item.checked = !item.checked
      }
    })
    this.setData({
      refund_list: arr
    })
  },
  //点击申请退款
  applyRefund(){
    var arr = [];
    this.data.refund_list.map(item => {
      if (item.checked){
        arr.push(item.id);
      }
    })
    if (arr.length == 0){
      wx.showToast({
        title: '最少选择一个退款原因',
        icon: 'none',
        duration: 1500,
        mask: true
      })
    }else{
      console.log(arr)
    }
  }

})