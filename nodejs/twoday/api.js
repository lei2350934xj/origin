var http = require("http");

var server = http.createServer();

// 监听事件 on(事件名,处理函数)
server.on("request",function(req,res){
    console.log("接收到请求!");
});

// 设置超时时间
server.setTimeout(3000,function(){
    console.log("时间超时");
})

server.listen(3000,function(err){
    if(err!=null){
        console.log("监听3000端口失败");
    }else{
        console.log("监听3000端口成功");
    }
});