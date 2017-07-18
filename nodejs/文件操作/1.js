/**
 * fs模块
 * fs模块是文件操作的封装，它提供了文件的读取、写入、更名、删除、遍历、链接POSIX文件系统等操作
 * 与其他模块不同的是，fs模块中所有的操作都提供 同步和异步两个版本。 例如 readFile()和readFileSync()
 * fs.readFile(filename[,encoding][,callback(err,data)]),没指定encoding,则以buffer形式表示的二进制数据
 */
const fs = require("fs");
// 异步读取 不指定编码
fs.readFile("../全局对象和全局变量/2.js",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("==============异步读取===============");
        console.log(data);
    }
});
// 异步读取 指定编码
fs.readFile("../全局对象和全局变量/2.js","utf8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("==============异步读取===============");
        console.log(data);
    }
})
// 同步读取,有错误只能通过try catch捕获
try {
    var data = fs.readFileSync("../全局对象和全局变量/2.js","utf8");
    console.log("=============同步读取===============");
    console.log(data);
} catch (error) {
    throw error;
}   

/**
 * fs.open()
 * 第一个参数是path 
 * 第二个参数是打开方式, r r+ w w+ a a+ 类似于语言的open
 */

/**
 * fs.read()相比readFile()提供更底层的接口
 */
fs.open("../firstday/2.hello.js","r",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    var buf = new Buffer(8);
    fs.read(data,buf,0,8,null,(err,bytesRead,buffer)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("bytesRead "+byteRead);
        console.log(buf);
    })
})