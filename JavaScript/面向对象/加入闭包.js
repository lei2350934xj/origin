(function () {
    function People() {

    }
    People.prototype.say = function () {
        // console.log("People say");
        alert("People say");
    }
    window.People = People;
})();

// 闭包的结尾一定要有分号!!!

(function () {
    function Student() {

    }
    // 原型链继承
    Student.prototype = new People();
    var superSay = Student.prototype.say;
    Student.prototype.say = function () {
        superSay.call(this);
        alert("Student say");
    }
    window.Student = Student;
})();

var s = new Student();
s.say();