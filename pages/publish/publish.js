//publish.js
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    thistextarea:"",
    isText:true,
    istextarea:false,
    textfocus:false,
    preview:false,
    title: "",
    label:"平车",
    name:"贾越",
    article:[]
  },
  onLoad: function () {
    var thisData = this;
  },
  back:function(){
    wx.navigateBack()
  },
  titleset:function(e){
    var thisObj = this;
    thisObj.setData({
        title: e.detail.value
    })
  },
  titleok:function(){
      var thisObj = this;
      thisObj.setData({
          isText: false,
          istextarea:true
      })
      setTimeout(function(){
          thisObj.setData({
              textfocus: true
          })
      },400)
  },
  addText:function(e){
    var thisObj = this;
    var article = thisObj.data.article;
    article.push({
      type:"text",
      text: thisObj.data.thistextarea
    })
    thisObj.setData({
      article: article,
      thistextarea: ""
    })
  },
  addImg:function(e){
    var thisObj = this;
    var article = thisObj.data.article;
    var thistextarea = thisObj.data.thistextarea;
    if (thistextarea!=""){
      article.push({
        type: "text",
        text: thistextarea
      })
    }
    wx.chooseImage({
      count: 1,
      sizeType: 'original',
      success: function (res) {
        article.push({
          type: "image",
          src: res.tempFilePaths[0]
        })
        thisObj.setData({
          article: article,
          thistextarea: ""
        })
      }
    })
  },
  textareainput:function(e){
    console.log(e);
    var thisObj = this;
    thisObj.setData({
      thistextarea: e.detail.value
    })
  },
  previewtap:function(){
    var thisObj = this;
    thisObj.setData({
      preview:true,
      istextarea:false
    })
  },
  previewback:function(){
    var thisObj = this;
    thisObj.setData({
      preview: false,
      textfocus: true,
      istextarea: true
    })
  }
})
