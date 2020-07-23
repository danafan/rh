// components/CouponsItem/coupons_item.js
Component({
  properties: {
    coupons_info:{
      type:Object,
      value:{}
    }
  },
  data: {

  },
  methods: {
    //进入优惠券详情
    goDetail(e) {
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/coupons_detail/coupons_detail?id=' + id,
      });
    },
  }
})
