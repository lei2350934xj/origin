// js原生函数声明
function add(a,b){
    return a+b;
}
console.log(add(1,2));

// 参数带有默认值
function del(a,b=1){
    return a-b;
}
console.log(del(3));    // 输出2
console.log(del(3,2));  // 输出1

// 箭头函数
var add1 = (a,b)=> a+b;
console.log(add1(3,6));

var add2 = (a,b)=>{
    console.log("****");
    return a+b;
}
console.log(add2(2,6));

// 对象的函数解构json
let json = {
    a:'llttt',
    b:'帅帅帅'
};
function fun({a,b}){
    console.log(a,b);
}
fun(json);

// 数组解构
let arr=['123','web','es6'];
function fun1(a,b,c){
    console.log(a,b,c);
}
fun1(...arr);

// in的用法
let obj = {
    a:'lltt',
    b:'chinese'
};
console.log('a' in obj);    // true
console.log('b' in obj);    // true
console.log('c' in obj);    // false
