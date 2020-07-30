// components/IndexCenter/index_center.js
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
    package_list: [{
      package_id: '1',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-001.jpg",
      store_name: "虾小哥 浇汁大虾",
      package_name: "大吉大利今晚吃鸡套餐",
      old_price: "38",
      now_price: "12",
      sold_num: "182"
    }, {
      package_id: '2',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-005.jpg",
      store_name: "老男孩 川湘菜",
      package_name: "美味单人套餐（含米饭）",
      old_price: "42",
      now_price: "18",
      sold_num: "160"
    }, {
      package_id: '3',
      package_img: "https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-001.jpg",
      store_name: "好生活麻辣香锅",
      package_name: "干锅有机花菜套餐",
      old_price: "29",
      now_price: "12.8",
      sold_num: "78"
    }], //套餐列表
    preferential: [{
      id: "1",
      food_img: 'https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi.jpg',
      store_name: "一点点（人民路店）",
      goods_name: "红茶玛奇朵一份",
      total_num: 200,
      rob_num: 118,
      old_price: "39",
      now_price: "12.9",
      discount: "8.5",
    }, {
      id: "2",
      food_img: 'https://img.ivsky.com/img/tupian/t/202002/14/xican_meishi-005.jpg',
      store_name: "外婆家",
      goods_name: "西湖醋鱼",
      total_num: 200,
      rob_num: 32,
      old_price: "88",
      now_price: "68",
      discount: "8.0"
    }, {
      id: "3",
      food_img: 'https://img.ivsky.com/img/tupian/t/202002/28/riben_meishi-007.jpg',
      store_name: "叫了只炸鸡",
      goods_name: "椒盐整鸡一份",
      rob_num: 65,
      old_price: "42.5",
      now_price: "19.8",
      discount: "7.5"
    }], //特价菜列表
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //套餐列表
    packageList() {
      wx.navigateTo({
        url: '/pages/package_list/package_list',
      });
    },
    //特价菜列表
    foodList() {
      wx.navigateTo({
        url: '/pages/food_list/food_list',
      });
    },
    //特价菜详情
    foodDetail() {
      wx.navigateTo({
        url: '/pages/food_detail/food_detail',
      });
    },
    //券商场
    vouchersList() {
      wx.navigateTo({
        url: '/pages/coupons_list/coupons_list',
      });
    },
  }
})
