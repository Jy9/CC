//index.js
var app = getApp();
Page({
  data: {
    labels: [],
    iconUrl: "",
    content:[]
  },
  onLoad: function () {
    var thisData = this;
    thisData.setData({
      iconUrl: app.globalData.iconUrl,
      labels: app.globalData.labels
    })

    //读取文章列表
    app.query({
      url:"getarticlelist",
      success:function(data){
        thisData.setData({
          content: data.data
        });
      }
    })
  },
  peoplelist: function () {
    wx.showToast({
      title: '暂不提供打赏功能',
      icon: "none"
    })
  },
  about: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  personalcenter: function () {
    wx.navigateTo({
      url: '../personalcenter/personalcenter'
    })
  },
  subject: function (e) {
    if (e.target.id != "") {
      wx.navigateTo({
        url: '../subject/subject?id=' + e.target.id
      })
    }
  },
  content: function (e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../info/info?id=' + e.currentTarget.id
    })
  },
  msg:function(){
    wx.navigateTo({
      url: '../msg/msg'
    })
  }
})
