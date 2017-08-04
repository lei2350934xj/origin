var express = require("express");

/**
 * post提交下 数据需要bodyParser来进行解码
 * 属于中间件
 */
var bodyParser = require("body-parser");    

var app = express();

// json类型body
/**
 * use方法有两个参数，但你省略第一个参数的时候，说明所有的路径都可以被它拦截
 * 这里就是请求体的content-type是json格式，这里就通过bodyParser.json()把它变成一个json对象
 * 有点类似jQuery里的JSON.parse()
 */
app.use(bodyParser.json());
// querystring类型body
app.use(bodyParser.urlencoded({extended:false}));
/**
 * 用use 说明所以的提交方式都可以被拦截，而用get就只能拦截get方式的提交，post同样只能拦截post请求的提交
 */


// 静态文件目录
/**
 * 一个网站一般有很多静态文件，供浏览器调用
 * 该方法指定了一个文件存在静态文件,只要文件路径正确就返回public 文件下的静态文件
 * __dirname指定了当前应用所在的文件路径，这里就是app_demo
 */
app.use(express.static(__dirname+"/public"));


// 路由与业务逻辑
// app.get("/",function(req,res){
//     res.send("hello");
// });
// 路由也业务逻辑 升级
// 访问：127.0.0.1:3000/user/list
app.use("/user",require("./routes/user.js"));
/**
 * 或者这么写：
 * var user = require("./routes/user.js");
 * app.use("/user",user);
 */

app.listen(3000);