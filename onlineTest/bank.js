var m = readline(); // 输入m

var height = [];
for(var i=0; i<m; i++){
    height[i] = readline(); // 输入m个 身高
}

var A = []; // 存放 A挑选出的身高
var B = []; // B
var countA = 0;
var countB = 0;
var flag = 0;   // 控制A 选 或者 B选
for(var i=0; i<m; i++){
    if(flag == 0){
        // A 选
        if( (height[i]>height[i+2]) && (height[i+1]>height[i+2]) ){
            // 出列2个
            A[countA] = height[i];
            A[countA+1] = height[i+1];
            countA++;
        }else{
            // 出列1个
            A[countA] = height[i];
            countA++;
        }
        flag = 1;
    }else if(flag == 1){
        // B 选
        if( (height[i]>height[i+2]) && (height[i+1]>height[i+2]) ){
            // 出列2个
            B[countB] = height[i];
            B[countB+1] = height[i+1];
            countB++;
        }else{
            // 出列1个
            B[countB] = height[i];
            countB++;
        }        
        flag = 0;
    }
}

var sumA = 0;
var sumB = 0;
for(var i=0; i<A.length; i++){
    sumA += A[i];
}
for(var i=0; i<B.length; i++){
    sumB += B[i];
}

if(sumA > sumB){
    print("true");
}else{
    print("false");
}
