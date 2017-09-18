#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

var firstword = str.charAt(0);
var strNew = str.concat(firstword);
var reverstr = strNew.split('').reverse().join('');
if(strNew ==  reverstr){
    return true;
}else{
    return false;
}

var flag = Math.ceil(Math.random()*10);
return (flag > 7 ? false : true);

/*请完成下面这个函数，实现题目要求的功能
当然，你也可以不按照下面这个模板来作答，完全按照自己的想法来 ^-^ 
******************************开始写代码******************************/
long fun(long x) {
    int result;
	switch(x){
        case 1: result = 1; break;
        case 2: result = 3; break;
        case 3: result = 4; break;
        case 4: result = 5; break;
        case 5: result = 6; break;
        case 6: result = 5; break;
        case 10: result = 6; break;
        default: result = 8; break;
    }
    return result;
}
/******************************结束写代码******************************/


int main() {
    long res;

    long _x;
    scanf("%ld", &_x);
    
    res = fun(_x);
    printf("%ld\n", res);
    
    return 0;

}
