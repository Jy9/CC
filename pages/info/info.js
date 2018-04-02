//info.js
var app = getApp();
const $ = require('../../utils/util.js');
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    textareafocus: false,
    istextarea: false,
    discussval: "",
    ispass: false,
    article: {},
    discuss:[]
  },
  onLoad: function (options) {
    var thisData = this;
    console.log();

    $.query({
      url: "articleinfo",
      data: {
        id: options.id, 
        uid: app.globalData.userInfo.uid
      },
      success: function (data) {
        thisData.setData({
          article: data.data,
          ispass: data.data.isshow
        })
      }
    })
  },
  headerback: function () {
    wx.navigateBack({})
  },
  footerview: function () {
    var thisObj = this;
    this.setData({
      istextarea: true
    })
    setTimeout(function () {
      thisObj.setData({
        textareafocus: true
      })
    }, 200)
  },
  discussblur: function (e) {
    var that = this;
    if (this.data.discussval == "") {
      wx.showToast({
        title: "您还没有输入您的看法",
        icon: "none"
      })
    } else {
      var date = new Date();
      if (this.data.ispass) {
        $.query({
          url:"commentarticle",
          data:{
            date: date,
            uid: app.globalData.userInfo.uid,
            articleid: that.data.article.articleid,
            str: that.data.discussval
          },
          success:function(data){
            wx: wx.showToast({
              title: '评价成功'
            })
            var discuss = that.data.discuss;
            discuss.push(data.data)
            that.setData({
              discuss: discuss
            })
          }
        })
      } else {
        wx: wx.showToast({
          title: '已拒绝通过'
        })
      }
      that.setData({
        istextarea: false,
        discussval: ""
      })
    }
  },
  pass: function () {
    var that = this;
    if (that.data.ispass) {
      $.query({
        url: "heartarticle",
        data: {
          uid: app.globalData.userInfo.uid,
          articleid: that.data.article.articleid,
          love: !that.data.article.love
        }
      })
      var article = that.data.article;
      if (that.data.article.love) {
        wx.showToast({
          title: '已取消赞赏'
        })
        article.love = false;
        article.heart -=1;
      } else {
        wx.showToast({
          title: '点赞成功'
        })
        article.love = true;
        article.heart += 1;
      }
      that.setData({
        article: article
      })
    } else {
      $.query({
        url: "passarticle",
        data: { id: that.data.article.articleid },
        success: function (data) {
          wx: wx.showToast({
            title: '审核通过'
          });
          setTimeout(function () {
            wx.navigateBack({})
          }, 600)
        }
      })
    }
  },
  bindinput: function (e) {
    this.setData({
      discussval: e.detail.value
    })
  },
  good:function(e){

  },
  rubbish:function(e){

  }
})