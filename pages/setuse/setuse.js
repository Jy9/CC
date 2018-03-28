//setuse.js
var app = getApp();
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    introduce: ""
  },
  onLoad: function () {
    var thisobj = this;

  },
  textareachange: function (e) {
    var thisObj = this;
    thisObj.setData({
      introduce: e.detail.value
    })
  },
  back: function () {
    wx.navigateBack()
  },
  ok: function () {
    var thisObj = this;
    var introduce = thisObj.data.introduce
    if (introduce == "") {
      wx.showToast({
        title: '请输入您的简介',
        icon: "none"
      })
    } else {
      wx.showLoading({
        title: '正在设置...'
      })
      var app = getApp();
      app.query({
        url:"setintroduce",
        data:{
          introduce: introduce,
          uid: app.globalData.userInfo.uid
        },
        success:function(data){
          app.globalData.userInfo.introduce = introduce;
          wx.showToast({
            title: '设置成功'
          })
          setTimeout(function () {
            wx.navigateBack()
          }, 600)
        }
      })
    }
  }
})
