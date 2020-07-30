// components/SearchBox/search_box.js
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
    //获取当前位置
    getLocationInfo() {
      wx.chooseLocation({
        success: function (res) {
          console.log(res)
          // var name = res.name
          // var address = res.address
          // var latitude = res.latitude
          // var longitude = res.longitude
          // _this.setData({
          //   name: name,
          //   address: address,
          //   latitude: latitude,
          //   longitude: longitude
          // })
        }
      })
    },
  }
})
