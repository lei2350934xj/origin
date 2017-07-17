setInterval(function(){
    console.log(1);
},1000);

// 用于标示当前是否已经按下control+c
var exiting = false;

process.on("SIGINT",()=>{
    // console.log("按下了control + c");
    if(exiting){
        process.exit(); // 终止当前node的进程
        console.log("退出");
    }else{
        exiting = true; // 用户第一次按下control + c
        console.log("第一次按下");
    }
    setTimeout(()=>{
        exiting = false;
    },1000);
});