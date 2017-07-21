#JavaScript 四大家族 目录
#### 1.offset家族
<pre>
    1.offsetWidth和offsetHeight
        得到对象自己的宽和高
    offsetWidth = width + padding + border;(不包含margin)
    2.offsetLeft和offsetTop
        返回距离上级定位了盒子的左边和上边
    3.offsetParent
        返回对象的父级(带有定位)
    4.offsetTop和style.top
        1)offsetTop返回的是数值,style.top返回的是带有px的字符串
        2)offsetTop只读,style.top可读写
    5.style.top style.width这些只能得到行内样式的值 (做过实际例子)
</pre>
#### 2.event家族
<pre>
    1.var event = window.event || event;
    鼠标跟随
    targetX = event.clientX - image.offsetWidth / 2;    // 向上走
    targetY = event.clientT - image.offsetHeight / 2;   // 向左走
    2.求盒子内的坐标
    var x = event.clientX - this.offsetLeft;
    var y = event.clientY - this.offsetTop;
    3.screenX,pageX,eventX的区别
    screenX就是以显示屏为基准,显示屏肯定比浏览器窗口大
    pageX 相当于浏览器中显示的一张网页 网页很长 会随着浏览器的滚动 上下移动
    eventX 就是你的可视区域 页面上下滚动的时候 你能看到的区域只有当前那么大一块
</pre>
#### 3.scroll家族
<pre>
    1.scrollTop和scrollLeft
    被卷去的头部
</pre>
#### 4.client家族
可视区域
<pre>
    1.clientWidth: width + padding
    2.offsetWidth: width + padding + border
    3.scrollwidth: 大小是内容的大小
</pre>