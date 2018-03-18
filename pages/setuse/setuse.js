//setuse.js
//peoplelist.js
Page({
    data: {
        iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
        name:"",
        sex:null,
        date:"",
        city:"",
        introduce:"",
        bgimg:"https://raw.githubusercontent.com/Jy9/icon/master/add.png",
        titleimg:"https://raw.githubusercontent.com/Jy9/icon/master/add.png"
    },
    onLoad: function () {
        var thisobj = this;
        
    },
    bindDateChange:function(e){
        var thisObj = this;
        thisObj.setData({
            date: e.detail.value
        })
    },
    bindRegionChange:function(e){
        var thisObj = this;
        thisObj.setData({
            city: e.detail.value
        })
    },
    inputchange:function(e){
        var thisObj = this;
        thisObj.setData({
            name: e.detail.value
        })
    },
    radioChange:function(e){
        var thisObj = this;
        thisObj.setData({
            sex: e.detail.value
        })
    },
    textareachange:function(e){
        var thisObj = this;
        console.log(e.detail.value)
        thisObj.setData({
            introduce: e.detail.value
        })
    },
    setbgimg:function(){
        var thisData = this;
        wx.chooseImage({
            count:1,
            sizeType:'original',
            success:function(res){
                thisData.setData({
                    bgimg: res.tempFilePaths[0]
                })
            }
        })
    },
    settitleimg:function(){
        var thisData = this;
        wx.chooseImage({
            count: 1,
            sizeType: 'original',
            success: function (res) {
                thisData.setData({
                    titleimg: res.tempFilePaths[0]
                })
            }
        })
    },
    back:function(){
        wx.navigateBack()
    },
    ok:function(){
        var thisObj = this;
        var thisData = thisObj.data;
        if(thisData.sex == null){
            wx.showToast({
                title: '请设置您的性别',
                icon: "none"
            })
        } else if (thisData.date == ""){
            wx.showToast({
                title: '请设置您的生日',
                icon: "none"
            })
        }else if(thisData.city == ""){
            wx.showToast({
                title: '请设置您所在的城市',
                icon: "none"
            })
        } else if (thisData.introduce == ""){
            wx.showToast({
                title: '请输入您的简介',
                icon: "none"
            })
        }else{
            wx.showToast({
                title: '设置成功'
            })
            setTimeout(function () {
                wx.navigateBack()
            }, 400)
        }
    }
})
