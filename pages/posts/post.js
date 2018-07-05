// 用来接收输出的对象require来获得
var postdata =require("../../data/post-data.js")//rquire后面是路径地址，但是只能用相对路径，不能用绝对路径

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // date2: "April 5 2018",
    /**数据绑定，另外一边可以直接引用 */
    // haimian_key: []


  },


  /** 我的第一个函数* */
  process: function() {


  },


  /**
   * 生命周期函数--监听页面加载
   * 从服务器获取数据应该和页面加载放一起
   */
  onLoad: function(options) {
    // console.log("onLoad");

    /**假设下面的数据是从服务器获取到的 */

// this.setData来更新上方data里的数据来实现数据绑定
//小程序总是会读取data对象来做数绑定，而这个动作是在onload执行之后才发生的。
    this.setData({
      haimian_key: postdata.postlist
    });



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