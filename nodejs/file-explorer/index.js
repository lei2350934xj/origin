/**
 * 由于stdin API是全局process对象的一部分，可以直接使用。
 * 这里仅需要引入fs，文件模块即可
 */
var fs = require("fs");
// fs.readdir(__dirname,function(err,files){
//     console.log(files);
// });
// console.log("异步读文件：先执行我，再执行读文件内容");
fs.readdir(process.cwd(),function(err,files){
    console.log('');
    if(!files.length){
        return console.log("\033[31m No files to show!\033[39m\n");
    }
    console.log("Select which file or directory you want to see\n");
    function file(i){
        var filename = files[i];

        fs.stat(__dirname+"/"+filename,function(err,stat){
            if(stat.isDirectory()){
                console.log("   "+i+"   \033[36m"+filename+"/\033[39m");
            }else{
                console.log("   "+i+"   \033[90m"+filename+"\033[39m");
            }
            i++;
            if(i == files.length){
                console.log("");
                process.stdout.write("  \033[33mEnter your choice: \033[39m")
                process.stdin.resume();
                process.stdin.setEncoding("utf8");
            }else{
                file(i);
            }
        });
    }
    file(0);
    function read(){
        console.log("");
        stdout.write("  \033[33mEnter your choice: \033[39m");
        stdin.resume();
        stdin.setEncoding("utf8");
    }
    function option(data){
        if(!files[Number(data)]){
            stdout.write("  \033[31mEnter your choice: \033[39m");
        }else{
            stdin.pause();
            fs.readFile(__dirname+"/"+filename,"utf8",function(err,data){
                console.log("");
                console.log("\033[90m"+data.replace(/(.*)/g,"   $1")+"\033[39m");
            });
        }
    }
});
/**
 * process全局对象中包含了三个流对象，分别为stdin、stdout、stderr
 */