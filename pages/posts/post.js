Page({

  /**
   * 页面的初始数据
   */
  data: {
    // date2: "April 5 2018",
    /**数据绑定，另外一边可以直接引用 */
    haimian_key: []


  },


  /** 我的第一个函数* */
  process: function() {


  },


  /**
   * 生命周期函数--监听页面加载
   * 从服务器获取数据应该和页面加载放一起
   */
  onLoad: function(options) {
    console.log("onLoad");

    /**假设下面的数据是从服务器获取到的 */
    var haimian = [{
        date: "July 12 2017",
        title: "海绵宝宝1",
        content: "《海绵宝宝》（SpongeBob SquarePants）是一部由舍曼·科恩、沃特·杜赫、山姆·亨德森、保罗·蒂比特等导演，汤姆·肯尼、比尔·法格巴克、罗杰·布帕斯等配音的美国喜剧动画，于1999年7月17日在尼克国际儿童频道开播",
        img: {
          imgtouxiang: "/images/touxiang/touxiang1.png",
          img: "/images/artical/01.png",
        },
        shou: "78",
        zan: "187"
      },

      {
        date: "April 5 2018",
        title: "海绵宝宝2",
        content: "《海绵宝宝》的故事情节主要围绕着主角海绵宝宝和他的好朋友派大星、邻居章鱼哥、上司蟹老板等人展开，场景设定于太平洋海底，一座被称为比奇堡的城市.2005年1月30日，该片荣获第32届安妮奖授予的“最佳TV动画制作”奖",
        img: {
          imgtouxiang: "/images/touxiang/touxiang2.png",
          img: "/images/artical/02.png",
        },
        shou: "87",
        zan: "198"
      }
    ]

    this.setData({
      haimian_key: haimian
    });



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("onReady");

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("onShow");
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
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log("onShareAppMessage");
  }
})