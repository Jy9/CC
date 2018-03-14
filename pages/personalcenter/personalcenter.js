//personalcenter.js
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    navclass:{
      nav1class:"active",
      nav2class:"none",
      nav3class:"none"
    }
  },
  onLoad: function () {
    var thisData = this;
    
  },
  header_back:function(){
    wx.navigateBack({})
  },
  nav1:function(){
    this.setData({
      navclass: {
        nav1class: "active",
        nav2class: "none",
        nav3class: "none"
      }
    })
  },
  nav2: function () {
    this.setData({
      navclass: {
        nav1class: "none",
        nav2class: "active",
        nav3class: "none"
      }
    })
  },
  nav3: function () {
    this.setData({
      navclass: {
        nav1class: "none",
        nav2class: "none",
        nav3class: "active"
      }
    })
  },
})