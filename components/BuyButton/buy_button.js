// components/BuyButton/buy_button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //确认订单
    placeOrder(){
      wx.navigateTo({
        url: '/pages/place_order/place_order',
      });
    }
  }
})
