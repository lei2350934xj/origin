# JavaScript css hack调整兼容性 目录
## css hack
>针对不同浏览器，书写不同的样式，最大化的兼容浏览器
- 1.选择器hack
<pre>
    (1)ie6以下的，以*html开头
        *html .box {background:red;}
    (2)ie7的，以*+html开头
        *+html .box {background:pink;}
</pre>
- 2.属性hack
<pre>
css前缀hack
    (1)ie6,以下划线开头
        _background-color: purple;
    (2)ie7,以加号开头
        +background-color: blue;
css后缀hack
    (1)ie6,7,8,9,10
        color:red\9;
    (2)ie8,9,10
        color:red\0;
    (3)ie9,10
        color:red\9\0;
    (4)ie7,8,9,10以及其他非ie
        color:red!important;
</pre>
## 条件注释语法
>判断IE浏览器的范围:gte, gt, lte, lt
- gte:高于或等于某个IE浏览器版本
- gt:高于某个IE浏览器版本
- lte:低于或等于...
- lt:低于...
>语法：````<!--[if gt ie 版本号]>要判断的内容<![endif]-->````

>例如：````<!--[if gt ie 5]><link rel="stylesheet" type="text/css" href="css/main.css"><![endif]-->````
