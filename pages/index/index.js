//index.js
//获取应用实例
// const app = getApp()
Page({
  data:{
    categorys:[], //产品分类
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
    proList: [],
    imgurl:null
  },
  
  onLoad: function () { 
    const that = this
    const url=getApp().data.api
    that.setData({
      imgurl : getApp().data.api + '/'
    })
    // console.log(that.api)
    //产品分类
    wx.request({
      url: url +'/goods/goods_type',
      success: res => {
        this.setData({
          categorys:res.data.result
        })
      }
    })

    // 产品列表
    wx.request({
      url: url + '/goods',
      success: res => {
        this.setData({
          proList: res.data.result
        })
      }
    })
  }
  ,
  showCategory: function () {
    // console.log(11111)
    this.setData({
      toggle: !this.data.toggle
    })
  }
})