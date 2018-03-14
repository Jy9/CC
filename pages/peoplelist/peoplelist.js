//peoplelist.js
Page({
  data: {
    iconUrl: "https://raw.githubusercontent.com/Jy9/icon/master/",
    users:null
  },
  onLoad: function () {
    var thisobj = this;
    thisobj.setData({
      users:[
        {
          uid:1,
          name: "贾越",
          birthday: "1994/12/17",
          image: "photo.jpg",
          address: "海淀区 朱芳路",
          register: "榆林市 吴堡县"
        },{
          uid: 2,
          name: "贾越",
          birthday: "1994/12/17",
          image: "photo1.jpg",
          address: "海淀区 朱芳路",
          register: "榆林市 吴堡县"
        }
      ]
    })
  },
  headerback: function () {
    wx.navigateBack({})
  },
  userinfo:function(){
    //进入用户个人中心
  }
})
