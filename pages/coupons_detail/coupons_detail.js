// pages/coupons_detail/coupons_detail.vue.js
Page({
  data: {

  },
  //进入店铺详情
  storeDetail() {
    wx.navigateTo({
      url: '/pages/store_detail/store_detail',
    });
  },
})