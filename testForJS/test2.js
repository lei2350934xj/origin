/**
 * call和apply
 * 作用:在特定的作用域中调用函数，实际上等于设置函数体内this对象的值
 * call([thisObj[,arg1[,arg2[],arg3[,..[,argN]]]]])
 * call方法可以用来代替另一个对象调用一个方法。call方法可以将一个函数的对象上下文从初始的上下文改变为由thisObj
 * 指定的新对象。如果没有提供thisObj参数，那么Global对象被作用thisObj。
 * apply与call的功能几乎一样，第一个参数意义都一样，只是第二个参数不同。apply传入的是一个参数数组
 */

/**
 * 绝对长度单位
 * 英寸（in）、厘米（cm）、毫米（mm）、点（pt）、派卡（pc）
 * 英寸：美国尺子上的单位
 * 厘米：全世界尺子上的单位
 * 毫米：1cm=10mm
 * 点：是一个标准的印刷度量单位，1英寸是72点
 * 派卡：1派卡相当于12点，6派卡等于1英寸
 */
/**
 * 相对长度单位
 * em、ex、px、rem
 * em：代表em-height，相对于父元素的大小
 * ex：代表x-height
 * px：代表像素
 * rem：代表相对于根元素的font-size的大小
 */

/**
 * css的优先级顺序是什么？
 * 选择器权重：important>id>class>tag
 * 判断：（1）成功选中了元素，先看选择器权重，important》id》class》tag，如果权重一样，谁的css样式写在后听谁的
 * （2）如果没有选中元素，由继承来的权重为0.谁描述离的近就听谁的（就近原则），如果都一样近就看选择器权重，谁的权重大就听谁的。如果权重
 * 也一样，则谁的css样式在后就听谁的
 * 除此之外，多重样式（Multiple Styles）：如果外部样式、内部样式和内联样式同时应用于同一个元素，就是使多重样式的情况
 * 行内样式>内敛样式>外链样式
 */

/**
 * 如何实现js的跨域？
 * （1）jsonp
 * 在js中，我们直接用XMLHttpRequest请求不同域上的数据时，是不可以的。但是，在页面上引入不同域名的js脚本文件却是可以的，jsonp正式利用这个
 * 特性来实现的。
 * 原理：创建一个script标签，并将要请求的脚步地址信息赋值给新建的script标签的src属性，从而实现跨域请求数据的目的
 * （2）document.domain
 * 浏览器都有一个同源策略，其限制之一就是第一种方法中我们说的不能通过ajax的方法去请求不同源中的文档。 
 * 它的第二个限制是浏览器中不同域的框架之间是不能进行js的交互操作的。
 * 只要基础域名相同，便可以通过修改document.domain为基础域名的方式来进行通信，但是需要注意的是协议和端口也必须相同。
 * 如，来自www.a.com想要获取document.a.com中的数据。
 * （3）window.name
 * （4）window.postMessage
 * postMessage是HTML5新增在window对象上的方法，目的是为了解决在父子页面上通信的问题。
 * postMessage方法接受两个参数： 
message: 要传递的对象，只支持字符串信息，因此如果需要发送对象，可以使用JSON.stringify和JSON.parse做处理 
targetOrigin: 目标域，需要注意的是协议，端口和主机名必须与要发送的消息的窗口一致。如果不想限定域，
可以使用通配符“*”,但是从安全上考虑，不推荐这样做。
 */

/**
 * 请编写一个Java Script函数 parseQueryString，它的用途是把URL参数解析为一个对象，如： 
 * var url = “http://witmax.cn/index.php?key0=0&key1=1&key2=2”
 */
function parseQueryString(url){
    var pathname = url.split("?")[0];
    var str = url.split("?")[1];
    console.log("pathname:"+pathname);
    console.log("参数:"+str);
    var obj = {};
    var dom = str.split("&");
    console.log("dom:"+dom);
    for(var i=0; i<dom.length; i++){
        var temp = dom[i].split("=");
        obj[temp[0]] = temp[1];
    }
    return obj;
}
var url = "http://witmax.cn/index.php?key0=0&key1=1&key2=2";
console.log("对象:"+parseQueryString(url));

/**
 * 请简述web storage和cookie的区别
 * 1 、与服务器交互 
Web Storage 中的数据仅在存在本地，不与服务器发生交互。 
Cookie 中的数据会在浏览器和服务器中来回传递。 
2 、存储空间 
Web Storage 存储空间更大，可以达到 5M ；Cookie 数据大小不超过 4KB 。 
3 、 接口 
Web Storage 提供 setItem ， getItem ， removeItem ， clear 等方法 
Cookie 需要自己封装 setCookie ， getCookie方法 
4 、跨域问题 
cookie 需要指定作用域，不可以跨域调用，但 Web Storage 可以跨域调用 
5、 存储时间 
cookie 中的数据在过期时间之前均有效， Web Storage 则不同， sessionStorage 中的 数据在当前浏
览器窗口关闭后自动删除， localStorage 持久存储数据，除非主动删除数据
注： 但 Cookie 是不可以或缺的： Cookie 的作用是与服务器进行交互，作为 HTTP 规范的一部分而存在 ，而 Web Storage 仅仅是为了在本地 “ 存储 ” 更大容量数据而生。
 */

 /**
  * 两个数组去重复
  */
var arr1 =[1, 2,  3, '0','2', '测试','重复',NaN, false];
var arr2 =[3,'1',NaN,'重复', false];
function removeDulMergeArr(arr1,arr2) {
  var arr = arr1.concat(arr2);
  arr.sort();
  console.log(arr);
  var temp = [];
  while(arr.length>0) {
    if(Object.is(arr[0],arr[1])){//ES6中严格判断两个变量是否相等，比===更严格
      arr.shift();
    }else{
      temp.push(arr.shift());
    }
  }
   console.log(temp);
}
removeDulMergeArr(arr1,arr2);