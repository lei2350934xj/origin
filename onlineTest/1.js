var s = readline();

var arr = [];
var count = 1;
for(var i=0; i<s.length; i++){
    if(s[i] == s[i+1]){
        count++;
    }else{
        arr.push(count);
        count = 1;
    }
}

var sum = 0;
for(var i=0; i<arr.length; i++){
    sum += arr[i];
}
sum = sum / arr.length;
print(sum.toFixed(2));