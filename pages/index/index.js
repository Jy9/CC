//index.js
Page({
  data: {
      peoplenum:12,
    iconUrl:"https://raw.githubusercontent.com/Jy9/icon/master/",
    sexs: ["woman.png","man.png"],
    subs:[]
  },
  onLoad: function () {
    var thisData = this;
    thisData.setData({
        content:[{
          id:1,
          date:"2108/3/13",
          title:"我是开发者",
          name:"贾越",
          details:"奥萨蒂哦我的阿斯觉得我啊asd阿d阿三大王的啊是的哇打算的阿三大王的asd撒旦为基地",
          image:"photo.jpg",
          praise:112
        }, {
          id:2,
            date: "2108/3/13",
            title: "我是开发者",
            name: "贾越",
            details: "奥萨蒂哦我的阿斯觉得我啊为基地",
            image: "photo1.jpg",
            praise: 112
        }],
        subs:[
          {
            id:1,
            name: "聚会"
          },{
            id: 2,
            name: "拼车"
          },{
            id: 3,
            name: "老家好地方"
          },{
            id: 4,
            name: "北京游玩"
          }
        ]
      });
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
    wx.showToast({
        title: '暂不提供打赏功能',
        icon:"none"
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
  },
  subject:function(e){
    if(e.target.id != ""){
      wx.navigateTo({
        url: '../subject/subject?id=' + e.target.id
      })
    }
  },
  content:function(e){
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../info/info?id=' + e.currentTarget.id
    })
  }
})
