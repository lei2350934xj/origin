var line = readline();

var stack = [];
var max = 0;

for(var i=0; i<line.length; i++){
    if(line[i] == '('){
        stack.push(line[i]);    // 入栈
    }else if(line[i] == ')'){
        stack.pop();    // 出栈
    }
    if(max < stack.length){
        max = stack.length;
    }    
}

var result = 1;
while(max>0){
    result *= max;
    max--;
}

print(result);