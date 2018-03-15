//info.js
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    textareafocus:false
  },
  onLoad: function (options) {
    var thisData = this;
    console.log(options.id);
  },
  headerback: function () {
    wx.navigateBack({})
  },
  footerview:function(){
    this.setData({
      textareafocus:true
    })
  }
})