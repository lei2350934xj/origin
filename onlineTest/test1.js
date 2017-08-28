var n = readInt();  // 输入要测试的字符串数量
var arr = [];

for(let i=0; i<n; i++){
    arr[i] = read_line();   // 输入一个字符串
}

for(let i=0; i<n; i++){
    print(find(arr[i]));
}

function find(str){
    var temp = [];
    temp[0] = 0;    // 存 字符 d 的个数
    temp[1] = 0;    // 存 字符 j 的个数
    temp[2] = 0;    // 存 字符 i 的个数
    var flag1 = false;
    var flag2 = false;
    for(let i=0,len=str.length; i<len; i++){
        if(str[i] == 'd'){
            temp[0]++;
            flag1 = true;   // 保证 d 在最前面
        }
        if(flag1 && (str[i]=='j')){
            temp[1]++;
            flag2 = true;   // 保证 j 在中间
        }
        if(flag2 && (str[i]=='i')){
            temp[2]++;
        }
    }
    return temp[0] * temp[1] * temp[2];
}