//info.js
Page({
  ifpass: true,
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    textareafocus: false,
    istextarea: false,
    discussval: "",
    article: {
      title: "我是标题 标题 标标题",
      date: "2018-3-20",
      label: "拼车",
      name: "贾越",
      like: 12,
      articles: [
        {
          type: "image",
          src: "https://raw.githubusercontent.com/Jy9/icon/master/photo1.jpg"
        },
        {
          type: "text",
          text: "啊飒飒大苏打阿斯顿大时代阿萨大大啊实打实的阿斯顿阿斯顿阿斯顿"
        }
      ]
    }
  },
  onLoad: function (options) {
    var thisData = this;
    console.log(options.id);

    thisData.setData({
      ifpass: false
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
    if (this.data.discussval == "") {
      wx.showToast({
        title: "您还没有输入您的看法",
        icon: "none"
      })
    } else {
      this.setData({
        istextarea: false,
        discussval: ""
      })
      if (this.data.ifpass) {
        wx: wx.showToast({
          title: '评价成功'
        })
      } else {
        wx: wx.showToast({
          title: '审核成功'
        })
      }
    }
  },
  pass: function () {
    if (this.data.ifpass) {
      wx: wx.showToast({
        title: '点赞成功'
      })
    } else {
      wx: wx.showToast({
        title: '审核成功'
      })
    }
  },
  bindinput: function (e) {
    this.setData({
      discussval: e.detail.value
    })
  }
})