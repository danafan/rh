// components/StoreItem/store_item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    store_info:{
      type:Object,
      value:{}
    }
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
    //进入店铺详情
    storeDetail() {
      wx.navigateTo({
        url: '/pages/store_detail/store_detail',
      });
    },
  }
})
