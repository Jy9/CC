//index.js
Page({
  data: {
    isCard:"none",
    cardOP:0,
    cardBottom:"none",
    footerBd:0.3,
    footer:{
    	footerOpacity:0,
    	footerWidth:"0rpx",
    	footerHeight:"0rpx",
    	footerShow:"none"
    },
    compile: "none",//inling-block
    iconUrl:"https://raw.githubusercontent.com/Jy9/icon/master/",
    sexs: ["woman.png","man.png"],
    user:null
  },
  onLoad: function () {
    var thisData = this;
    thisData.setData({
          user:{
              "name": "贾越",
              "sex": 0,
              "image":"https://raw.githubusercontent.com/Jy9/icon/master/portrait.png",
              "birthday": "1994/12/17",
              "address": "海淀区 朱芳后坟地",
              "register":"榆林市 吴堡县",
              "signature": "生活不只眼前的苟且，还有明天的枸杞"
          }
      })
    thisData.setData({
        content:[{
          date:"2108/3/13",
          title:"我是开发者",
          name:"贾越",
          details:"奥萨蒂哦我的阿斯觉得我啊为基地",
          image:"portrait.png",
          praise:112
        }, {
          date: "2108/3/13",
          title: "我是开发者",
          name: "贾越",
          details: "奥萨蒂哦我的阿斯觉得我啊为基地",
          image: "portrait.png",
          praise: 112
          }, {
            date: "2108/3/13",
            title: "我是开发者",
            name: "贾越",
            details: "奥萨蒂哦我的阿斯觉得我啊为基地",
            image: "portrait.png",
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
  footertap:function(){
    var obj = this;
    obj.setData({
      cardOP:1,
      compile: "none",
      footerBd:0
    });
    setTimeout(function(){
      obj.setData({
        isCard: "block",
        cardBottom: "mycardshow 1s"
      });
    },400)
  },
  footertouchmove:function(){
    console.log("o")
  	this.setData({
      footerBd:0,
      footer:{
	   		footerOpacity:1,
	    	footerWidth:"360rpx",
	    	footerHeight:"270rpx",
	    	footerShow:"myfootershow 0.6s"
	   	}
   });
  },
  footertouchend:function(){
    console.log("p")
    var thisData = this;
    thisData.setData({
      footerBd: 0.3,
      footer:{
	   		footerOpacity:0,
	    	footerWidth:"0rpx",
	    	footerHeight:"0rpx",
	    	footerShow:"myfooterhide 1s"
	   	}
   });
    
  },
  cardBtn:function(){
    var obj = this;
    obj.setData({
      cardOP: 0
    });
    setTimeout(function () {
      obj.setData({
        isCard: "none",
        footerBd:0.3
      });
    },400)
  },
  compile:function(){
    //跳转编辑个人信息页面
  }
})
