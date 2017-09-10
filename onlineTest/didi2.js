var N = readline();

print( Ugly(N) );

function Min(a, b, c) {
    var temp = a > b ? b : a;
    return temp > c ? c : temp;
}

function Ugly(n){
    if(n <= 0){
        return 0;
    }
    var arr = [];
    arr[0] = 1;
    var count = 1;
    var number2 = 0;
    var number3 = 0;
    var number5 = 0;

    while (count < n) {
        var min = Min(arr[number2] * 2, arr[number3] * 3, arr[number5] * 5);
        arr[count] = min;
        while (arr[number2] * 2 <= arr[count]){
            number2++;
        } 
        while (arr[number3] * 3 <= arr[count]){
            number3++;
        }
        while (arr[number5] * 5 <= arr[count]){
            number5++;
        }
        count++;
    }
    return arr[n-1];
}
