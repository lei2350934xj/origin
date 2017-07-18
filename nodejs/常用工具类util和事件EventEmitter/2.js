/**
 * events事件驱动
 * events是Nodejs最重要的模块，原因是Nodejs本身架构就是事件式的而他提供了唯一的接口。
 * events模块不仅用于用户代码与Nodejs下层事件循环的交互，还几乎被所有的模块依赖。
 * events模块只提供了一个对象 events.EventEmitter
 * 核心 就是事件发射与事件监听功能的封装
 */

const events = require("events");
// 实力化事件对象
const emitter = new events.EventEmitter();
// 注册监听
emitter.on("myevent",()=>{
   console.log("触发了我自定义的事件");
});
// 可以注册多个事件
emitter.on("myevent",()=>{
   console.log("再次触发了我自定义的事件");
});
// 触发事件
emitter.emit("myevent");

/**
 *  1.EventEmitter.once()触发一次的监听器 
 *  2.EventEmitter.removeListenr()移除一个监听器
 *  3.EventEmitter.removeAllListens()
 */ 