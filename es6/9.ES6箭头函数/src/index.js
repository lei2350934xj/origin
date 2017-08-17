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