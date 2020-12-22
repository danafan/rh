// components/BuyButton/buy_button.js
const app = getApp();
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
      if(app.globalData.userInfo){
        wx.navigateTo({
          url: '/pages/place_order/place_order',
        });
      }else{
        wx.navigateTo({
          url: '/pages/auth/auth'
        })
      }
     
    }
  }
})
