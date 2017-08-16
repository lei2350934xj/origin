"use strict";

// 对象扩展运算符
// function fn(...args){
//     console.log(args[0]);
//     console.log(args[1]);
//     console.log(args[2]);
//     console.log(args[3]);
// }

// fn(1,2,3);


var arr1 = ["www", "baidu", "com"];
var arr2 = [].concat(arr1); // ...表示的就是数组里的各个元素 而不是arr1 的引入地址
console.log(arr2);
arr2.push("box");
console.log(arr2);
console.log(arr1);

function fn(first) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    // console.log(args.length);
    // for(let i=0;i<args.length;i++){
    //     console.log(args[i]);
    // }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
fn(0, 1, 2, 3, 4); // 输出4 这个...args就是rest运算符  rest代表剩下的
