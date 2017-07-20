function Person(){
    var _this = {}; // 内部声明一个空对象进行承载 内容
    _this.sayHello = function(){
        alert("Person hello");
    }
    return _this;   // 把这个对象暴露给外部
}

function Teacher(){
    var _this = Person();   // 把父类 赋值给 子类
    _this.sayHello = function(){
        alert("Teacher say");
    }
    return _this;
}

var t = Teacher();
t.sayHello();