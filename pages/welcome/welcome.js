Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap: function(event) {
    wx.redirectTo({
      url: '/pages/posts/post'
    });

    // wx.navigateTo({
    //   url: '/pages/posts/post',
    //sucess 执行成功时，执行的函数,fail失败时执行，complete无论成功失败都执行
    // success: function(res) {
    //   },
    // fail:function(){

    // },
    // complete:function(){

    // }

    // })
    // console.log("onTap");


  },
  // onTextTap:function(event){
  //   console.log("onTextTap");


  // },






  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("onHide");

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})