/**
 *反序 
 */
var numbers = [1,2,3,4,5,6];
numbers.reverse();
console.log(numbers);

/**
 * 因为sort方法在对数组做排序时，把元素默认成字符串进行相互比较。
 * JavaScript在做字符比较 的时候，是根据字符对应的ASCII值来比较的
 * 这段代码，对于b大于a时，会返回负数，反之则返回正数。如果相等的话，就会返回0。也 
 * 就是说返回的是负数，就说明a比b小，这样sort就根据返回值的情况给数组做排序。
 */
numbers.sort(function(a, b){
        return a-b;
});
function Compare(a,b){
    if(a<b){
        return -1;
    }else{
        return 1;
    }
    return 0;
}