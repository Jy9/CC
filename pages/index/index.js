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
    thisData.setData({
      content: [{
        id: 1,
        date: "2108/3/13",
        title: "我是开发者",
        name: "贾越",
        details: "奥萨蒂哦我的阿斯觉得我啊asd阿d阿三大王的啊是的哇打算的阿三大王的asd撒旦为基地",
        image: "photo.jpg",
        praise: 112
      }, {
        id: 2,
        date: "2108/3/13",
        title: "我是开发者",
        name: "贾越",
        details: "奥萨蒂哦我的阿斯觉得我啊为基地",
        image: "photo1.jpg",
        praise: 112
      }],
    });
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
