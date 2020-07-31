// pages/store_detail/store_detail.js
Page({
  data: {
    rules_list: [{
      id: '1',
      val: '每桌限用1份'
    }, {
      id: '2',
      val: '满400可用'
    }, {
      id: '3',
      val: '不与其他优惠叠加使用'
    }, {
      id: '4',
      val: '营业时间：9:00 -- 22:00'
    }, {
      id: '5',
      val: '使用期限：2020-07-26至2020-08-26（周末、法定节假日通用）'
    }],
    tag_list: [{
      id: '1',
      val: '有宝宝椅'
    }, {
      id: '2',
      val: '免费wifi'
    }, {
      id: '3',
      val: '免费停车'
    }]
  },
  onLoad(option) {
    // this.setData({
    //   type: option.type
    // })
  },
  //进入店铺详情
  storeDetail() {
    wx.navigateTo({
      url: '/pages/store_detail/store_detail',
    });
  },
})