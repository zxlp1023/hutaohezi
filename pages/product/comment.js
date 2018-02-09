// comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    on:1,
    all:'',
    haveImg:'', //有图的数量
    commentList:[
      { id: 1, img: ['/img/head2.jpg']},
      { id: 2, img: ''},
      { id: 3, img: ['/img/head2.jpg', '/img/head2.jpg']}
    ],
    imgComment:[] //有图的评论
  },
  menuClick: function (e) {
    this.setData({
      on: e.target.dataset.num
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
    // const that = this
    let imgComment = []
    imgComment = this.data.commentList.filter( item => {
      return item.img != ''
    })
    this.setData({
      all: this.data.commentList.length,
      haveImg: imgComment.length,
      imgComment: imgComment
    })
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