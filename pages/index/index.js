//index.js
//获取应用实例
// const app = getApp()
Page({
  data:{
    test:[],
    categorys:[
      { id: 1,name:'眼睛'},
      { id: 2,name:'鼻部'},
      { id: 3,name:'注射类'},
      { id: 4,name:'皮肤类'},
      { id: 5,name:'牙科'},
      { id: 6,name:'自体脂肪填充'},
      { id: 7,name:'塑身美腿'},
      { id: 8,name:'美胸'},
      { id: 9,name:'抗衰老'}
    ],
    imgUrls: [
      '../../img/banner.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false, //是否显示小圆点
    autoplay: true,
    interval: 5000,
    duration: 1000,
    toggle:false,  // true false  隐藏分类
    proList:[
      {
      id:1,
      url:'/pages/product/product',
      headImg:'../../img/head.jpg',
      title:'运营部LULU推荐',
      intro:'院长施术PARK双眼皮，四层缝合术避开大血管恢复 更快，限量发售。',
      pic:'../../img/pic1.jpg',
      price:6999,
      price2:333.2,
      sales:15,
      evaluate:9
      },
      {
        id: 1,
        url: '/pages/product/product',
        headImg: '../../img/head.jpg',
        title: '运营部LULU推荐',
        intro: '院长施术PARK双眼皮，四层缝合术避开大血管恢复 更快，限量发售。',
        pic: '../../img/pic1.jpg',
        price: 6999,
        price2: 333.2,
        sales: 15,
        evaluate: 9
      },
      {
        id: 1,
        url: '/pages/product/product',
        headImg: '../../img/head.jpg',
        title: '运营部LULU推荐',
        intro: '院长施术PARK双眼皮，四层缝合术避开大血管恢复 更快，限量发售。',
        pic: '../../img/pic1.jpg',
        price: 6999,
        price2: 333.2,
        sales: 15,
        evaluate: 9
      }
    ]
  },
  onLoad: function () {
    const requestTask = wx.request({
      url: 'http://172.16.0.97/goods/goods_type', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let that = this
        console.log(res.data)
        that.setData({
          test: res.data
        })
      }
    })
    // console.log(1)
  }
  ,
  showCategory: function () {
    // console.log(11111)
    this.setData({
      toggle: !this.data.toggle
    })
  }
})