// pages/coupons_list/coupons_list.js
Page({
  data: {
    preferential: [{
      id: "1",
      food_img: 'https://p0.meituan.net/dealwatera/7b90611c137f2c2dc0122a79c7e58ade95682.jpg@130w_130h_1e_1c',
      store_name: "一点点（人民路店）",
      goods_name: "红茶玛奇朵一份",
      total_num: 200,
      rob_num: 118,
      old_price: "39",
      now_price: "12.9",
      discount: "8.5"
    }, {
      id: "2",
      food_img: 'https://p0.meituan.net/dealwatera/7b90611c137f2c2dc0122a79c7e58ade95682.jpg@130w_130h_1e_1c',
      store_name: "外婆家",
      goods_name: "西湖醋鱼",
      total_num: 200,
      rob_num: 32,
      old_price: "88",
      now_price: "68",
      discount: "8.0"
    }, {
      id: "3",
      food_img: 'https://p0.meituan.net/dealwatera/7b90611c137f2c2dc0122a79c7e58ade95682.jpg@130w_130h_1e_1c',
      store_name: "叫了只炸鸡",
      goods_name: "椒盐整鸡一份",
      rob_num: 65,
      old_price: "42.5",
      now_price: "19.8",
      discount: "7.5"
    }], //特价菜列表
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