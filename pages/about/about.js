//about.js
var app = getApp();
Page({
  data: {
    iconUrl: "",
    peoplenum: 0
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
