// product.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../img/pro-banner.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    title: 'PARK双眼皮+开后眼角',
    oldPrice: 12800,
    price: 6999,
    sales: 23,
    group: 2,
    monthPay: 583,
    ping: 'flase' //正在美拼
  },
  showPing:function () {  //显示正在美拼
    this.setData({
      ping:!this.data.ping
    })
  },
  hidePing:function () {  //关闭正在美拼
    this.setData({
      ping: !this.data.ping
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})