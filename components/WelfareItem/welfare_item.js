// components/WelfareItem/welfare_item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 1:特价菜；2:套餐（店铺页面）
    type: {
      type: String,
      value: "1"
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
    //进入详情
    goDetail(e) {
      let type = e.currentTarget.dataset.type;
      if (type == '1') {
        wx.navigateTo({
          url: '/pages/coupons_detail/coupons_detail',
        });
      } else if (type == '2') {
        wx.navigateTo({
          url: '/pages/goods_detail/goods_detail',
        });
      }

    },
  }
})