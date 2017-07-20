const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const fs = require("fs");

// 引入自定义路由模块
const base = require("./route/base.js");

// 得到app对象并启动服务
let app = express();
http.createServer(app);

// 设置服务器启动的端口号
app.set("port",3000); 
// 设定views变量 意为视图存放的目录
app.set("views","./public/views");

// 静态资源文件目录
app.use(express.static(__dirname+"/public"));

// app.get("/",(req,res,next)=>{
//     // res.send("hello !");    // 测试路由
//     res.sendFile("./public/views/index.html");
// });
/**
 * http://127.0.0.1:3000/
 * http://127.0.0.1:3000/about
 * http://127.0.0.1:3000/api
 */
app.use(base);  // 使用自定义的路由模块

app.listen(app.get("port"),()=>{
    console.log("listen on "+app.get("port"));
});