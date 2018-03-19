//publish.js
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    title:"",
    label:"",
    thistextarea:"",
    isText:true,
    textfocus:false
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
          isText: false
      })
      setTimeout(function(){
          thisObj.setData({
              textfocus: true
          })
      },400)
  },
  inputchange:function(e){
    var thisObj = this;
    thisObj.setData({
      title:e.detail.value
    })
  },
  addText:function(e){
    var thisObj = this;
    thisObj.setData({
      label:""
    })
  },
  addImg:function(e){
    var thisObj = this;
    thisObj.setData({
      label: ""
    })
  },
  textareainput:function(e){
    console.log(e);
    var thisObj = this;
    thisObj.setData({
      thistextarea: e.detail.value
    })
  },
  overstriking:function(e){
    var thisObj = this;
    thisObj.setData({
      thistextarea: thisObj.data.thistextarea+"<>"
    })
  }
})
