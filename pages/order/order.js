// pages/order/order.js
Page({
  data: {
    tab_index:'0',    //默认选中全部
    order_list:[{
      order_id:"1",
      store_icon:'../../images/banner_01.png',
      store_name:"星巴克（西湖店）",
      order_status:'1',//1:待使用；2:待支付；3:退款/售后；4:已完成
      order_type:'1',//1:套餐；2:优惠券；3:特价菜
      package_icon:'../../images/banner_02.jpg',
      vouchers_money:"",
      food_icon:'',
      package_name:'沪小川双人套餐',
      food_name:'',
      create_time:'2020-07-12 13:24:52',
      number:'1',
      total_money:'36',
      end_time:'2020-08-12 13:24:52'
    }, {
        order_id: "2",
        store_icon: '../../images/banner_02.jpg',
        store_name: "竹筷子松江味",
        order_status: '1',//1:待使用；2:待支付；3:退款/售后
        order_type: '2',//1:套餐；2:优惠券；3:特价菜
        package_icon: '',
        vouchers_money: "100",
        food_icon: '',
        package_name: '',
        food_name: '',
        create_time: '2020-07-12 13:24:52',
        number: '1',
        total_money: '100',
        end_time: '2020-08-12 13:24:52'
      }, {
        order_id: "3",
        store_icon: '../../images/banner_02.jpg',
        store_name: "遇见川芙蓉",
        order_status: '1',//1:待使用；2:待支付；3:退款/售后
        order_type: '3',//1:套餐；2:优惠券；3:特价菜
        package_icon: '',
        vouchers_money: "",
        food_icon: '../../images/banner_03.jpg',
        package_name: '',
        food_name: '烤墨鱼一份',
        create_time: '2020-07-12 13:24:52',
        number: '2',
        total_money: '18',
        end_time: '2020-08-12 13:24:52'
      }, {
        order_id: "4",
        store_icon: '../../images/banner_03.jpg',
        store_name: "渝上侬重庆火锅",
        order_status: '2',//1:待使用；2:待支付；3:退款/售后
        order_type: '1',//1:套餐；2:优惠券；3:特价菜
        package_icon: '../../images/banner_02.jpg',
        vouchers_money: "",
        food_icon: '',
        package_name: '渝上侬火锅2-4人套餐',
        food_name: '',
        create_time: '2020-07-12 13:24:52',
        number: '1',
        total_money: '108',
        end_time: '2020-08-12 13:24:52'
      }, {
        order_id: "5",
        store_icon: '../../images/banner_01.png',
        store_name: "老好人象山海鲜",
        order_status: '2',//1:待使用；2:待支付；3:退款/售后
        order_type: '2',//1:套餐；2:优惠券；3:特价菜
        package_icon: '',
        vouchers_money: "180",
        food_icon: '',
        package_name: '',
        food_name: '',
        create_time: '2020-07-12 13:24:52',
        number: '1',
        total_money: '180',
        end_time: '2020-08-12 13:24:52'
      }, {
        order_id: "6",
        store_icon: '../../images/banner_03.jpg',
        store_name: "原生态自助烤肉",
        order_status: '2',//1:待使用；2:待支付；3:退款/售后
        order_type: '3',//1:套餐；2:优惠券；3:特价菜
        package_icon: '',
        vouchers_money: "",
        food_icon: '../../images/banner_02.jpg',
        package_name: '',
        food_name: '特色五花肉',
        create_time: '2020-07-12 13:24:52',
        number: '1',
        total_money: '100',
        end_time: '2020-08-12 13:24:52'
      }, {
        order_id: "7",
        store_icon: '../../images/banner_02.jpg',
        store_name: "海蒸鲜（绿地新都会店）",
        order_status: '3',//1:待使用；2:待支付；3:退款/售后
        order_type: '1',//1:套餐；2:优惠券；3:特价菜
        package_icon: '../../images/banner_01.png',
        vouchers_money: "",
        food_icon: '',
        package_name: '2-3人烤鱼套餐',
        food_name: '',
        create_time: '2020-07-12 13:24:52',
        number: '1',
        total_money: '88',
        end_time: '2020-08-12 13:24:52'
      }, {
        order_id: "8",
        store_icon: '../../images/banner_01.png',
        store_name: "万福烤肉",
        order_status: '3',//1:待使用；2:待支付；3:退款/售后
        order_type: '2',//1:套餐；2:优惠券；3:特价菜
        package_icon: '',
        vouchers_money: "69.8",
        food_icon: '',
        package_name: '',
        food_name: '',
        create_time: '2020-07-12 13:24:52',
        number: '1',
        total_money: '69.8',
        end_time: '2020-08-12 13:24:52'
      }, {
        order_id: "9",
        store_icon: '../../images/banner_01.png',
        store_name: "万福烤肉",
        order_status: '4',//1:待使用；2:待支付；3:退款/售后
        order_type: '2',//1:套餐；2:优惠券；3:特价菜
        package_icon: '',
        vouchers_money: "88",
        food_icon: '',
        package_name: '',
        food_name: '',
        create_time: '2020-07-12 13:24:52',
        number: '1',
        total_money: '88',
        end_time: '2020-08-12 13:24:52'
      }]
  },
  onLoad: function (options) {
    this.setData({
      tab_index: options.index
    })
  },
  //切换顶部导航
  checkTab(e){
    this.setData({
      tab_index:e.currentTarget.dataset.index
    })
  },
  //上拉加载
  onReachBottom() {
    console.log('上拉加载')
  },
  onShareAppMessage: function () {

  }
})