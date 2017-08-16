'use strict';

var name = 'llttt';

// let title = "你的名字是"+name+"嘿嘿";
var title = '\u4F60\u7684\u540D\u5B57\u662F' + name + '\u563F\u563F';

document.write(title);

var head = '<br/>\u6211==' + name + '<em>\u5F88\u5E05</em>\u5566\u5566\u5566\u5566';
document.write(head);

// 字符串查找
document.write(head.includes(name)); // 含有
document.write(head.startsWith(name)); // 开头含有
document.write(head.endsWith(name)); // 结尾含有
document.write('lttt'.repeat(6)); // 循环 6次前面的字符串
