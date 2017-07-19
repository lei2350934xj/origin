// 引入模块
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/**
 * routes 是一个文件夹形式的本地模块，即routes/index.js，它的功能是为指定
 * 的路径组织返回内容，相当与MVC中的控制器
 */ 
var index = require('./routes/index');
var users = require('./routes/users');

// 实例化一个对象
var app = express();

// 使用模版引擎，先告诉模版在哪  再使用模版
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Express依赖于connect，提供了大量的中间件，可以通过app.use启用
 * 中间件：一系列的组件连接到一起，然后让http请求依次流过这些组件，这些被connect串联起来的组件成为中间件
 * 常用中间件：bodyParser、router、methodOverride、static、errorHandler
 */
// 启用中间件
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

/**
 * 自己创建一个路由规则
 * 访问 http://127.0.0.1:3000/abc
 * app.get是路由规则创建函数，参数一：请求的路径  参数二：一个回调函数
 */
app.get("/abc",(req,res)=>{
  res.send("我是自定义的路由规则");
});
/**
 * 更高级的路由规则
 * 访问 http://127.0.0.1:3000/school/erzhong
 */
app.get("/school/:erzhong",(req,res)=>{
  res.send("school: "+req.params.erzhong);
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
