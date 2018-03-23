//msg.js
var app = getApp();
Page({
  data: {
    
  },
  onLoad: function () {
    var thisData = this;
    thisData.setData({
      iconUrl: app.globalData.iconUrl
    });
    thisData.setData({
      peoplenum: 12
    });
  },
  headerback: function () {
    wx.navigateBack({})
  },
})
