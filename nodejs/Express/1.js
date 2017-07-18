/**
 * 一.为什么要用Express框架
 * Nodejs由于不需要另外的HTTP服务器，因此减少了一层抽象，给性能带来了不少的提升，同时也因此提高了开发难度，
 * 实现一个POST数据的表单，例如:
 * <form>
 *  <input type="text" name="">
 * </form>
 *  PHP获取POST请求参数 $value = $_POST("name");
 *  而Nodejs虽然提供了http模块，却不是让你直接用这个模块进行开发的。http模块仅仅是一个HTTP服务器内核的封装。
 * 从而引出了NPM上常用且稳定的第三方模块-Express框架
 */