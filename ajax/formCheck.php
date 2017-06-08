<?php
    $username = $_GET['username'];  // get方法提交的就用$_GET[]的方法 去取提交的信息
    $password = $_GET['password'];

    if($password == 123) {
        echo 1;
    }else if($password == 456) {
        echo 2;
    }else {
        echo 3;
    }
?>