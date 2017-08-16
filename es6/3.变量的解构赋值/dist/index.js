"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。

var num = 1;
console.log(num);

// 数组结构
var a = 1,
    b = 2,
    c = 3; // 赋值模式

console.log(a);
console.log(b);
console.log(c);

var _ref = ["xiaomi"],
    x = _ref[0],
    _ref$ = _ref[1],
    y = _ref$ === undefined ? false : _ref$; // 默认值  === var foo=false;

console.log(x + y);

var m = "ten",
    _undefined = undefined,
    n = _undefined === undefined ? "little" : _undefined; // 输出tenlitte, undefined代表没有值 
// let [m,n="little"] = ["ten",null];  // 输出tennull, null代表有值 值为null

// 对象解构

var _foo$bar = { foo: "xiaomi", bar: "小米" },
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;
var _yyy$xxx = { yyy: 123, xxx: 321 },
    xxx = _yyy$xxx.xxx,
    yyy = _yyy$xxx.yyy;

console.log(foo + bar);
console.log(xxx + " " + yyy);
/**
 * 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
 * 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
 */

var ppt = void 0;
var _ppt = { ppt: "幻灯片" };
ppt = _ppt.ppt;

console.log(ppt);

// 字符串解构

var _wo = 'wo',
    _wo2 = _slicedToArray(_wo, 2),
    i = _wo2[0],
    j = _wo2[1];

console.log(i);
console.log(j);
