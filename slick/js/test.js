(function(){
        var a = 5;
        var b = 10;
        var jiekou = {};

        function changeA(num){
            a = num;
        }
        function changeB(num){
            b = num;
        }
        jiekou.changeA = changeA;
        jiekou.changeB = changeB;

        window.jiekou = jiekou;
    })()
    jiekou.changeA(6);  // 外部通过闭包内部暴露的jiekou来改变内部的值a
    jiekou.changeB(8);  //