// components/OrderItem/order_item.js
Component({
  properties: {
    order_info:{
      type:Object,
      value:{}
    }
  },
  data: {

  },
  methods: {
    //店铺信息
    storeOrder(){
      wx.navigateTo({
        url: '/pages/store_detail/store_detail'
      });
    }
  }
})
