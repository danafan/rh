// components/UploadFile/upload_file.js
Component({
  properties: {

  },
  data: {

  },
  methods: {
    //点击选择图片
    chooseImg() {
      wx.chooseImage({
        count: 9,
        success: (res) => {
          this.triggerEvent('onEmit', res.tempFilePaths);
        }
      })
    }
  }
})
