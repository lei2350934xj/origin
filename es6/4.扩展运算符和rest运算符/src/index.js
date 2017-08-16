// 对象扩展运算符
// function fn(...args){
//     console.log(args[0]);
//     console.log(args[1]);
//     console.log(args[2]);
//     console.log(args[3]);
// }

// fn(1,2,3);


let arr1 = ["www","baidu","com"];
let arr2 = [...arr1];   // ...表示的就是数组里的各个元素 而不是arr1 的引入地址
console.log(arr2);
arr2.push("box");
console.log(arr2);
console.log(arr1);


function fn(first,...args){
    // console.log(args.length);
    // for(let i=0;i<args.length;i++){
    //     console.log(args[i]);
    // }
    for( let val of args){
        console.log(val);
    }
}
fn(0,1,2,3,4);  // 输出4 这个...args就是rest运算符  rest代表剩下的