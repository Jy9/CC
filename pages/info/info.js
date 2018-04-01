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
        article: {}
    },
    onLoad: function (options) {
        var thisData = this;
        console.log();

        $.query({
            url: "articleinfo",
            data: { id: options.id },
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
            if (this.data.ispass) {
                wx: wx.showToast({
                    title: '评价成功'
                })
            } else {
                wx: wx.showToast({
                    title: '已拒绝通过'
                })
            }
        }
    },
    pass: function () {
        var that = this;
        if (that.data.ispass) {
            wx: wx.showToast({
                title: '点赞成功'
            })
        } else {
            console.log(that.data.article.articleid)
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
    }
})