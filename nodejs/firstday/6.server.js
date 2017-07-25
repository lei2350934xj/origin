// 1.导入http模块
var http = require("http");

// 2.创建server实例
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello Node.js')
});

// 3.启动服务器并监听1337端口
server.listen(1337,function(err,data){
    if(!err){
        console.log("start success at 1337");
    }
});
