// components/WelfareItem/welfare_item.js
Component({
  properties: {
    
  },
  data: {

  },
  methods: {
    //进入套餐
    goDetail(e) {
      wx.navigateTo({
        url: '/pages/package_detail/package_detail',
      });
    }
  }
})