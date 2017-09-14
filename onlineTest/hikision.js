var n;
var start;
var now;

var time;   // 时间差值

var x = parseInt(time / 15);
if(x > n){
    var circle = parseInt(x / n);
}
if(time%15 != 0){
    if(x+1 < n){
        result = (x+1)+'-'+(x+2);
    }else{
        result = (x+1)+'-1';
    }
}else{
    if(x < n){
        result = x+'-'+x;
    }else{
        result = 1+'-'+1;
    }
}

var str = circle+1+','+result;
print(str);