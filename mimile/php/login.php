<?php
    $username = $_POST["username"];     // 表单提交这里用post方式
    $password = $_POST["password"];

    if($username=="liangting" && $password==12345) {
        echo 1;     // success
    }else {
        echo 2;     // failure
    }
?>