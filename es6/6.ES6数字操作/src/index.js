// 二进制声明 Binary
let binary = 0b010101;
console.log(binary);

// 八进制声明 Octal
let octal = 0o666;
console.log(octal);

let a = 11/4;
console.log(Number.isFinite(a));    // 输出true
console.log(Number.isFinite(NaN));    // false
console.log(Number.isFinite(undefined));    // false

// NaN
console.log(Number.isNaN(NaN));     // 
// Number.isInteger 
let b = 918.12;
console.log(Number.isInteger(b));   
let maxint = Math.pow(2,53) - 1;
console.log(maxint);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);