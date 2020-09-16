// components/PackageItem/package_item.js
Component({
  properties: {
    package_info:{
      type:Object,
      value:{}
    },
    image_height:{
      type:String,
      value:""
    },
    page_type:{
      type: String,
      value: ""
    }
  },
  methods: {
    //进入套餐详情
    packageDetail() {
      wx.navigateTo({
        url: '/pages/package_detail/package_detail',
      });
    },
  }
})
