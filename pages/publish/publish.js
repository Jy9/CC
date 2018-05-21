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
    isreport:false,
    reportid:0,
    reporttext:"",
    title: "",
    label: "选择标签",
    article: [],
    articleid:0
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      iconUrl: app.globalData.iconUrl,
      labels: app.globalData.labels,
      userInfo: app.globalData.userInfo
    })

    if (options.id){
      wx.showLoading({
        title: '加载中...',
      })
      $.query({
        url:"articleinfo",
        data: { id: options.id},
        success:function(data){
          wx.hideLoading();
          that.setData({
            articleid: data.data.articleid,
            article: data.data.article,
            title:data.data.title,
            label: data.data.label,
            preview: true,
            isText: false
          })
        }
      })
    }
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
  selectImg:function(fn){
    wx.chooseImage({
      count: 1,
      sizeType: 'original',
      success: function (res) {
        console.log(res)
        wx.showLoading({
          title: '正在上传...',
        });
        $.uploadImg({
          path: res.tempFilePaths[0],
          success: function (data) {
            fn(data);
            wx.hideLoading()
          }
        })
      }
    })
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
    thisObj.selectImg(function(data){
      console.log(data);
      article.push({
        type: "image",
        src: data.data
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
  ok:function(e){
      var that = this;
      wx.showLoading({
          title: '发表中...'
      })
      var title = '已保存至草稿箱';
      if (e.currentTarget.dataset['istrue']){
        title = '发表成功';
      }
      var article = {
          user: {
              name: that.data.userInfo.name,
              uid: that.data.userInfo.uid
          },
          articleid: that.data.articleid,
          title: that.data.title,
          article: that.data.article,
          date: new Date(),
          label: that.data.label,
          isshow: 0,
          istrue: e.currentTarget.dataset['istrue']
      }
      console.log(article)
      $.query({
          url:"postarticle",
          data:article,
          success:function(data){
            wx.showToast({
                title: title
            });
            setTimeout(function(){
                wx.navigateBack();
            },600)
          }
      })
  },
  articleset:function(e){
    var that = this;
    var article = that.data.article;
    if (article[e.currentTarget.id].type=="image"){
      that.selectImg(function (data) {
        article[e.currentTarget.id].src = data.data;
        that.setData({
          article: article
        })
      })
    }else{
      that.setData({
        reporttext: article[e.currentTarget.id].text,
        reportid: e.currentTarget.id,
        isreport:true
      })
    }
  },
  reportuser:function(){
    var that = this;
    var article = that.data.article;
    article[that.data.reportid].text = that.data.reporttext;
    that.setData({
      article: article,
      isreport: false
    })
  },
  reporttextchange:function(e){
    var that = this;
    that.setData({
      reporttext: e.detail.value
    })
  },
  articledel:function(e){
    var that = this;
    var article = that.data.article;
    article.splice(e.currentTarget.id,1);
    that.setData({
      article: article
    })
  }
})
