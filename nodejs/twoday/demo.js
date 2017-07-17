// Node如何充分利用单线程
/*  事件驱动-理解一下
    先主线程执行，遇到事件（如readFile、readData）就放到事件
    队列里面(里面的具体执行内容是异步先不执行)。
    主线程执行完毕，就去事件队列里找事件，执行完一个事件
    再执行对应的回调函数
*/

console.time("createfile");

const fs = require("fs");

fs.stat("./stdin.js",(err,stat)=>{
    // 先判断是否存在stdin这个文件
    if(err){
        console.error("文件打开错误");
    }
    // 存在就删除掉这个文件
    fs.unlink("./stdin.js",(err)=>{
        if(err){
            console.log("删除失败");
        }
        // 删除完了再重新 创建
        fs.writeFile("./stdin.js",new Date(),(err)=>{
            if(err){
                console.log("重新创建文件失败");
            }
            console.log("文件删除后创建成功");
        });
    });
});
console.timeEnd("createfile");


