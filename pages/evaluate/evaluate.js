// pages/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anonymity:true,
    evlClass:'1',
    imgs: []
  },
  feel:function (e) { // 好中差评
    // console.log(e.currentTarget.dataset.num)
    this.setData({
      evlClass: e.currentTarget.dataset.num
    })
  },
  upImg:function () {
    const that = this;
    wx.chooseImage({
      count:6,
      sizeType:['compressed'], //压缩图
      sourceType:['album','camera'],
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths
        let imgs = that.data.imgs

        for( let i=0;i<tempFilePaths.length;i++){
          if(imgs.length >= 6){
            that.setData({
              imgs:imgs
            })
            // return false
          }else{
            imgs.push(tempFilePaths[i])
          }
        }
        that.setData({
          imgs: imgs
        })
        // console.log(res.tempFilePaths)
      }
    })
  },
  previewImg: function (e) {
    const current = e.target.dataset.src
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imgs // 需要预览的图片http链接列表
    })
    console.log(e)
  },
  deleteImg:function (e) {
    let imgs = this.data.imgs
    const index = e.currentTarget.dataset.index
    imgs.splice(index,1)
    this.setData({
      imgs:imgs
    })
    // console.log(e.currentTarget.dataset.index)
  },
  isAnonymity: function () {
    this.setData({
      anonymity: !this.data.anonymity
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