// components/ItemStore/item_store.js
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
    //店铺详情
    goDetail() {
      wx.navigateTo({
        url: '/pages/store_detail/store_detail',
      });
    },
  }
})
