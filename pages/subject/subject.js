//subject.js
var app = getApp();
const $ = require('../../utils/util.js');
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    content: []
  },
  onLoad: function (options) {
    var thisData = this;
    console.log(options.id);
    $.query({
      url:"getarticlelistlabel",
      data:{
        label: options.id
      },
      success:function(data){
        console.log(data.data)
        thisData.setData({
          content: data.data
        })
      }
    })
  },
  headerback: function () {
    wx.navigateBack({})
  }
})
