//index.js
Page({
  data: {
    isCard:"none",
    cardOP:0,
    cardBottom:"none",
    compile: "none",//inling-block
    compileicon:"../icon/compile.png",
    user:{//后台请求
      "name":"贾越",
      "birthday":"1994/12/17",
      "zoology":"狗",
      "zoologyimg":"../icon/animals_dog.png",
      "constellation":"魔蝎座",
      "residue":500,
      "signature":"生活不只眼前的苟且，还有明天的枸杞"
    }
  },
  onLoad: function () {
    
  },
  footertap:function(){
    var obj = this;
    obj.setData({
      cardOP:1,
      compileicon: "../icon/compile.png",
      compile: "none"
    });
    setTimeout(function(){
      obj.setData({
        isCard: "block",
        cardBottom: "mycardshow 0.4s"
      });
    },400)
  },
  cardBtn:function(){
    var obj = this;
    obj.setData({
      cardOP: 0
    });
    setTimeout(function () {
      obj.setData({
        isCard: "none"
      });
    },400)
  },
  compile:function(){
    var obj = this;
    console.log(obj)
    if (obj.data.compile == "none"){
      obj.setData({
        compileicon: "../icon/ok.png",
        compile:"inling-block"
      });
    }else{
      obj.setData({
        compileicon: "../icon/compile.png",
        compile: "none"
      });
    }
  }
})
