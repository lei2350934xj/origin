"use strict";

// 二进制声明 Binary
var binary = 21;
console.log(binary);

// 八进制声明 Octal
var octal = 438;
console.log(octal);

var a = 11 / 4;
console.log(Number.isFinite(a)); // 输出true
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(undefined)); // false

// NaN
console.log(Number.isNaN(NaN)); // 
// Number.isInteger 
var b = 918.12;
console.log(Number.isInteger(b));
var maxint = Math.pow(2, 53) - 1;
console.log(maxint);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
