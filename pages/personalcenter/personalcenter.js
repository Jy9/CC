//personalcenter.js
Page({
    data: {
        iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
        utype:"member",
        headerOP: 0,
        unfold: {
            height: "220rpx",
            cont: "展开(っ´Ι`)っ"
        },
        navclass: {
            nav1class: "active",
            nav2class: "none",
            nav3class: "none",
            content1class: "active",
            content2class: "none",
            content3class: "none"
        },
        contH:"0px",
        cont1H:"0px",
        cont3H:"0px",
        content1: [],
        content2: [],
        content3: []
    },
    onLoad: function () {
        var thisData = this;

        thisData.setData({
            utype:"manage"
        })

        thisData.setData({
            content1: [{
                date: "2108/3/13",
                title: "我是开发者1",
                name: "贾越",
                details: "奥萨蒂哦我的阿斯觉得我啊asd阿d阿三大王的啊是的哇打算的阿三大王的asd撒旦为基地",
                image: "photo.jpg",
                praise: 112
            }],
            content2: [{
                date: "2108/3/13",
                title: "我是开发者2",
                name: "贾越",
                details: "奥萨蒂哦我的阿斯觉得我啊为基地",
                image: "photo1.jpg",
                praise: 112
            }],
            content3: [{
                date: "2108/3/13",
                title: "我是开发者3",
                name: "贾越",
                details: "奥萨蒂哦我的阿斯觉得我啊为基地",
                image: "photo1.jpg",
                praise: 112
            }, {
                date: "2108/3/13",
                title: "我是开发者3",
                name: "贾越",
                details: "奥萨蒂哦我的阿斯觉得我啊为基地",
                image: "photo1.jpg",
                praise: 112
            }],
        });
        setTimeout(function(){
            var query1 = wx.createSelectorQuery();
            query1.select("#content1").boundingClientRect();
            query1.exec(function (res) {
                    thisData.setData({
                        cont1H: res[0].height + "px",
                        contH: res[0].height + "px"
                    })
            })
            if (thisData.data.utype == "manage") {
                var query3 = wx.createSelectorQuery();
                query3.select("#content3").boundingClientRect();
                query3.exec(function (res) {
                    thisData.setData({
                        cont3H: res[0].height + "px"
                    })
                })
            }
            
            
        },400)
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
                    cont: "收起(ಥ _ ಥ)"
                }
            })
        } else {
            thisObj.setData({
                headerOP: 0,
                unfold: {
                    height: "220rpx",
                    cont: "展开(っ´Ι`)っ"
                }
            })
        }
    },
    publish:function(){
      console.log("发表文章")
    },
    nav1: function () {
        var thisObj = this;
        thisObj.setData({
            contH: thisObj.data.cont1H,
            navclass: {
                nav1class: "active",
                nav2class: "none",
                nav3class: "none",
                content1class: "active",
                content2class: "none",
                content3class: "none"
            }
        });
    },
    nav2: function () {
        var thisObj = this;
        thisObj.setData({
            contH: thisObj.data.cont1H,
            navclass: {
                nav1class: "none",
                nav2class: "active",
                nav3class: "none",
                content1class: "none",
                content2class: "active",
                content3class: "none"
            }
        });
    },
    nav3: function () {
        var thisObj = this;
        thisObj.setData({
            contH: thisObj.data.cont3H,
            navclass: {
                nav1class: "none",
                nav2class: "none",
                nav3class: "active",
                content1class: "none",
                content2class: "none",
                content3class: "active"
            }
        });
    }
})