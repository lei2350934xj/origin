<?php
    $username = $_GET['username'];  // get方法提交的就用$_GET[]的方法 去取提交的信息
    $password = $_GET['password'];

// 1.普通形式 可以这样判断前端传过来的值
    if($password == 123) {
        echo 1;
    }else if($password == 456) {
        echo 2;
    }else {
        echo 3;
    }

// 2.json格式的前端数据 后台需要如下第一行这样处理一下
// 而json_encode()函数把PHP里面的数据转化为json格式
    $arr = array("username"=>$username,"password"=>$password);  // PHP里面的数组
    echo json_encode($arr);

// 3. 为了防止读缓存，浏览器端GET方式下可以添加一个变化的时间参数
//  服务器端解决可以 通过header();来禁用缓存
// header("Content-type:text/html;charset=utf-8");      // 告诉浏览器返回数据为xml格式
// header("Cache-Control:no-cache");        // 告诉浏览器不要读缓存
?>