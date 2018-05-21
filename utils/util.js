//query
var app = getApp();
var URL = app.globalData.URL;
var query = function (obj) {
  wx.request({
      url: URL + obj.url,
    method: "POST",
    data: obj.data,
    success: obj.success
  })
}
var uploadImg = function (obj) {
  console.log(obj)
    wx.uploadFile({
        url: URL+'upload/image',
        filePath: obj.path,
        name: 'image',
        success: obj.success,
        fail:function(err){
          console.log(err)
        }
    })
}

module.exports = {
    uploadImg: uploadImg,
    query:query
};