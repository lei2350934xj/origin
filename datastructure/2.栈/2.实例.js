/**
 *  10进制转化为2进制
 */
function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';
    while (decNumber > 0) { //{1}
        rem = Math.floor(decNumber % 2); //{2}
        remStack.push(rem); //{3}
        decNumber = Math.floor(decNumber / 2); //{4}
    }
    while (!remStack.isEmpty()) { //{5}
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

console.log(divideBy2(233)); //输出11101001 
console.log(divideBy2(10)); //输出1010 
console.log(divideBy2(1000)); //输出1111101000

/**
 * 把十进制转换成任何进制
 */
function baseConverter(decNumber,base){
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';

        while(decNumber>0){
            rem = Math.floor(decNumber%base);
            remStack.push(rem);
            decNumber = Math.floor(decNumber/base);
        }

        while(!remStack.isEmpty()){
            baseString += digits[remStack.pop()];
        }
        return baseString;
}

console.log(baseConverter(100345, 2)); //输出11000011111111001 
console.log(baseConverter(100345, 8)); //输出303771 
console.log(baseConverter(100345, 16)); //输出187F9