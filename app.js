//app.js
App({
  onLaunch: function () {
    var that = this;
    wx.getUserInfo({
      lang:"zh_CN",
      success: function (user) {
        let userInfo = {
          name: user.userInfo.nickName,
          sex: user.userInfo.gender,
          image: user.userInfo.avatarUrl,
          city: user.userInfo.province + "_" + user.userInfo.city,
        }
        wx.login({
          success: function (res) {
            that.query({
              url: "user",
              data: {
                code: res.code,
                userInfo: userInfo
              },
              success: function (data) {
                console.log(data)
                that.globalData.userInfo = data.user;
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
      url: "http://41092527.nat123.cc/" + obj.url,
      method: "POST",
      data: obj.data,
      success: obj.success
    })
  }
})