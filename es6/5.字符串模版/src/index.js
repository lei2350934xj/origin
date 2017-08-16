let name = 'llttt';

// let title = "你的名字是"+name+"嘿嘿";
let title = `你的名字是${name}嘿嘿`;

document.write(title);

let head = `<br/>我==${name}<em>很帅</em>啦啦啦啦`;
document.write(head);

// 字符串查找
document.write(head.includes(name));    // 含有
document.write(head.startsWith(name));    // 开头含有
document.write(head.endsWith(name));    // 结尾含有
document.write('lttt'.repeat(6));    // 循环 6次前面的字符串