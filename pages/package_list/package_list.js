// pages/coupons_list/coupons_list.js
Page({
  data: {
    package_list: [{
      package_id: '1',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-001.jpg",
      store_name: "虾小哥浇汁大虾",
      package_name: "大吉大利今晚吃鸡套餐",
      old_price: "38",
      now_price: "12",
      discount: "7.8",
      category_name: "特色菜",
      distance: "4.2"
    }, {
      package_id: '2',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg",
      store_name: "老男孩川湘菜",
      package_name: "美味单人套餐（含米饭）",
      old_price: "42",
      now_price: "18",
      discount: "7.8",
      category_name: "特色菜",
      distance: "4.2"
    }, {
      package_id: '3',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-001.jpg",
      store_name: "好生活麻辣香锅",
      package_name: "干锅有机花菜套餐",
      old_price: "29",
      now_price: "12.8",
      discount: "7.8",
      category_name: "特色菜",
      distance: "4.2"
    }, {
      package_id: '4',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-001.jpg",
      store_name: "好生活麻辣香锅",
      package_name: "干锅有机花菜套餐",
      old_price: "29",
      now_price: "12.8",
      discount: "7.8",
      category_name: "特色菜",
      distance: "4.2"
    }, {
      package_id: '5',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-001.jpg",
      store_name: "好生活麻辣香锅",
      package_name: "干锅有机花菜套餐",
      old_price: "29",
      now_price: "12.8",
      discount: "7.8",
      category_name: "特色菜",
      distance: "4.2"
    }, {
      package_id: '6',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-001.jpg",
      store_name: "好生活麻辣香锅",
      package_name: "干锅有机花菜套餐",
      old_price: "29",
      now_price: "12.8",
      discount: "7.8",
      category_name: "特色菜",
      distance: "4.2"
    }]
  },
  onLoad: function (options) {

  },
  //上拉加载
  onReachBottom() {
    console.log('上拉加载')
  },
  onShareAppMessage: function () {

  }
})