# JavaScript 常见ie6bug 目录
## 注意是IE6
#### 1.双倍外边距问题
<pre>
    描述：如果一个盒子,加了浮动又加了margin值,很容易出现双倍外边距问题
    解决：给盒子加上display:inline;从而出发ie内部机制
</pre>
#### 2.ie6图片底边会有像素间隙问题
<pre>
    描述：一个图片插到一个盒子里面，图片和盒子完全一样大，但是图片总是底下有像素的间距
    解决：
        方法1.将img标签与/div标签放在同一行.如<div><img src=""></div>,但是这样写不太方便阅读，推荐第二种方式
        方法2.在css样式中给img上设置display:block;属性，将图片设置为块级元素.如img{display:block; }
        方法3.img{vartical-align:top;}
        综上所述，推荐第三种。！！！
</pre>
#### 3.ie6不认识小于19px的盒子
<pre>
    如：
    给一个
    div{
        height: 3px;
        background-color: red;
    }
    将不能显示3px的高度，
    解决：加一句overflow:hidden;
</pre>
#### 4.ie6会出现多余字符的问题
<pre>
    解决：
        1）看这一行前面有没有注释，有注释先把注释删除
        2）在字后面添加一个 空格，多几个字 加一个空格
</pre>
#### 5.ie6图文混合 有3px的距离
<pre>
    描述：当文字围绕图片的时候，图片左侧和文字之间有3px的间距，仅仅在ie6下存在。图片下方和文字的间距是正常的，由文字行高产生。
    解决：给图片img {
        margin-right: -3px;
    }
</pre>
#### 6.li里面如果有多个盒子浮动会引起的问题（3px底侧空隙）
<pre>
    描述：就是因为里面盒子太复杂，所以ie6会有空隙
    <li class="li1">
        <span>111</span>
        <span>222</span>
        <span>333</span>
    </li>
    <li class="li2">
        <span>111</span>
        <span>222</span>
        <span>333</span>
    </li> 
    span浮动了，li1和li2之间会有3px的间隙
    解决：给li加上 vertical-align: top;或middle都可以   
</pre>