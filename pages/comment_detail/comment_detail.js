// pages/comment_detail/comment_detail.js
Page({
  data: {
    is_focus:false, // 默认输入框没有获取焦点
  },
  //点击评论
  sendComment(){
    this.setData({
      is_focus:true
    })
  }
})