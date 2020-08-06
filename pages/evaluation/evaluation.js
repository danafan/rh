// pages/evaluation/evaluation.js
Page({
  data: {
    star: 0,    //星级
    star_list: ['../../images/hot_icon_text.png', '../../images/hot_icon_text.png', '../../images/hot_icon_text.png', '../../images/hot_icon_text.png', '../../images/hot_icon_text.png'],
    star_toast: "",
    upload_imgs: [],  //选择的图片地址列表
    evaluation_content:"",      //评价内容
    anonymous:false,        //是否匿名评价
    order_id:""
  },
  onLoad: function(options) {
    let order_id = options.order_id;
    this.setData({
      order_id: order_id
    })
    console.log(this.data.order_id)
  },
  //评分
  changeStar(e) {
    this.setData({
      star_list: ['../../images/hot_icon_text.png', '../../images/hot_icon_text.png', '../../images/hot_icon_text.png', '../../images/hot_icon_text.png', '../../images/hot_icon_text.png']
    })
    var index = e.currentTarget.dataset.index;
    this.data.star_list.map((item, i) => {
      let arr = JSON.parse(JSON.stringify(this.data.star_list));
      arr.splice(i, 1, '../../images/hot_icon.png')
      if (i <= index) {
        this.setData({
          star_list: arr
        })
      }
    })
    let star_toast = "";
    switch (index + 1) {
      case 1:
        star_toast = "不满意";
        break;
      case 2:
        star_toast = "一般";
        break;
      case 3:
        star_toast = "不错";
        break;
      case 4:
        star_toast = "满意";
        break;
      case 5:
        star_toast = "超赞";
        break;
      default:
        star_toast = "";
    }
    this.setData({
      star: index + 1,
      star_toast: star_toast
    })
  },
  //监听评论内容输入
  changeInuput(v) {
    if (v.detail.cursor >= 20){
      wx.showToast({
        title: '不能超过140字',
        icon: 'none',
        duration: 1500,
        mask: true
      })
    }
    this.setData({
      evaluation_content: v.detail.value
    })
  },
  //上传文件
  upload_file(v) {
    if (this.data.upload_imgs.length + v.detail.length > 9) {
      wx.showToast({
        title: '图片不能超过9张',
        icon: 'none',
        duration: 1500,
        mask: true
      })
    }else{
      this.setData({
        upload_imgs: [...this.data.upload_imgs, ...v.detail]
      })
    }
  },
  //删除文件
  deleteImg(e) {
    var index = e.currentTarget.dataset.index;
    var images = this.data.upload_imgs;
    images.splice(index, 1);
    this.setData({
      upload_imgs: images
    })
  },
  // 切换匿名评价
  anonymousChange(v){
    this.setData({
      anonymous:v.detail.value
    })
  }




})