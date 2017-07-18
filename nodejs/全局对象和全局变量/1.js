// global是全局对象, process、console都是global对象的属性
// process、console属于 全局变量

/**
 * process.argv; 
 * 是命令行参数数字,第一个元素是node，第二个元素是脚本文件名，第三个元素开始每个元素是一个运行参数。
 */

//process.stdout();

/**
 * process.stdin();
 * 输入流要先回复使用
 */
// process.stdin.resume();
// process.stdin.on("data",(data)=>{
//     process.stdout.write("read from console "+data.toString());
// });

/**
 * process.nextTick(callback);
 * 把复杂的事件拆分成简单的事件去执行
 */
function compute(){
    console.log("l am compute");
}
function somethingComputed(args){
    console.log("l am somethingComputed");
    console.log(args);
}
function doSomething(args,callback){
    somethingComputed(args);
    process.nextTick(callback);
}
doSomething("123",compute);


