var N = readInt();

var arr = [];
var day = [];   // 存放日期,因为限定在 8月份
var key = [];    // 同一天的打卡次数
for(let i=0; i<N; i++){
    arr[i] = read_line();   // 输入一行打卡记录
    if(day[i] == 'undefined'){
        day[i] = arr[i].substr[3,5];    // 取3、4位置上的字符 也就是日期
        key[i] = 1;
    }else{
        key[i]++;
    }
}

Bubble(day);    // 对日期进行排序

for(let i=0; i<N; i++){
    if(key[i] >= 2){
        // 有效打卡
    }
}

function Bubble(str){  // 判断
    // 对日期进行排序 
    var temp;
    for(let i=0; i<str.length; i++){
        for(let j=0; j<str.length-i; j++){
            if(str[j] > str[j+1]){  // 升序排列
                temp = str[j];
                str[j] = str[j+1];
                str[j+1] = temp;
            }
        }
    }
}