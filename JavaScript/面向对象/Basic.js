/**
 * 第一种:字面量形式的对象
 */
var person = {
    name:"liangting",
    age:25,
    eat:function(){
        console.log("吃饭饭");
    }
};
//alert(person.name); // 调用

/**
 * 第二种:原型链的形式
 */
function Person(){

}
Person.prototype = {
    name:"liangting",
    age:23,
    eat:function(){
        console.log("吃饭饭");
    }
};
var p = new Person();
console.log(p.name);
p.eat();
