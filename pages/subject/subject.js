//subject.js
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    content:[]
  },
  onLoad: function (options) {
    var thisData = this;
    console.log(options.id);
    thisData.setData({
      content: [{
        date: "2108/3/13",
        title: "我是开发者",
        name: "贾越",
        details: "奥萨蒂哦我的阿斯觉得我啊asd阿d阿三大王的啊是的哇打算的阿三大王的asd撒旦为基地",
        image: "photo.jpg",
        praise: 112
      }, {
        date: "2108/3/13",
        title: "我是开发者",
        name: "贾越",
        details: "奥萨蒂哦我的阿斯觉得我啊为基地",
        image: "photo1.jpg",
        praise: 112
        }]
    })
  },
  headerback: function () {
    wx.navigateBack({})
  }
})
