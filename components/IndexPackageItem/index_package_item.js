// components/IndexPackageItem/index_package_item.js
Component({
  properties: {
    package_info: {
      type: Object,
      value: {}
    }
  },
  data: {

  },
  methods: {
    //进入套餐详情
    goDetail(e) {
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/goods_detail/goods_detail?id=' + id,
      });
    },
  }
})

