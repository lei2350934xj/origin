/**
 * 可使用 express.Router 类创建模块化、可挂载的路由句柄。Router 实例是一个完整的中间件和路由系统，
 * 因此常称其为一个 “mini-app”。下面的实例程序创建了一个路由模块，并加载了一个中间件，定义了一些路由，
 * 并且将它们挂载至应用的路径上。
 */
var express = require("express");

var router = express.Router();

router.all("/list",function(req,res){
    console.log(req.method);    // 得到提交方式
    console.log(req.baseUrl);   // 基础路径
    console.log(req.path);      // 

    console.log(req.headers["user-agent"]); // 获取header头里的某一个json数据 这里获取user-agent
    console.log(req.get("user-agent"));

    // 获取url查询参数
    console.log(req.query);     // 从请求中获取查询参数
    console.log(req.query.id);
    console.log(req.body);      // post提交请求时 获取body中的参数
    console.log(req.body.id);

    res.send("hello");
    res.end();
});

// rest风格,例如 想获取id为101的 可以这么输入http://127.0.0.1:3000/user/101
router.get("/:id",function(req,res){
    console.log(req.params.id); // 获取参数的时候要req.params.id
    res.send("success");
});

// res.status指定响应的状态码 告诉浏览器没有权限 请求被拒绝
router.get("/fb",function(req,res){
    res.status(403).send("forbidden");
});

// 告诉浏览器响应的文件类型 contentType
router.get("/tt",function(req,res){
    res.contentType("application/javascript");
    res.sendFile("/ok.js",{root:__dirname+"/../public"});  // 发送文件 参数是文件名称 这里用相对路径
});

// 响应json对象
router.get("/mm",function(req,res){
    res.json({a:1,b:[true,"success"]});
});

module.exports = router;