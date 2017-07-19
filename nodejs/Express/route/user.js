const express = require("express");
let user = express.Router();

user.get("/login",(req,res,next)=>{
    console.log("登录");
    res.send("登录成功");
    res.end();
})
user.get("/logout",(req,res,next)=>{
    console.log("退出");
    res.send("退出成功");
    res.end();
})

// 访问就是127.0.0.1:3000/user/login 和 127.0.0.1:3000/user/logout
// app.use("/user",user);
module.exports = user;