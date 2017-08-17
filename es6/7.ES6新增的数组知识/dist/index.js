'use strict';

// json数组格式
var json = {
    '0': 'xiaoming',
    '1': 'daxiang',
    '2': 'shuaishuai',
    length: 3

    // json 转成 数组
};var arr = Array.from(json);
console.log(arr);

// Array.of 把数字1，2，3这种转化为数组
var arr1 = Array.of(1, 2, 3);
console.log(arr1);

// find() 实例方法
var arr2 = [6, 5, 4];
console.log(arr2);
console.log(arr2.find(function (value, index, arr) {
    return value > 5;
}));

// fill
var arr3 = ['one', 'two', 'three'];
arr3.fill('web', 1, 3);
console.log(arr3);

// 数组循环 for of循环
// for(let i=0;i<length;i++){}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr3[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item); // 输出内容
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

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr3.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _item = _step2.value;

        console.log(_item); // 输出下标
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = arr3.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _item2 = _step3.value;

        console.log(_item2); // 输出带 索引的内容
    }

    // entries
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var arr4 = ['666', '777', '9ban'];
var list = arr4.entries();
console.log(list.next().value);
console.log('-------------------');
console.log(list.next().value);
console.log('*******************');
console.log(list.next().value);
console.log('6666666666666666666');
