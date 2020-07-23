// components/PushItem/push_item.js
var app = getApp();
Component({
  properties: {
    storeItem: {
      type: Object, //类型
      value: {} //默认值
    },
  },
  data: {
    baseUrl: app.globalData.baseUrl,
  },
  methods: {
    //进入详情
    goDetail() {
      wx.navigateTo({
        url: '/pages/store_detail/store_detail',
      });
    },
  }
})