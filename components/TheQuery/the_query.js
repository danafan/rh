// components/TheQuery/the_query.js

Component({
  properties: {

  },
  data: {
    sort_id:"1",
    left_text: "智能排序",
    sort_list: [{
      id: '1',
      name: '智能排序'
    }, {
      id: '2',
      name: '销量最高'
    }, {
      id: '3',
      name: '评价最高'
    }],
  },
  methods: {
    //点击左侧选择
    bindPickerChange(e) {
      let pickIndex = e.detail.value;
      this.setData({
        left_text: this.data.sort_list[pickIndex].name,
        sort_id: this.data.sort_list[pickIndex].id
      })
      this.triggerEvent('onEmit', { sort_id: this.data.sort_list[pickIndex].id});
    },
    //点击右侧选择
    checkClosest() {
      this.setData({
        sort_id: "4"
      })
      this.triggerEvent('onEmit', { sort_id: "4"});
    }

  }
})