// pages/coupons_list/coupons_list.js
Page({
  data: {
    preferential: [{
      id: "1",
      food_img: 'https://imagev2.xmcdn.com/group83/M08/95/B2/wKg5HV8D-qqjXsIpAA0b8M5shq8828.jpg!strip=1&quality=7&magick=jpg&op_type=5&upload_type=cover&name=web_large&device_type=ios',
      store_name: "一点点（人民路店）",
      goods_name: "红茶玛奇朵一份",
      total_num: 200,
      rob_num: 118,
      old_price: "39",
      now_price: "12.9",
      discount: "8.5"
    }, {
      id: "2",
        food_img: 'https://imagev2.xmcdn.com/group80/M03/47/33/wKgPEV7LRkGD-JQCABewM-Bp26Y577.png!strip=1&quality=7&magick=jpg&op_type=5&upload_type=cover&name=web_large&device_type=ios',
      store_name: "外婆家",
      goods_name: "西湖醋鱼",
      total_num: 200,
      rob_num: 32,
      old_price: "88",
      now_price: "68",
      discount: "8.0"
    }, {
      id: "3",
        food_img: 'https://imagev2.xmcdn.com/group78/M02/D0/3D/wKgO1l6FqoSCAuDoAAvSp1EA3IE294.jpg!strip=1&quality=7&magick=jpg&op_type=5&upload_type=cover&name=web_large&device_type=ios',
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