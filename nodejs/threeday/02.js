// 同步调用和异步调用
// 同步调用耗时多 异步调用耗时少
const fs = require("fs");

const path = require("path");

// 同步调用
console.time("sync");
// 同步调用 才可以使用try catch
try {
    var data = fs.readFileSync(path.join(__dirname,"../node_modules/http-errors/index.js")); 
    // console.log(data);
} catch (error) {
    throw error;
}
console.timeEnd("sync");

// 异步调用
console.time("async");
fs.readFile(path.join(__dirname,"./../node_modules/http-errors/index.js"),"utf8",(error,data)=>{
    if(error){
        throw error;
    }
    // console.log(data);
});   
console.timeEnd("async");


