//index.js
var app = getApp();
const $ = require('../../utils/util.js');
Page({
  data: {
    labels: [],
    iconUrl: "",
    content:[]
  },
  onLoad: function () {
    var thisData = this;
    var isLoading = 0;
    thisData.setData({
      iconUrl: app.globalData.iconUrl,
      labels: app.globalData.labels
    });
    wx.showLoading({
      title: '正在加载...',
    })

    wx.getUserInfo({
      lang: "zh_CN",
      success: function (user) {
        var userinfo = {
          name: user.userInfo.nickName,
          sex: user.userInfo.gender,
          image: user.userInfo.avatarUrl,
          city: user.userInfo.province + "_" + user.userInfo.city,
          introduce: "这个人很懒，什么也没留下。",
          hreat: 0
        }
        wx.login({
          success: function (res) {
            $.query({
              url: "user",
              data: {
                code: res.code,
                userInfo:userinfo
              },
              success: function (data) {
                app.globalData.userInfo = data.data;
                isLoading += 1;
              }
            })
          }
        })
      }
    })

    //读取文章列表
    $.query({
      url:"getarticlelist",
      success:function(data){
        console.log(data)
        thisData.setData({
          content: data.data
        });
        isLoading += 1;
      }
    })
    var t = setInterval(function(){
      if (isLoading == 2) {
        wx.hideLoading();
        clearInterval(t);
      }
    },100)
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
