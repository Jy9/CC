//app.js
App({
  onLaunch: function () {
    var that = this;
    wx.getUserInfo({
      lang:"zh_CN",
      success: function (user) {
        that.globalData.userInfo = {
          name: user.userInfo.nickName,
          sex: user.userInfo.gender,
          image: user.userInfo.avatarUrl,
          city: user.userInfo.province + "_" + user.userInfo.city,
          introduce: "这个人很懒，什么也没留下。",
          hreat: 0
        }
        wx.login({
          success: function (res) {
            that.query({
              url: "user",
              data: {
                code: res.code,
                userInfo: that.globalData.userInfo
              },
              success: function (data) {
                console.log(data)
                if (data.statusCode == 200){
                  that.globalData.userInfo = data.user;
                }
              }
            })
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    labels: ["旅游","写作","程序员","连载","游戏","购物","故事会"]
  },
  query: function (obj) {
    console.log(obj.data)
    wx.request({
      url: "http://192.168.1.102/" + obj.url,
      method: "POST",
      data: obj.data,
      success: obj.success
    })
  }
})