//personalcenter.js
Page({
    data: {
        iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
        headerOP: 0,
        unfold: {
            height: "220rpx",
            cont: "(っ´Ι`)っ"
        },
        navclass: {
            nav1class: "active",
            nav2class: "none",
            content1class: "active",
            content2class: "none"
        },
        content1: [],
        content2: []
    },
    onLoad: function () {
        var thisData = this;
        thisData.setData({
            content1: [{
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
            }],
            content2: [{
                date: "2108/3/13",
                title: "我是开发者",
                name: "贾越",
                details: "奥萨蒂哦我的阿斯觉得我啊asd阿d阿三大王的啊是的哇打算的阿三大王的asd撒旦为基地",
                image: "photo.jpg",
                praise: 112
            }]
        })
    },
    header_back: function () {
        wx.navigateBack({})
    },
    openheader: function () {
        var thisObj = this;
        if (thisObj.data.unfold.height == "220rpx") {
            thisObj.setData({
                headerOP: 1,
                unfold: {
                    height: "580rpx",
                    cont: "(ಥ _ ಥ)"
                }
            })
        } else {
            thisObj.setData({
                headerOP: 0,
                unfold: {
                    height: "220rpx",
                    cont: "(っ´Ι`)っ"
                }
            })
        }
    },
    nav1: function () {
        var thisObj = this;
        thisObj.setData({
            navclass: {
                nav1class: "active",
                nav2class: "none",
                content1class: "active",
                content2class: "none"
            }
        });
    },
    nav2: function () {
        var thisObj = this;
        thisObj.setData({
            navclass: {
                nav1class: "none",
                nav2class: "active",
                content1class: "none",
                content2class: "active"
            }
        });
    }
})