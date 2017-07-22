const express = require("express");
let router = express.Router();
let path = require("path");


// 根目录
router.get("/",function(req,res,next){
    // res.send("你好 这里是自定义路由的根目录文件");
    /**
     * 方式1
     */
    // let options = {
    //     root:path.resolve(__dirname,"../public/views/")
    // };
    // res.sendFile("index.html",options);
    /**
     * 方式2
     * path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径
     * path.resolve("abc/love","qwe/a.js") 解析成 abc/love/qwe/a.js
     */
    res.sendFile(path.resolve(__dirname,"../public/views/index.html"));
});

// about目录
router.get("/about",(req,res,next)=>{
    res.send("你好 这里是自定义路由的about文件");
});

// api目录
router.get("/api",(req,res,next)=>{
    res.send({
        name:'lllttttt',
        age:23,
        sex:'man'
    });
});

module.exports = router;