const http = require("http");
const express = require("express");
let app = express();

/**
 *  - 1.安装模块：npm install --save <module-name>
 *  - 2.在应用中引入模块：require('module-name')
 *  - 3.按照文档的描述使用模块：app.use( ... )
 */ 
const bodyParser = require("body-parser");
const multer = require("multer");
const cookie = require("cookie-parser");
const cookieSession = require("cookie-seesion");
const errorHandler = require("errorhandler");

http.createServer(app);

// 中间件使用
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// 路由,这里接收get方式的请求。 匹配/test路径的请求
app.get("/test",(req,res)=>{
    console.log("收到客户请求");
    res.send("hello 欢迎访问后台数据");
    res.end();
});

app.listen(3000);
console.log("服务器启动成功,监听中...");