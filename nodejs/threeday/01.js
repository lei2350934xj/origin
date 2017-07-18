// path模块介绍

const path = require("path");

const temp = path.join(__dirname,"../twoday/controlC.js");

// path.basename(path[, ext])
// path.delimiter   // 获取环境变量的分隔符
// path.dirname(path)   // 文件路径
// path.extname(path)   // 获取路径中的扩展名(包含 那个 .)
// path.format(pathObject)  // 将路径对象转成字符串
// path.isAbsolute(path)    // 判断一个路径是否是绝对路径
// path.join([...paths])    // 拼接路径
// path.normalize(path)
// path.parse(path)     // 将一个路径字符串转换为一个对象
// path.posix
// path.relative(from, to)
// path.resolve([...paths]) // 把一个路径或路径片段的序列解析为一个绝对路径
// path.sep
// path.win32

console.log(path.basename(temp));
console.log(path.delimiter);
console.log(path.dirname(temp));
console.log(path.extname(temp));

var obj = path.parse(temp);
console.log(obj);
console.log(path.format(obj));

console.log(path.isAbsolute(temp));

console.log(__dirname,'..','./temp','a','../../1.txt');