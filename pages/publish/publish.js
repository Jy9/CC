//publish.js
var app = getApp();
const $ = require('../../utils/util.js');
Page({
  data: {
    userInfo:{},
    iconUrl: "",
    labels: [],
    thistextarea: "",
    isText: true,
    istextarea: false,
    textfocus: false,
    preview: false,
    isselect: false,
    title: "",
    label: "选择标签",
    article: []
  },
  onLoad: function () {
    var that = this;
    that.setData({
      iconUrl: app.globalData.iconUrl,
      labels: app.globalData.labels,
      userInfo: app.globalData.userInfo
    })
  },
  back: function () {
    wx.navigateBack()
  },
  titleset: function (e) {
    var thisObj = this;
    thisObj.setData({
      title: e.detail.value
    })
  },
  titleok: function () {
    var thisObj = this;
    if (thisObj.data.title != "") {
      if (thisObj.data.label != "选择标签") {
        thisObj.setData({
          isText: false,
          istextarea: true
        })
        setTimeout(function () {
          thisObj.setData({
            textfocus: true
          })
        }, 400)
      } else {
        wx.showToast({
          title: '您还没有选择标签',
          icon: "none"
        })
      }
    } else {
      wx.showToast({
        title: '您输入的标题为空 请重新输入',
        icon: "none"
      })
    }
  },
  select: function () {
    var thisObj = this;
    thisObj.setData({
      isselect: true
    })
  },
  selectlabel: function (e) {
    var thisObj = this;
    console.log(e.target)
    if (e.target.id) {
      thisObj.setData({
        label: e.target.id,
        isselect: false
      })
    }
  },
  addText: function (e) {
    var thisObj = this;
    var article = thisObj.data.article;
    var thistextarea = thisObj.data.thistextarea;
    if (thistextarea != "") {
      article.push({
        type: "text",
        text: thistextarea
      })
      thisObj.setData({
        article: article
      })
      setTimeout(function () {
        thisObj.setData({
          thistextarea: "",
          textfocus: true
        })
      }, 400)
    } else {
      wx.showToast({
        title: '您没有输入内容',
        icon: "none"
      })
    }
  },
  addImg: function (e) {
    var thisObj = this;
    var article = thisObj.data.article;
    var thistextarea = thisObj.data.thistextarea;
    if (thistextarea != "") {
      article.push({
        type: "text",
        text: thistextarea
      })
    }
    wx.chooseImage({
      count: 1,
      sizeType: 'original',
      success: function (res) {
        console.log(res)
        $.uploadImg({
            path: res.tempFilePaths[0],
            success:function(data){
                console.log(data);
            }
        })
        article.push({
          type: "image",
          src: res.tempFilePaths[0]
        })
        thisObj.setData({
          article: article
        })
        setTimeout(function () {
          thisObj.setData({
            thistextarea: "",
            textfocus: true
          })
        }, 400)
      }
    })
  },
  textareainput: function (e) {
    var thisObj = this;
    thisObj.setData({
      thistextarea: e.detail.value
    })
  },
  previewtap: function () {
    var thisObj = this;
    thisObj.setData({
      preview: true,
      istextarea: false
    })
  },
  previewback: function () {
    var thisObj = this;
    thisObj.setData({
      preview: false,
      textfocus: true,
      istextarea: true
    })
    setTimeout(function () {
      thisObj.setData({
        textfocus: true
      })
    }, 400)
  },
  ok:function(){
      var that = this;
      wx.showLoading({
          title: '发表中...'
      })
      var article = {
          user: {
              name: that.data.userInfo.name,
              uid: that.data.userInfo.uid
          },
          title: that.data.title,
          article: that.data.article,
          date: new Date(),
          label: that.data.label,
          heart: 0,
          isshow: 0
      }
      console.log(article)
      $.query({
          url:"postarticle",
          data:article,
          success:function(data){
            wx.showToast({
                title: '发表成功'
            });
            setTimeout(function(){
                wx.navigateBack();
            },600)
          }
      })
  }
})
