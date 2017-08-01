/**
 * __dirname
 * 获取执行文件时该文件在文件系统中所在的目录
 */
console.log(__dirname);

/**
 * process.cwd()
 * 可以获取当前的工作目录
 */
console.log(process.cwd());

/**
 * process.chdir()
 * 可以更改工作目录
 */
process.chdir("../");   // 切换到上级目录
console.log(process.cwd());