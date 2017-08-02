var i1 = new Buffer('Hello');
var i2 = new Buffer(' ');
var i3 = new Buffer('World');
console.log(Buffer.concat([i1, i2, i3], 10).toString());
// 'Hello Worl'