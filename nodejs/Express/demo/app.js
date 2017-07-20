const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const fs = require("fs");

// 得到app对象并启动服务
let app = express();
http.createServer(app);

// 设置服务器启动的端口号
app.set("port",8000);   
// 指定视图目录
app.set("views","./public/views");
// 缓存视图
app.set("view cache",true);
// 设置视图引擎
app.set("view engine","ejs");

// 指定静态文件的目录
app.use(express.static(__dirname+"/public"));
// post方式提交数据解析
app.use(bodyParser.urlencoded({extended:true}));
// 解析cookie
app.use(cookieParser());
// 根据cookie获取内存中的session
app.use(session({
    secret:"my_login_demo",
    cookie:{secure:false,maxAge:30*60*1000}
}));
// 自定义中间件 用于判断用户是否登录和能否登录
app.use((req,res,next)=>{
    if(req.session.user){
        next();
    }else{
        var name = req.body.name;   // 获取用户名值noLogin
        var pwd = req.body.password;    // 获取密码值
        var noLogin = req.body.noLogin;    // 获取是否选择免登录
        var cookies = req.cookies;  // 获取所有cookie
        if((name==="liangting"&&pwd==="123") || (cookies.name==="liangting"&&pwd==="123")){
            // 当 勾选免登录
            if(noLogin=="on"){
                res.cookie("name",name,{maxAge:2*7*24*60*60*1000});
                res.cookie("pwd",pwd,{maxAge:2*7*24*60*60*1000});
            }
            req.session.user = {name:name,pwd:pwd};
            next();
        }else{
            res.set("content-type","text/html");
            res.status(200).sendFile(__dirname+"public/html/login.html");
        }
    }
});

app.listen(app.get("port"),()=>{
    console.log("listen on "+app.get("port"));
});