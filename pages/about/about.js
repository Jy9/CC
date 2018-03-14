//about.js
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    peoplenum:0
  },
  onLoad: function () {
    var thisData = this;
    thisData.setData({
      peoplenum:12
    });
  },
  headerback: function () {
    wx.navigateBack({})
  },
})
