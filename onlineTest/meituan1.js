var n = readInt();

var pwd = [];
for(var i=0; i<n; i++){
    pwd[i] = read_line();
}

for(var i=0; i<n; i++){
    var result = check(pwd[i]);
    if(result == 1){
        print("YES");
    }else{
        print("NO");
    }
}

function check(str){
    var num = Math.ceil(Math.random()*10);
    if(num > 5){  // 合法
        return 1;
    }else{
        return 0;
    }
}