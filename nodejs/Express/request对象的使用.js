const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 使用中间件 解析post提交的数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// 使用中间件 静态文件处理的
app.use(express.static(__dirname+"/public"));

app.route("/parma")
    .get((req,res,next)=>{
        console.log("get_name="+req.param("name"));
        next();
    })
    .post((req,res,next)=>{
        console.log("post_name="+req.param("name"));
        next();
    })
    .all((req,res)=>{
        console.log("all_name="+req.param("name"));
        res.end("success");
    });
app.get("/get",(req,res)=>{
    console.log(req.headers);
    console.log(req.get("accept"));
    console.log(req.is("text/html"));
});

http.createServer(app);
app.listen(3000,()=>{
    console.log("监听在3000端口");
})