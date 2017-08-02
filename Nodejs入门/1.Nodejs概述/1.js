/**
 * Node约定，如果某个函数需要回调函数作为参数，则回调函数是最后一个参数。
 * 另外，回调函数本身的第一个参数，约定为上一步传入的错误对象。
 */
var isTrue = function(value,callback){}
var callback = function(err,value){}
/**
 * 上面代码中，callback的第一个参数是Error对象，第二个参数才是真正的数据参数。
 * 这是因为回调函数主要用于异步操作，当回调函数运行时，前期的操作早结束了，
 * 错误的执行栈早就不存在了，传统的错误捕捉机制try…catch对于异步操作行不通，
 * 所以只能把错误交给回调函数处理。
 */
try {
  db.User.get(userId, function(err, user) {
    if(err) {
      throw err
    }
    // ...
  })
} catch(e) {
  console.log('Oh no!');
}