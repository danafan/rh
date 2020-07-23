// pages/store_list/store_list.js
Page({
  data: {
    store_list: [{
      title: "火锅",
      store_left_list: [{
        store_id: '1',
        store_img: "../../images/banner_01.png",
        store_type: "小吃",
        store_name: "同学少年 湘派小串",
        star: "4.8",
        sort: '1',
        te: "锅包肉18元",
        hui: "2人餐48元，4人餐88元，4-6人餐128元",
        quan: "88代100元，70代100元",
        on_the_pin: '182'
      }, {
        store_id: '2',
        store_img: "../../images/banner_02.jpg",
        store_type: "自助餐",
        store_name: "金鲨自助烤场",
        star: "5.0",
        sort: '',
        te: '',
        hui: "2-3人餐128元",
        quan: "88代100元，70代100元",
        on_the_pin: '300'
      }, {
        store_id: '3',
        store_img: "../../images/banner_02.jpg",
        store_type: "烧烤烤肉",
        store_name: "盛宴海鲜烤肉自助餐厅",
        star: "4.2",
        sort: '3',
        te: '',
        hui: "2-3人餐128元",
        quan: "88代100元，70代100元",
        on_the_pin: '300'
      }, {
        store_id: '4',
        store_img: "../../images/banner_03.jpg",
        store_type: "东北菜",
        store_name: "狼一家铁锅炖",
        star: "4.6",
        sort: '2',
        te: '大饼子贴小鱼一份',
        hui: "2-3人餐128元",
        quan: "88代100元，70代100元",
        on_the_pin: '300'
      }, {
        store_id: '5',
        store_img: "../../images/banner_03.jpg",
        store_type: "东北菜",
        store_name: "狼一家铁锅炖",
        star: "4.6",
        sort: '2',
        te: '大饼子贴小鱼一份',
        hui: "2-3人餐128元",
        quan: "88代100元，70代100元",
        on_the_pin: '300'
      }],
      store_right_list: [{
        store_id: '6',
        store_img: "../../images/banner_03.jpg",
        store_type: "东北菜",
        store_name: "狼一家铁锅炖",
        star: "4.6",
        sort: '2',
        te: '大饼子贴小鱼一份',
        hui: "2-3人餐128元",
        quan: "88代100元，70代100元",
        on_the_pin: '300'
      }, {
        store_id: '7',
        store_img: "../../images/banner_01.png",
        store_type: "小吃",
        store_name: "同学少年 湘派小串",
        star: "4.8",
        sort: '1',
        te: "锅包肉18元",
        hui: "2人餐48元，4人餐88元，4-6人餐128元",
        quan: "88代100元，70代100元",
        on_the_pin: '182'
      }, {
        store_id: '8',
        store_img: "../../images/banner_03.jpg",
        store_type: "东北菜",
        store_name: "狼一家铁锅炖",
        star: "4.6",
        sort: '2',
        te: '大饼子贴小鱼一份',
        hui: "2-3人餐128元",
        quan: "88代100元，70代100元",
        on_the_pin: '300'
      }, {
        store_id: '9',
        store_img: "../../images/banner_02.jpg",
        store_type: "自助餐",
        store_name: "金鲨自助烤场",
        star: "5.0",
        sort: '',
        te: '',
        hui: "2-3人餐128元",
        quan: "88代100元，70代100元",
        on_the_pin: '300'
      }, {
        store_id: '10',
        store_img: "../../images/banner_02.jpg",
        store_type: "烧烤烤肉",
        store_name: "盛宴海鲜烤肉自助餐厅",
        star: "4.2",
        sort: '3',
        te: '',
        hui: "2-3人餐128元",
        quan: "88代100元，70代100元",
        on_the_pin: '300'
      }]
    }], //信息列表
  },
  onLoad: function(options) {
    //获取品牌列表
    // this.getInfoList();
  },
  //获取品牌列表
  getInfoList() {

  },
  onShareAppMessage: function() {

  }
})