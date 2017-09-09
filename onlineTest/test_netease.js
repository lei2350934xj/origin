var n = readline(); // 输入一个正整数 n

var arr = '';

while(n != 0){
    // 先判断奇偶
    if(n%2 == 0){
        // 偶数
        n = (n-2) / 2;
        arr = '2' + arr;
    }else{
        // 奇数
        n = (n-1) / 2;
        arr = '1' + arr;
    }
}

print(arr);