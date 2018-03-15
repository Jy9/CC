//info.js
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/"
  },
  onLoad: function (options) {
    var thisData = this;
    console.log(options.id);
  },
  headerback: function () {
    wx.navigateBack({})
  }
})