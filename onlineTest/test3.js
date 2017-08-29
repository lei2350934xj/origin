/**
 * 思路：
 * a(n) = num;  也就是表示第n组的长度 为num
 * 用length来存放当前组的长度 arr数组存放输入的n个整数
 * 第一组 arr[0] 输出length个
 * 第二组 arr[1] 输出length个
 *      依次类推
 * 第n组 arr[x] 数组下标依次循环 x=0,1,2,3...,n-1
 */

var line;

while(line=readline()){
    var lines = line.split(' ');
    var m = parseInt(lines[0]); // m 行
    var n = parseInt(lines[1]); // n个整数
    var arr = [];
    var length;

    for(let i=0; i<n; i++){
        arr[i] = readline();    // 依次输入 n 个整数的值, 存入数组arr中
    }
    
    length = arr[0];    // 开始第一组的长度 为 arr[0]的值
    var temp;
    for(var i=0,j=0; i<m; i++){
        if(j>=n){    // 一圈结束 从头开始
            j = 0;
        }
        if(length > 0){
            print(arr[j]);
            length--;
            temp = arr[j];
        }else{
            j++;    // 第一组 数输出结束 +1 准备输出下一组
            length = temp;    // 新的组的长度
        }
    }
}
