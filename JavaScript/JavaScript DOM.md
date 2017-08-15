# JavaScript DOM目录
- 回顾JavaScript的组成:ECMAScript+DOM+BOM
- ECMAScript规范常用语法
- DOM文档对象模型,节点操作
- BOM浏览器对象模型，与浏览器交互的方法和接口

#### 1.DOM访问关系
- 父节点 parentNode
- 子节点 children 和 childNodes(会把换行也看成一个孩子节点，所以不用这个)
- ***注***常用parentNode和children
#### 2.DOM的节点操作
- 2.1创建节点
<pre>
    var li = document.createElement("li");  // 创建一个li标签
</pre>
- 2.2插入节点
<pre>
    1.A.appendChild(B); // 把B孩子加到A最后
    2.A.insertBefore(x,参照点);    //同上
</pre>
- 2.3移除节点
<pre>
    A.removeChild(B);   // 把A的孩子节点B移除
</pre>
- 2.4克隆节点
<pre>
    1.A.cloneNode(true);    // 复制所有,包括子元素
    2.A.cloneNode(false);   // 只复制当前A标签
</pre>
#### 3.设置节点属性
- 3.1获取节点属性
<pre>
    var demo = document.getElementById("demo");
    alert(demo.getAttribute("class"));
    alert(demo.getAttribute("id"));
</pre>
- 3.2设置节点属性
<pre>
    div.setAttribute("class","current");
</pre>
- 3.3删除节点属性
<pre>
    demo.removeAttribute("title");
</pre>