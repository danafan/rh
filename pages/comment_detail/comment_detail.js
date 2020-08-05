// pages/comment_detail/comment_detail.js
Page({
  data: {
    is_focus:false, // 默认输入框没有获取焦点
    imgs: ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1942169203,2282777752&fm=26&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2608571146,3647468270&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2213243739,2879070233&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2505490283,1352053537&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3112784576,2002302097&fm=26&gp=0.jpg'],
    show_big_img: false,
    current_index: 0, //当前选中的大图下标
  },
  //点击放大图片
  openBigImg(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      current_index: index,
      show_big_img: true
    })
  },
  close() {
    this.setData({
      show_big_img: false
    })
  },
  //点击评论
  sendComment(){
    this.setData({
      is_focus:true
    })
  }
})