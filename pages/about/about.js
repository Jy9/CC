//about.js
var app = getApp();
const $ = require("../../utils/util.js");
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
    $.query({
      url:"userlength",
      success:function(data){
        thisData.setData({
          peoplenum: data.data
        });
      }
    })
  },
  headerback: function () {
    wx.navigateBack({})
  },
})
