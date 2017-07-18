// 声明事件对象
const EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();

// 注册事件
event.on("myevent",()=>{
    console.log("这是一个自定义的事件");
});

// 触发事件
setTimeout(()=> {
    event.emit("myevent");
}, 1000);