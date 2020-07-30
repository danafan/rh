// components/CateGoryIndex/category_index.js
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
    category_list: [{
      id: '1',
      iocn: '../../images/cate_02.png',
      name: '火锅'
    }, {
      id: '2',
      iocn: '../../images/cate_03.png',
      name: '烧烤烤肉'
    }, {
      id: '3',
      iocn: '../../images/cate_05.png',
      name: '海鲜'
    }, {
      id: '4',
      iocn: '../../images/cate_02.png',
      name: '自助餐'
    }, {
      id: '5',
      iocn: '../../images/cate_03.png',
      name: '特色菜'
    }, {
      id: '6',
      iocn: '../../images/cate_04.png',
      name: '川湘菜',
      tag: '无辣不欢'
    }, {
      id: '7',
      iocn: '../../images/cate_05.png',
      name: '日韩料理'
    }, {
      id: '8',
      iocn: '../../images/cate_02.png',
      name: '小吃快餐'
    }, {
      id: '9',
      iocn: '../../images/cate_04.png',
      name: '西餐'
    }, {
      id: '10',
      iocn: '../../images/cate_03.png',
      name: '蛋糕奶茶'
    }], //分类列表
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击跳转到分类页面
    goCategory(e) {
      let id = e.currentTarget.dataset.id;
      let index = e.currentTarget.dataset.index;
      wx.navigateTo({
        url: '/pages/category/category?id=' + id + '&index=' + index
      })
    },
  }
})
