# JavaScript基本知识点目录
#### 1.控制样式
>var box = document.getElementById("box");
>box.style.width = "200px";
#### 2.变量作用域
>局部变量和全局变量，其中全局变量注意不用var 声明的变量也属于全局变量
#### 3.事件三要素
>btn.onclick = function(){
    //事件处理程序
}
#### 4.display属性
>display:none;隐藏不占位置
visible:none;隐藏占位置
#### 5.函数的声明
- 1.function calc(){}
- 2.var calc = function(){}
- 3.利用Function来构造
#### 6.变量提升
<pre>function calc(){
    console.log(num);
    var num = 2;
}
会将var num = 2;这一句中var num;提升到函数内部最顶上，即声明头的提升。
</pre>
#### 7.关于value和innerHTML
- value是针对于表单类型的，如input输入框里面设置value=5;
- innerHTML是标签元素里面的内容,如<span>XXXX</span>,设置span.innerHTML = "恭喜!输入正确";
#### 8.文字的隐藏和显示
<pre>先获取文字
var input_txt = document.getElementById("input_txt");
input_txt.onfocus = function(){
    input_txt.value = "";   // 输入框获得焦点，隐藏掉提示信息
}
input_txt.onblur = function(){
    if(input_txt == ""){
        input_txt = "我是提示信息";   // 输入框没有内容改变，则提示信息恢复显示
    }
}
</pre>
#### 9.表单自动获得焦点函数
> txt.focus();
onfocus是事件，focus()是函数
#### 10.鼠标经过选择表单
>txt.select(); 
#### 11.getElementsByTagName()
>这里主要注意tag出来是一个数组，所以要用[0],[1],[2]...等等来遍历。
#### 12.表单元素之checked
<pre>
    for(var i=0; i小于inputs.length; i++){
        inputs[i].checked = true;
    }
    其中，checked是表单元素的checked属性，表示被选中
</pre>
#### 13.三个循环
- 1.for()
- 2.while(){}
- 3.do{}while()
#### 14.switch()语句
>注意，要有break;
#### 15.下拉菜单
- onchange事件
<pre>
    <select>
        <option value="1">春意绵绵</option>
        <option value="2">夏日炎炎</option>
        <option value="3">秋风瑟瑟</option>
        <option value="4">冬雪皑皑</option>
    </select>
</pre>
- selc.onchange = function(){}
#### 16.数组常用操作
- 1.尾部追加push()
- 2.头部添加unshift()
- 3.尾部删除pop()
- 4.头部删除shift()
- 5.连接两个数组concat(),返回被连接的一个数组副本，不改变原数组
- 6.数组转化为字符串join()
<pre>
    var arr = ["aaa","bbb","ccc"];
    console.log(arr.join("-")); // aa-bb-cc
    console.log(arr);   // 还是原数组，本身没变
</pre>
- 7.把字符串转化为数组split()
<pre>
    var str = "aa-bb-cc";
    console.log(str.spilt("-"));    // 输出["aa","bb","c"],注意split的参数要和str的分隔符一致
</pre>
#### 17.字符串常用操作
- 1.返回前面起第一个字符的位置indexOf("字符")
<pre>
    var txt = "abcdef";
    alert(txt.indexOf("c"));    // 输出2
    // 如果找不到则返回-1
</pre>
- 2.返回后面起第一个字符的位置lastIndexOf("字符")
<pre>
    var txt = "abcdef";
    var txt1 = "abcdefce";
    alert(txt.lastIndexOf("c"));    // 输出2
    alert(txt1.lastIndexOf("c"));   // 输出6
    // 虽然是从后面开始数，但是下表标还是从前开始算起
</pre>
- 3.连接字符串concat()
- 4.截取字符串
- slice("起始位置",[结束位置]);
<pre>
    var txt = "my name is tom";
    console.log(txt.slice(1));  // y name is tom
    console.log(txt.slice(1,5));    // y na 到5就截止了，取不到
    console.log(txt.slice(-2)); // 倒着数
</pre>
- substr("起始位置",[取的个数]);
<pre>
    console.log(txt.substr(3)); // name is tom
    console.log(txt.substr(3,6));   // name i
</pre>
#### 18.height:auto和height:100%区别
<pre>
    auto和100%的参照对象不同
    auto: 根据盒子自身内容来定义大小
    100%: 根据父亲的高度来定义大小
例子：
    <style>
        .father {
            width: 200px;
            height: 200px;
            border: 1px solid #ccc;
        }
        .son {
            height: auto;   // 粉色为字的高度
            height: 100%;   // 粉色为父盒子的高度
            background-color: pink;
        }
    </style>
    <div class="father">
        <div class="son">你好</div>
    </div>
</pre>

#### 19.href="#"与href="javascript:void(0)"的区别
- 1."＃"包含了一个位置信息
默认的锚点是＃top 也就是网页的上端
- 2.href="javascript:;"就是去掉a标签的默认行为，跟href="javascript:void(0);"是一样的 表示什么都不做 只执行一段javascript代码
- **总结：** 要是调用javascript脚步就用href="javascript:void(0);"  否则,用href="#"

#### 20.封装自己的getElementsByClassName() 函数
<pre>
    function getClass(classname){
        // 支持getElementsByClassName() 方法的
        if(document.getElementsByClassName){
            return document.getElementsByClassName(classname);
        }
        var arr = [];   // 用于存放 返回的数组
        var dom = document.getElementsByTagName("*");
        for(var i=0,len=dom.length; i<len; i++){
            var txtarr = dom[i].className.split(" ");   // 把每个标签的class以空格分隔开
            for(var j=0; j<txtarr.length; j++){ // 遍历一个标签的 所有class名称
                if(txtarr[j]==classname){
                    arr.push(dom[i]);
                }
            }
        }
        return arr; // 返回指定classname的 标签
    }
</pre>

#### 21.封装自己的$()函数
<pre>
    function $(str){
        var firstElement = str.charAt(0);   // 获取第一个位置的字符
        var content = str.substr(1); // 如果第一个位置是#或者. content里面就是id或者class的名字
        if(firstElement == "#"){
            // id
            return document.getElementById(content);
        }else if(firstElement == "."){
            // class
            return getClass(content);  // 自己写的
        }else{
            return document.getElementsByTagName(str);
        }
    }
</pre>