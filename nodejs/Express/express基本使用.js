const http = require("http");
/**
 * express搭建简易的web服务器
 */
const express = require("express");

// 导入express框架
let app = express();

http.createServer(app);

// 路由,这里接收get方式的请求
app.get("/test",(req,res)=>{
    console.log("收到客户请求");
    res.send("hello 欢迎访问后台数据");
    res.end();
});

app.listen(3000);
console.log("服务器启动成功,监听中...");