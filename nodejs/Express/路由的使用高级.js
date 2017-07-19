const http = require("http");
const express = require("express");
const app = express();

// 路由模块化 使用express.Router
const user = require("./route/user.js");
app.use("/user",user);

const bodyParser = require('body-parser');

// 浏览器输入 127.0.0.1:3000/parma?name=llttt&pwd=123

// 使用中间件 解析post提交的数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// 使用中间件 静态文件处理的
app.use(express.static(__dirname+"/public"));

// app.get("/parma",(req,res,next)=>{
//     req.user = req.query;   // get方式提交的数据在query里
//     next();
// });
// app.post("/parma",(req,res,next)=>{
//     req.user = req.body;    // post方式提交的数据在body里面，要先解析用bodyParser
//     next();
// });
// app.all("/parma",(req,res)=>{
//     res.send(req.user);
//     res.end();
// });

/**
 * 改进方式-使用 app.route() 创建路由路径的链式路由句柄
 */
app.route("/parma")
    .get((req,res,next)=>{
        req.user = req.query;
        next();
    })
    .post((req,res,next)=>{
        req.user = req.body;
        next();
    })
    .all((req,res)=>{
        res.send(req.user);
        res.end();
    });

http.createServer(app);
app.listen(3000,()=>{
    console.log("监听在3000端口");
})