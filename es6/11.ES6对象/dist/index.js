'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 对象的属性赋值
var name = 'lllttt';
var age = 23;
var obj = {
    name: name,
    age: age
};
console.log(obj);

// key值的构建
var key = 'name';
var person = _defineProperty({}, key, 'dada');
console.log(person);
