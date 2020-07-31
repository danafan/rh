// components/CateStoreItem/cate_store_item.js
var app = getApp();
Component({
  properties: {
    storeItem: {
      type: Object, //类型
      value: {} //默认值
    }
  },
  data: {
    baseUrl: app.globalData.baseUrl
  },
  methods: {
    //店铺详情
    goDetail() {
      wx.navigateTo({
        url: '/pages/store_detail/store_detail',
      });
    },
    //套餐详情
    packageDetail(){
      wx.navigateTo({
        url: '/pages/package_detail/package_detail',
      });
    }
  }
})
