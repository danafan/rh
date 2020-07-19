// components/CouponsItem/coupons_item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    coupons_info:{
      type:Object,
      value:{}
    },
    page_type:{
      type:String,
      value:"index"
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
    //进入优惠详情
    goDetail(e) {
      let type = e.currentTarget.dataset.type;
      wx.navigateTo({
        url: '/pages/coupons_detail/coupons_detail?type=' + type,
      });
    },
  }
})
