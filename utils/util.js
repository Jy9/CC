//query
var query = function (obj) {
  wx.request({
    url: "http://41092527.nat123.cc/" + obj.url,
    method: "POST",
    data: obj.data,
    success: obj.success
  })
}

module.exports = {
  query:query
};