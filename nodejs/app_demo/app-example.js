var express = require("express");

var app = express();

/**
 * 简单的业务逻辑
 */
app.get("/",function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("hello express 启动");
});

/**
 * 要有错误处理！！！很重要
 */
app.listen(3000,(err,data)=>{
    if(err){
        console.log(error);
    }
    console.log("listen on 3000");
});