//app.js
App({
  onLaunch: function () {
    var that = this;
    /*wx.login({
      success: function (res) {
        that.query({
          url: "user",
          data: {
            code: res.code,
            userInfo:{}
          },
          success: function (data) {
            that.globalData.userInfo = data.user;
          }
        })
      }
    })*/
    that.Query({
      url:"user",
      data:{
        name:"asd",
        sex:12
      },
      success:function(data){
        console.log(data)
      }
    })
    wx.getUserInfo({
      lang:"zh_CN",
      success: function (user) {
        that.globalData.userInfo = {
          name: user.userInfo.nickName,
          sex: user.userInfo.gender,
          image: user.userInfo.avatarUrl,
          city: user.userInfo.province + "_" + user.userInfo.city,
          introduce: "这个人很懒，什么也没留下。",
          hreat:0
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    labels: ["旅游","写作","程序员","连载","游戏","购物","故事会"]
  },
  Query: function (obj) {
    console.log("asd")
    wx.request({
      url: "http://192.168.1.102:3000/" + obj.url,
      method: "POST",
      data: obj.data,
      success: obj.success
    })
  }
})