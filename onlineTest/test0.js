function dif(a,b){
    var x, y;
    var count = 0;
    for(var i=0; i<32; i++){
        x = (a>>i) & 1;
        y = (b>>i) & 1;
        if(x != y){
            count++;
        }
    }
    return count;
}

var n = readInt();
var arr = [];
for(var i=0; i<n; i++){
    arr[i] = readInt();
}
for(var j=0,len=arr.length; j<len-1; j++){
    printsth(diff(arr[j],arr[j+1]));
}