// gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
// gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
// gulp.dest(path[, options]) 处理完后文件生成路径,记住指明的是路径不是文件名
// gulp.watch(glob[,opts],tasks) glob与src()中的一致,opts不用,tasks为文件变化后要执行的任务,为一个数组

//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    sass = require('gulp-sass'),    // 插件sass
    livereload = require('gulp-livereload');    // 插件liverload，自动重载
 
//定义一个testLess任务（自定义任务名称）
gulp.task('sass', function () {
    gulp.src('sass/main.scss') //该任务针对的文件
        .pipe(sass()) //该任务调用的模块
        .pipe(gulp.dest('css/')) //将会在css/下生成main.css
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();      // 要在这里调用listen()方法
    gulp.watch('sass/main.scss', ['sass']);      // 监听目录下的文件，若文件发生变化，则调用sass任务。
});
 
//gulp.task('default',['sass']); //定义默认任务 ,依赖于[]里面的任务，即要执行default会先执行[]里面的任务
