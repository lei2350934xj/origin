var N = readline();

var arr = [];
arr[0] = 1;
var count = 1;

for(var i=1; i<65535; i++){
    var temp1 = parseInt(i / 2);   // 余数
    var temp2 = parseInt(i / 3);
    var temp3 = parseInt(i / 5);

    if( (i%2==0) || (i%3==0) || (i%5==0) && (temp1==3 || temp1==5) 
        && (temp2==2 || temp2==5) && (temp3==2 || temp3==3) ){
        arr[count] = i;
        count++;
    }
}

print( arr[N-1] );