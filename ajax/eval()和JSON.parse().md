#### eval()
eval函数可将一个JavaScript代码字符串求值成特定的对象，所以解析成JSON对象只不过是作用之一。
<pre>
var data=" 
{ 
    root: 
    [ 
        {name:'1',value:'0'}, 
        {name:'6101',value:'北京市'}, 
        {name:'6102',value:'天津市'}, 
        {name:'6103',value:'上海市'}, 
        {name:'6104',value:'重庆市'}, 
        {name:'6105',value:'渭南市'}, 
        {name:'6106',value:'延安市'}, 
        {name:'6107',value:'汉中市'}, 
        {name:'6108',value:'榆林市'}, 
        {name:'6109',value:'安康市'}, 
        {name:'6110',value:'商洛市'} 
    ] 
}"; 
</pre>
对于服务器返回的JSON字符串，如果jquery异步请求没做类型说明，或者以字符串方式接受，那么需要做一次对象化处理，方式不是太麻烦，就是将该字符串放于eval()中执行一次。这种方式也适合以普通javascipt方式获取json对象，以下举例说明：
<pre>
    var dataObj=eval("("+data+")");//转换为json对象 
</pre>
为什么要 eval这里要添加 “("("+data+")");//”呢？ 
原因在于：eval本身的问题。 由于json是以”{}”的方式来开始以及结束的，在JS中，它会被当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。 
加上圆括号的目的是迫使eval函数在处理JavaScript代码的时候强制将括号内的表达式（expression）转化为对象，而不是作为语句（statement）来执行。举一个例子，例如对象字面量{}，如若不加外层的括号，那么eval会将大括号识别为JavaScript代码块的开始和结束标记，那么{}将会被认为是执行了一句空语句。所以下面两个执行结果是不同的： 
<pre>
    alert(eval("{}"); // return undefined 
    alert(eval("({})");// return object[Object] 
</pre>

#### JSON.parse()
只能解析属性名是引号(单引号或者双引号)包裹的字符串对象，并会忽略换行和空格
<pre>
    var A = "{  a: 1 , b : 'hello' }";
    var B = "{  'a': 1 , 'b' : 'hello' }";
    var C = "{'a':1,'b':'hello'}";
    var D = '{"a":1,"b":"hello"}';
    var E = '{ "a" : 1 , "b" : "hello" }';
    var F = '{ "a" : 1 ,\n  "b" : "hello" }';
    var G = '{ "a" : 1 , "b" : window.location.href="https://www.baidu.com" }';
</pre>
JSON.parse执行：A、B、C、G都不可转，D、E、F都可以。
eval执行：A到G都可以转，特别到G时，页面还跳转到百度了。