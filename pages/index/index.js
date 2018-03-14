//index.js
Page({
  data: {
      peoplenum:12,
    iconUrl:"https://raw.githubusercontent.com/Jy9/icon/master/",
    sexs: ["woman.png","man.png"]
  },
  onLoad: function () {
    var thisData = this;
    thisData.setData({
        content:[{
          date:"2108/3/13",
          title:"我是开发者",
          name:"贾越",
          details:"奥萨蒂哦我的阿斯觉得我啊asd阿d阿三大王的啊是的哇打算的阿三大王的asd撒旦为基地",
          image:"photo.jpg",
          praise:112
        }, {
            date: "2108/3/13",
            title: "我是开发者",
            name: "贾越",
            details: "奥萨蒂哦我的阿斯觉得我啊为基地",
            image: "photo1.jpg",
            praise: 112
        }]
      })
      /*wx.login({
          success: function (res) {
              wx.request({
                  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx433c5da9f8727025&secret=4211f63d81b12392b929e94cc65fd6d7&js_code='+res.code+'&grant_type=authorization_code',
                  success: function(data){
                    console.log(data.data.openid);
                    //用openId 获取个人信息
                  }
              })
          }
      });*/
   },
  peoplelist:function(){
    wx.navigateTo({
      url: '../peoplelist/peoplelist'
    })
  },
  about: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  personalcenter:function(){
    wx.navigateTo({
      url: '../personalcenter/personalcenter'
    })
  }
})
