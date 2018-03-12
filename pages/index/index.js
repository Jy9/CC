//index.js
Page({
  data: {
    isCard:"none",
    cardOP:0,
    cardBottom:"none",
    footerOP:"0.3",
    compile: "none",//inling-block
    sexs: [
        "https://raw.githubusercontent.com/Jy9/icon/master/woman.png",
        "https://raw.githubusercontent.com/Jy9/icon/master/man.png"
    ],
    user:null
  },
  onLoad: function () {
      this.setData({
          user:{
              "name": "贾越",
              "sex": 0,
              "image":"../icon/dog.png",
              "birthday": "1994/12/17",
              "address": "海淀区 朱芳后坟地",
              "signature": "生活不只眼前的苟且，还有明天的枸杞"
          }
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
  footertap:function(){
    var obj = this;
    obj.setData({
      cardOP:1,
      compileicon: "../icon/compile.png",
      compile: "none",
      footerOP:"0"
    });
    setTimeout(function(){
      obj.setData({
        isCard: "block",
        cardBottom: "mycardshow 1s"
      });
    },400)
  },
  cardBtn:function(){
    var obj = this;
    obj.setData({
      cardOP: 0
    });
    setTimeout(function () {
      obj.setData({
        isCard: "none",
        footerOP:"0.3"
      });
    },400)
  },
  compile:function(){
    //跳转编辑个人信息页面
  }
})
