// json数组格式
let json = {
    '0':'xiaoming',
    '1':'daxiang',
    '2':'shuaishuai',
    length:3
}

// json 转成 数组
let arr = Array.from(json);
console.log(arr);

// Array.of 把数字1，2，3这种转化为数组
let arr1 = Array.of(1,2,3);
console.log(arr1);

// find() 实例方法
let arr2 = [6,5,4];
console.log(arr2);
console.log(arr2.find(function(value,index,arr){
    return value > 5;
}));

// fill
let arr3 = ['one','two','three'];
arr3.fill('web',1,3);
console.log(arr3);

// 数组循环 for of循环
// for(let i=0;i<length;i++){}
for(let item of arr3){  
    console.log(item);  // 输出内容
}
for(let item of arr3.keys()){  
    console.log(item);  // 输出下标
}
for(let item of arr3.entries()){  
    console.log(item);  // 输出带 索引的内容
}

// entries
let arr4 = ['666','777','9ban'];
let list = arr4.entries();
console.log(list.next().value);
console.log('-------------------');
console.log(list.next().value);
console.log('*******************');
console.log(list.next().value);
console.log('6666666666666666666');
