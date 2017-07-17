console.time("main");

var Max = 1000000000;   // 一个非常大的数

// 不断的循环阻塞了代码的执行，0就是将代码插入到队列的最后
setTimeout(()=>{
    for(var i=0;i<Max;i++){

    }
},0);

console.timeEnd("main");