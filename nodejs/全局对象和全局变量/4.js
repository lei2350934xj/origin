/**
 * process.argv
 * 包含了所有Node程序运行时的参数值
 */
// 获取传递的实参 node 4.js --arg1 --arg2
console.log(process.argv.slice(2));