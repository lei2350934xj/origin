// util全局变量,使用工具类

/**
 * util.inherits()
 * 此方法是一个实现对象间原型继承的函数
 */
const util = require("util");
function Base(){
    this.name = "base";
    this.base = 2017;
    this.sayHello = function(){
        console.log("say hello");
    }
}
Base.prototype.sayName = function(){
    console.log(this.name);
}
function Sub(){
    this.name = "sub";
}
util.inherits(Sub,Base);
// 原有输出
let objBase = new Base();
objBase.sayName();
objBase.sayHello();
console.log(objBase);   // 不会打印原型的方法
console.log("-------");
// 继承的输出
let objSub = new Sub();
objSub.sayName();
console.log(objSub);

/**
 * util.inspect()
 * 将任意对象转换为字符串的方法
 */