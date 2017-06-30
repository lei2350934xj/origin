var student = require("./7.students.js");
var teacher = require("./7.teacher.js");

function add(teacherName,students) {
    teacher.add(teacherName);
    students.forEach(function(item,index) {
        student.add(item);
    });
}

exports.add = add;