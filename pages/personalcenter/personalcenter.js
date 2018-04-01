//personalcenter.js
var app = getApp();
const $ = require('../../utils/util.js');
Page({
  data: {
    iconUrl: "",
    utype: "member",
    isUse:true,
    headerOP: 0,
    userInfo:{},
    unfold: {
      height: "-140rpx",
      cont: "展开(っ´Ι`)っ"
    },
    navclass: {
      nav1class: "active",
      nav2class: "none",
      nav3class: "none",
      nav4class: "none",
      content1class: "active",
      content2class: "none",
      content3class: "none",
      content4class: "none"
    },
    contH: "0px",
    cont1H: "0px",
    cont3H: "0px",
    cont4H: "0px",
    articledate: [],
    articleheart: [],
    users: [],
    articlenoshow: []
  },
  onLoad: function (options) {
    var thisData = this;

    thisData.setData({
      userInfo: app.globalData.userInfo,
      iconUrl: app.globalData.iconUrl
    });

    //获取user信息
    wx.showLoading({
        title: '正在加载...',
    })
    if (!options.id){
      options.id = app.globalData.userInfo.uid;
    }
    $.query({
      url:"getuser",
      data:{
        uid: app.globalData.userInfo.uid,
        useid: options.id
      },
      success: function (data) {
        console.log(data)
        var setObj = {
            userInfo: data.data.userinfo,
            articledate: data.data.articledate,
            articleheart: data.data.articleheart,
            users: data.data.userattent,
            articlenoshow: data.data.articlenoshow
        }
        if (options.id != app.globalData.userInfo.uid ){
            setObj.isUse = false;
            setObj.utype = "use";
        }else{
            if (data.data.userinfo.utype == 1) {
                setObj.utype = "manage";
            }
        }
        thisData.setData(setObj);
        wx.hideLoading();
        setTimeout(function () {
            var query1 = wx.createSelectorQuery();
            query1.select("#content1").boundingClientRect();
            query1.exec(function (res) {
                thisData.setData({
                    cont1H: res[0].height + "px",
                    contH: res[0].height + "px"
                })
            })
            var query3 = wx.createSelectorQuery();
            query3.select("#content3").boundingClientRect();
            query3.exec(function (res) {
                thisData.setData({
                    cont3H: res[0].height + "px"
                })
            })
            if (thisData.data.utype == "manage") {
                var query4 = wx.createSelectorQuery();
                query4.select("#content4").boundingClientRect();
                query4.exec(function (res) {
                    thisData.setData({
                        cont4H: res[0].height + "px"
                    })
                })
            }
        }, 400)
      }
    })
  },
  header_back: function () {
      wx.navigateBack({})
  },
  openheader: function () {
    var thisObj = this;
    if (thisObj.data.unfold.height == "-140rpx") {
      thisObj.setData({
        headerOP: 1,
        unfold: {
          height: "80rpx",
          cont: "收起(ಥ _ ಥ)"
        }
      })
    } else {
      thisObj.setData({
        headerOP: 0,
        unfold: {
          height: "-140rpx",
          cont: "展开(っ´Ι`)っ"
        }
      })
    }
  },
  publish: function () {
    wx.navigateTo({
      url: '../publish/publish',
    })
  },
  set: function () {
    wx.navigateTo({
      url: '../setuse/setuse'
    })
  },
  heart:function(){
      var that = this;
      if (app.globalData.userInfo.uid != that.data.userInfo.uid){
        var title = "关注成功";
        if (that.data.userInfo.isattent){
            title = "已取消关注"
        }
        $.query({
            url:'loveuser',
            data:{
                uid: app.globalData.userInfo.uid,
                useid:that.data.userInfo.uid,
                love: !that.data.userInfo.isattent
            },
            success:function(data){
                var userInfo = that.data.userInfo;
                if (that.data.userInfo.isattent){
                    userInfo.isattent = false
                }else{
                    userInfo.isattent = true
                }
                that.setData({
                    userInfo:userInfo
                })
                wx.showToast({
                    title: title,
                    icon: "none"
                })
            }
        })
      }else{
          wx.showToast({
              title: '您当前的关注人数为'+that.data.userInfo.heart,
              icon:"none"
          })
      }
  },
  userinfo:function(e){
      console.log(e.currentTarget.id)
  },
  articleInfo:function(e){
      wx.navigateTo({
          url: '../info/info?id=' + e.currentTarget.id
      })
  },
  nav1: function () {
    var thisObj = this;
    thisObj.setData({
      contH: thisObj.data.cont1H,
      navclass: {
        nav1class: "active",
        nav2class: "none",
        nav3class: "none",
        nav4class: "none",
        content1class: "active",
        content2class: "none",
        content3class: "none",
        content4class: "none"
      }
    });
  },
  nav2: function () {
    var thisObj = this;
    thisObj.setData({
      contH: thisObj.data.cont1H,
      navclass: {
        nav1class: "none",
        nav2class: "active",
        nav3class: "none",
        nav4class: "none",
        content1class: "none",
        content2class: "active",
        content3class: "none",
        content4class: "none"
      }
    });
  },
  nav3: function () {
    var thisObj = this;
    thisObj.setData({
      contH: thisObj.data.cont3H,
      navclass: {
        nav1class: "none",
        nav2class: "none",
        nav3class: "active",
        nav4class: "none",
        content1class: "none",
        content2class: "none",
        content3class: "active",
        content4class: "none"
      }
    });
  },
  nav4: function () {
    var thisObj = this;
    thisObj.setData({
      contH: thisObj.data.cont4H,
      navclass: {
        nav1class: "none",
        nav2class: "none",
        nav3class: "none",
        nav4class: "active",
        content1class: "none",
        content2class: "none",
        content3class: "none",
        content4class: "active"
      }
    });
  }
})