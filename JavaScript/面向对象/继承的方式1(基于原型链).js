class People {
    constructor() {
    }
    say() {
        // console.log("People say");
        alert("People say");
    }
}

function Student(){

}
// 原型链继承
Student.prototype = new People();   
// 要想调用从父类中继承来的方法
var superSay = Student.prototype.say;
/**
 * 如果这个时候给子类的prototype中 也添加一个say方法，相当于重写父类的方法
 * 且 必须是在prototype中添加一个say方法才行,不然还是调用的父类的方法
 */
Student.prototype.say = function(){
    superSay.call(this);
    alert("Student say");
}
var s = new Student();
s.say();
