/**
 * error事件
 * EevntEmitter 定义了一个特殊的事件error,它包含错误定义,我们在遇到异常的时候通常会
 * 发射error事件，当error事件被发射时,EventEmitter规定如果没有相应的监听器，Nodejs
 * 会把它当作异常，退出程序并打印调用栈。我们一般要为发射error的事件对象设置监听器，避免遇到
 * 错误后整个程序奔溃 
 */

const events = require("events");
const emitter = new events.EventEmitter();
emitter.emit('error');
/**
 * 大多数时候我们不会直接使用EventEmitter,而是在对象中继承它,包括fs、http等在内
 * 只要支持事件响应的核心模块都是EventEmitter的子类
 */