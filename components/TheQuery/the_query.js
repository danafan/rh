// components/TheQuery/the_query.js

Component({
  properties: {

  },
  data: {
    showSelect: false, //默认不显示弹框
    type: '1',
    left_text: "智能排序"
  },
  methods: {
    //点击左侧选择
    getQuery() {
      this.setData({
        showSelect: !this.data.showSelect
      })
    },
    //点击左侧选择
    closeQuery() {
      this.setData({
        showSelect: false
      })
    },
    //选择
    checkItem(e) {
      let type = e.currentTarget.dataset.type;
      if (type == '1') {
        this.setData({
          left_text: '智能排序'
        })
      } else if (type == '2') {
        this.setData({
          left_text: '销量最高'
        })
      } else if (type == '3') {
        this.setData({
          left_text: '评价最高'
        })
      }
      this.setData({
        type: type,
        showSelect:false
      })
      console.log(type)
    }
  }
})