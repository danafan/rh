// components/FoodItem/food_item.js
Component({
  properties: {
    food_info: {
      type: Object,
      value: {}
    },
    page_type:{
      type: String,
      value: 'index'
    }
  },
  data: {

  },
  methods: {
    //特价菜详情
    foodDetail() {
      wx.navigateTo({
        url: '/pages/food_detail/food_detail',
      });
    },
  }
})
