//personalcenter.js
var app = getApp();
const $ = require('../../utils/util.js');
Page({
  data: {
    useid:0,
    iconUrl: "",
    utype: "member",
    isUse:true,
    headerOP: 0,
    userInfo:{},
    reporttext:"",
    isreport:false,
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
    articlenoshow: [],
  },
  onPullDownRefresh: function () {
    this.getUse(function () {
      wx.stopPullDownRefresh();
    })
  },
  getUse: function (fn) {
    var useid = this.data.useid;
    var thisData = this;
    console.log(useid)
    $.query({
      url: "getuser",
      data: {
        uid: app.globalData.userInfo.uid,
        useid: useid
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
        if (useid != app.globalData.userInfo.uid) {
          setObj.isUse = false;
          setObj.utype = "use";
        }
        thisData.setData(setObj);
        fn();
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
          var query4 = wx.createSelectorQuery();
          query4.select("#content4").boundingClientRect();
          query4.exec(function (res) {
            thisData.setData({
              cont4H: res[0].height + "px"
            })
          })
        }, 200)
      }
    })
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
    thisData.setData({
      useid: Number(options.id)
    })
    thisData.getUse(function(){
      wx.hideLoading();
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
    var that = this;
    if (that.data.utype != "use"){
      wx.navigateTo({
        url: '../publish/publish',
      })
    }else{
      that.setData({
        isreport:true
      })
    }
  },
  reporttextchange:function(e){
    var that = this;
    that.setData({
      reporttext: e.detail.value
    })
  },
  reportuser:function(){
    var that = this;
    if (that.data.reporttext != "") {
      wx.showLoading({
        title: '举报中...',
      })
      $.query({
        url: "reportuser",
        data: {
          uid: app.globalData.userInfo.uid,
          useid: that.data.userInfo.uid,
          text: that.data.reporttext
        },
        success: function (data) {
          that.setData({
            isreport: false
          })
          setTimeout(function(){
            wx.showToast({
              title: '举报成功 CC感谢您的参与',
              icon: "none"
            })
          },600)
        }
      })
    } else {
      wx.showToast({
        title: '请输入举报理由',
        icon: "none"
      })
    }
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
              title: '当前的关注您的人数为'+that.data.userInfo.heart,
              icon:"none"
          })
      }
  },
  userinfo:function(e){
      wx.navigateTo({
        url: '../personalcenter/personalcenter?id=' + e.currentTarget.id
      })
  },
  articleInfo:function(e){
      wx.navigateTo({
          url: '../info/info?type=ok&id=' + e.currentTarget.id
      })
  },
  articleredact:function(e){
    if(e.currentTarget.dataset.istap){
      wx.navigateTo({
        url: '../info/info?type=wshuse&id=' + e.currentTarget.id,
      })
    }else{
      wx.navigateTo({
        url: '../publish/publish?id=' + e.currentTarget.id,
      })
    }
  },
  clear:function(e){
    var that = this;
    var articlenoshow = that.data.articlenoshow;
    wx.showLoading({
      title: '删除中...',
    })
    $.query({
      url:"cleararticle",
      data: { articleid: e.currentTarget.id},
      success:function(data){
        wx.showToast({
          title: '删除成功',
        })
        for (let i = 0; i <articlenoshow.length;i++){
          if (articlenoshow[i].id == e.currentTarget.id){
            articlenoshow.splice(i,1)
          }
        }
        that.setData({
          articlenoshow: articlenoshow
        })
      }
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