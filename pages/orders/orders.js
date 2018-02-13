// pages/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: 1 , //1待付款  2待成团  3已成团  4待评论
    waitPay:[
      {
        id:1,
        orderId:'2035666',
        thumb:'/img/head3.jpg',
        title:'PARK双眼皮+开后眼角',
        intro:'院长施术PARK双眼皮，四层缝合术避开大血管 恢复更快，限量发售。',
        price:'300.00',
        payTime:'14:31'
      }
    ]
  },
  menuClick:function (e) {
    this.setData({
      tab: e.target.dataset.num
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.setData({
        tab: e.tab
    })
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