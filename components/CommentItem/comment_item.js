// components/CommentItem/comment_item.js
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
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 查看评价详情
    commentDetail(){
      wx.navigateTo({
        url: '/pages/comment_detail/comment_detail',
      });
    }
  }
})
