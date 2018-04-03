//subject.js
var app = getApp();
const $ = require('../../utils/util.js');
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    content: [],
    isshow:false
  },
  onLoad: function (options) {
    var thisData = this;
    console.log(options.id);
    wx.showLoading({
      title: '加载中...',
    })
    if (options.isshow){
      $.query({
        url: "getarticlelistisshow",
        success: function (data) {
          console.log(data.data)
          wx.hideLoading()
          thisData.setData({
            content: data.data,
            isshow:true
          })
        }
      })
    }else{
      $.query({
        url: "getarticlelistlabel",
        data: {
          label: options.id
        },
        success: function (data) {
          wx.hideLoading()
          console.log(data.data)
          thisData.setData({
            content: data.data
          })
        }
      })
    }
  },
  headerback: function () {
    wx.navigateBack({})
  },
  info:function(e){
    var that = this;
    if (that.data.isshow){
      var types = "wsh"
    }else{
      var types = "ok"
    }
    wx.navigateTo({
      url: '../info/info?type='+types+'&id=' + e.currentTarget.id,
    })
  }
})
