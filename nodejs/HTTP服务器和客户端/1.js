/**
 * Nodejs提供了http模块,其中封住了一个高效的HTTP服务和一个简易的HTTP客户端
 * http server是一个基于事件的HTTP服务器，内部由C++实现，接口由JavaScript封装
 * http request则是一个HTTP客户端工具，用于向服务器发送请求
 * 
 * http.Server是一个基于事件的HTTP服务器，所有请求都被封装到独立的事件，开发者只要对它的事件编写
 * 相应的函数即可实现HTTP服务器的所有功能，它继承于EventEmitter，提供了以下事件:
 *      1.request事件:当客户端请求到来时，该事件被触发，提供两个参数req和res
 *          分别是http.ServerRequest和http.ServerResponse的实例，表示请求和响应信息
 *      2.connect事件:
 *      3.close事件:
 *      我们最常用的就是request事件，为了方便我们的使用，系统已经进行了封装 成了 createServer();
 *      原生来写的话就是 var server = new http.Server();
 *                    server.on("request",(req,res)=>{
 *                          //...
 *                      })
 * 
 * http.ServerRequest是后台最关心的内容，它一般由http.Server的request事件发送，作为第一个参数传递。
 * 一些http.ServerRequest的属性和方法
 */

/*
    该实例调用listen函数，启动服务器并监听2080端口
*/
"use strict";
// 引入模块
const http = require("http");
// 创建服务
const server = http.createServer((request,response)=>{
    // 响应头
    response.writeHead(200,{'Content-Type':'text/html'});
    // 响应内容
    response.write("连接成功");
    // 结束响应
    response.end();
});
// 监听端口
server.listen(2080,(error)=>{
    if(error)
        throw error;
    console.log("成功启动服务器,端口2080");
});

/**
 * 
 * 获取GET请求内容
 *  由于GET请求直接被嵌入在路径中，可以通过url模块中提供的parse()来解析拼接的字符串
 */
// const http = require("http");
// const url = require("url");
// const util = require("util");

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     // 解析并打印成字符串形式 返回给客户端
//     res.end(util.inspect(url.parse(req.url,true)));
// })

/**
 * POST请求
 */
// const http = require("http");
// const querystring = require("querystring");
// const util = require("util");

// http.createServer((req,res)=>{
//     var post = "";
//     // 注册data事件监听函数 每当接受请求体的数据就触发
//     req.on("data",(chunk)=>{
//         post += chunk;
//     });
//     req.on("end",()=>{
//         // 解析成真正的post请求格式            
//         post = querystring.parse(post);
//         // 想前端返回
//         res.end(util.inspect(post));
//     });
// }).listen(3000);