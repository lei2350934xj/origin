// 读取标准输入，这主要是为了不让当前进程退出
process.stdin.resume();

process.on('SIGINT', function() {
  console.log('SIGINT信号，按Control-D退出');
});