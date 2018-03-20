//publish.js
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    thistextarea:"",
    isText:true,
    istextarea:false,
    textfocus:false,
    preview:false,
    isselect:false,
    labels:[
        "拼车",
        "游玩",
        "回家", 
        "拼车",
        "游玩",
        "回家",
        "拼车",
        "游玩",
        "回家",
        "拼车",
        "游玩",
        "回家",
        "拼车",
        "游玩",
        "回家",
        "拼车",
        "游玩",
        "回家"

    ],
    title: "",
    label:"选择标签",
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
      if(thisObj.data.title != ""){
          if(thisObj.data.label != "选择标签"){
              thisObj.setData({
                  isText: false,
                  istextarea: true
              })
              setTimeout(function () {
                  thisObj.setData({
                      textfocus: true
                  })
              }, 400)
          }else{
              wx.showToast({
                  title: '您还没有选择标签',
                  icon: "none"
              })
          }
      }else{
          wx.showToast({
              title: '您输入的标题为空 请重新输入',
              icon:"none"
          })
      }
  },
  select:function(){
    var thisObj = this;
    thisObj.setData({
        isselect:true
    })
  },
  selectlabel:function(e){
      var thisObj = this;
      if (e.target.id){
          thisObj.setData({
              label: e.target.id,
              isselect: false
          })
      }
  },
  addText:function(e){
    var thisObj = this;
    var article = thisObj.data.article;
    var thistextarea = thisObj.data.thistextarea;
    if (thistextarea != ""){
        article.push({
            type:"text",
            text:thistextarea
        })
        thisObj.setData({
            article: article
        })
        setTimeout(function(){
            thisObj.setData({
                thistextarea: "",
                textfocus: true
            })
        },400)
    }else{
        wx.showToast({
            title: '您没有输入内容',
            icon:"none"
        })
    }
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
    setTimeout(function () {
        thisObj.setData({
            textfocus: true
        })
    }, 400)
  }
})
