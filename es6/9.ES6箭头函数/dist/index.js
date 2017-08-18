'use strict';

// js原生函数声明
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

// 参数带有默认值
function del(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return a - b;
}
console.log(del(3)); // 输出2
console.log(del(3, 2)); // 输出1

// 箭头函数
var add1 = function add1(a, b) {
    return a + b;
};
console.log(add1(3, 6));

var add2 = function add2(a, b) {
    console.log("****");
    return a + b;
};
console.log(add2(2, 6));

// 对象的函数解构json
var json = {
    a: 'llttt',
    b: '帅帅帅'
};
function fun(_ref) {
    var a = _ref.a,
        b = _ref.b;

    console.log(a, b);
}
fun(json);

// 数组解构
var arr = ['123', 'web', 'es6'];
function fun1(a, b, c) {
    console.log(a, b, c);
}
fun1.apply(undefined, arr);
