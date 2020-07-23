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
    //进入特价菜详情
    goDetail(e) {
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/food_detail/food_detail?id=' + id,
      });
    },
  }
})
