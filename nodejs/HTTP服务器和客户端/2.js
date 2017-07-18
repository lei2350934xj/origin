/**
 * http模块提供了两个函数http.request和http.get 功能室作为客户端向HTTP服务器发送请求
 */
/**
 * http.request(options,callback)发起HTTP请求
 */
/**
 * http.get(options,callback)是一个更加简便的处理GET请求的方法，会自动将请求方法设置为
 * GET请求，同时不需要手动调用resquest.end()
 */

const http = require("http");
const querystring = require("querystring");

http.createServer((req, res) => {
    console.log("数据来到，解析数据");
    var post = "";
    // 注册data事件监听函数 每当接受请求体的数据就触发
    req.on("data", (chunk) => {
        post += chunk;
    });
    // 传输完毕 end
    req.on("end", () => {
        // 解析成真正的post请求格式            
        post = querystring.parse(post);
        console.log("参数解析完成");
        res.end(post.name);
    });
}).listen(3000);

// 客户端请求
let contents = querystring.stringify({
    name:"llltt",
    age:13,
    address:"深圳"
});
let options = {
    host:"localhost",
    path:"/",
    port:3000,
    method:"post",
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-length':contents.length
    }
};
// 客户端发送请求
let req = http.request(options,(res)=>{
    res.setEncoding("utf-8");
    res.on("data",(data)=>{
        console.log("后台返回数据");
        console.log(data);
    })
});
req.write(contents);
req.end();  // 必须要手动调用req.end()

// get方式
http.get({
    'host':'localhost',
    path:'/user?name=lltt&age=21',
    port:3000},(res)=>{
        res.setEncoding("utf-8");
        res.on("data",(data)=>{
            console.log("服务器响应回来的数据为 "+data);
        })
    });