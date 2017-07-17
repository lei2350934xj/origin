/* 模块:
    一个文件一个模块
    模块用exports暴露或者module.exports暴露
    exports是module对象里面的一个对象
    http://www.maiziedu.com/course/694/
*／
var kclass = require("./7.class.js");

kclass.add("张老师",["小明","小金"]);
