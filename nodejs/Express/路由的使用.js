const http = require("http");
const express = require("express");
const app = express();


// 加入一个静态文件处理的中间件
// 理解:当post提交之后，通过路由去取post文件
app.use(express.static(__dirname+"/public"));
/**
 * 路由的设置
 */
// 必须按照指定路由路径去访问 地址
app.get("/path",(req,res,next)=>{
    console.log("hello get提交数据");
    next();
});
app.post("/post",(req,res,next)=>{
    console.log("hello post提交数据");
    next();
});
app.all("/post",(req,res)=>{
    console.log("hello all提交数据");
});

// abd abcd
app.get("/abc?d",function(req,res){
    console.log("abd===abcd");
});
// abcd abccccd
app.get("/abc+d",function(req,res){
    console.log("abcd=====abccccd");
});
// abcxxxxyz abcyyyxyz
app.get("/abc*xyz",(req,res)=>{
    console.log("abcxxxxxyz====abcyyyyxyz");
});
// abc(123)xyz abcxyz
app.get("/abc(123)?xyz",(req,res)=>{
    console.log("abc(123)xyz====abcxyz");
});

app.get("/two",(req,res,next)=>{
    console.log("one");
    next();
},(req,res)=>{
    console.log("two");
});

app.get("/array",[first,second],(req,res)=>{
    console.log("third");
    res.send("我是最后一个，只有最后一个里面才能send");
    res.end();
});
function first(req,res,next){console.log("first");next();}
function second(req,res,next){console.log("second");next();}


http.createServer(app);
app.listen(3000,(err,data)=>{
    if(err){
        console.log(error);
    }
    console.log("listen on 3000");
});