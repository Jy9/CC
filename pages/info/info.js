//info.js
var app = getApp();
const $ = require('../../utils/util.js');
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    textareafocus: false,
    istextarea: false,
    discussval: "",
    article: {},
    discuss: [],
    articletype: "wshuse"
  },
  onLoad: function (options) {
    var thisData = this;
    console.log();
    wx.showLoading({
      title: '加载中...',
    })
    if (options.type == 'wsh') {
      thisData.setData({
        articletype: 'wsh'
      })
    } else if (options.type == 'ok') {
      thisData.setData({
        articletype: 'ok'
      })
    }
    $.query({
      url: "articleinfo",
      data: {
        id: options.id,
        uid: app.globalData.userInfo.uid
      },
      success: function (data) {
        wx.hideLoading();
        thisData.setData({
          article: data.data
        });
        if (data.data.isshow) {
          $.query({
            url: "getarticlecomment",
            data: {
              uid: app.globalData.userInfo.uid,
              articleid: options.id
            },
            success: function (data) {
              thisData.setData({
                discuss: data.data
              })
            }
          })
        }
      }
    });
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
      if (that.data.articletype=="ok") {
        $.query({
          url: "commentarticle",
          data: {
            date: date,
            uid: app.globalData.userInfo.uid,
            articleid: that.data.article.articleid,
            str: that.data.discussval
          },
          success: function (data) {
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
      } else if (that.data.articletype=="wsh"){
        $.query({
          url: "nopassarticle",
          data: {
            articleid: that.data.article.articleid,
            text: that.data.discussval
          },
          success: function (data) {
            wx: wx.showToast({
              title: '已拒绝通过'
            })
          }
        })
      }
      that.setData({
        istextarea: false,
        discussval: ""
      })
    }
  },
  pass: function () {
    wx.showLoading({
      title: '加载中...'
    })
    var that = this;
    if (that.data.articletype=="ok") {
      $.query({
        url: "heartarticle",
        data: {
          uid: app.globalData.userInfo.uid,
          articleid: that.data.article.articleid,
          love: !that.data.article.love
        },
        success: function (data) {
          var article = that.data.article;
          if (that.data.article.love) {
            wx.showToast({
              title: '已取消赞赏'
            })
            article.love = false;
            article.heart -= 1;
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
          wx.hideLoading()
        }
      })
    } else if (that.data.articletype == "wsh") {
      $.query({
        url: "passarticle",
        data: { id: that.data.article.articleid },
        success: function (data) {
          wx.showToast({
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
  good: function (e) {
    wx.showLoading({
      title: '加载中...'
    })
    var that = this;
    var idis = e.currentTarget.id.split("/");
    if (idis[1] == "true") {
      var isgood = false
    } else {
      var isgood = true
    }
    $.query({
      url: "discussgood",
      data: {
        id: idis[0],
        uid: app.globalData.userInfo.uid,
        isgood: isgood
      },
      success: function (data) {
        wx.hideLoading()
        console.log(data)
        var discuss = that.data.discuss;
        for (let i = 0; i < discuss.length; i++) {
          if (discuss[i].discussid == idis[0]) {
            discuss[i].isgood = isgood
            if (isgood) {
              discuss[i].good += 1
            } else {
              discuss[i].good -= 1
            }
          }
        }
        that.setData({
          discuss: discuss
        })
      }
    })
  },
  rubbish: function (e) {
    wx.showLoading({
      title: '加载中...'
    })
    var that = this;
    var idis = e.currentTarget.id.split("/");
    if (idis[1] == "true") {
      var isrubbish = false
    } else {
      var isrubbish = true
    }
    $.query({
      url: "discussrubbish",
      data: {
        id: idis[0],
        uid: app.globalData.userInfo.uid,
        isrubbish: isrubbish
      },
      success: function (data) {
        wx.hideLoading()
        console.log(data)
        var discuss = that.data.discuss;
        for (let i = 0; i < discuss.length; i++) {
          if (discuss[i].discussid == idis[0]) {
            discuss[i].isrubbish = isrubbish
            if (isrubbish) {
              discuss[i].rubbish += 1
            } else {
              discuss[i].rubbish -= 1
            }
          }
        }
        that.setData({
          discuss: discuss
        })
      }
    })
  },
  useInfo: function (e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../personalcenter/personalcenter?id=' + e.currentTarget.id,
    })
  }
})