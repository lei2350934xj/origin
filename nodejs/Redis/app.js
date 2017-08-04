var expressSession = require('express-session');
var redis = require('redis');
var RedisStore = require('connect-redis')(expressSession);

// 创建Redis客户端
var redisClient = redis.createClient(6379, '127.0.0.1', {auth_pass: 'password'});
// 设置Express的Session存储中间件
app.use(expressSession({store:new RedisStore({client: redisClient}), secret:'password', resave:false, saveUninitialized:false}));