// ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。

let num = 1;
console.log(num);

// 数组结构
let [a,b,c]=[1,2,3];    // 赋值模式
console.log(a);
console.log(b);
console.log(c);

let [x,y=false]=["xiaomi"];   // 默认值  === var foo=false;
console.log(x+y);

let [m,n="little"] = ["ten",undefined]; // 输出tenlitte, undefined代表没有值 
// let [m,n="little"] = ["ten",null];  // 输出tennull, null代表有值 值为null

// 对象解构
let {foo,bar} = {foo:"xiaomi",bar:"小米"};
let {xxx,yyy} = {yyy:123,xxx:321};
console.log(foo+bar);
console.log(xxx+" "+yyy);
/**
 * 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
 * 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
 */

let ppt;
({ppt} = {ppt:"幻灯片"});
console.log(ppt);

// 字符串解构
const [i,j] = 'wo';
console.log(i);
console.log(j);