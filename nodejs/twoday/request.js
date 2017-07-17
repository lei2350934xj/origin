/*
    V8对ES6支持情况分为三种情况: 根本不支持 直接支持 严格模式支持
*/
"use strict";

const http = require("http");

let count = 0;

const server = http.createServer((request,response)=>{
    response.write(`你是第${count++}个访问用户`);
    response.end();
});

server.listen(2080,(error)=>{
    if(error)
        throw error;
    console.log("成功启动服务器,端口2080");
});