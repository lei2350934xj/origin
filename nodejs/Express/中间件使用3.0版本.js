const http = require("http");
/**
 * express搭建简易的web服务器
 */
const express = require("express");

// 导入express框架
let app = express();

http.createServer(app);

// 如果当前中间件没有终结请求-响应循环，
// 则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起
// 中间件的使用
// 根路径的中间件，应用的每个请求都会执行该中间件
// app.use("/",express.static(__dirname+"/public"));
// app.use((req,res,next)=>{
//     res.send("中间件使用，默认所有的");
// });
app.use("/abc",(req,res,next)=>{
    res.send("中间件使用，拦截/abc 格式的");
    next();
});

// 路由,这里接收get方式的请求。 匹配/test路径的请求
app.get("/test",(req,res)=>{
    console.log("收到客户请求");
    res.send("hello 欢迎访问后台数据");
    res.end();
});
// app.all() 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于
// 一个路径上的所有请求加载中间件
// 匹配根路径的请求
// app.get('/', function (req, res) {
//   res.send('about');
// });

app.listen(3000);
console.log("服务器启动成功,监听中...");