// 定义一个模块,遵循seajs的写法
define(function(require,exports,module){
      // 此处是模块的私有空间
      // 定义模块的私有成员
      function add(a, b) {
        return parseFloat(a) + parseFloat(b);
      }

      function subtract(a, b) {
        return parseFloat(a) - parseFloat(b);
      }

      function multiply(a, b) {
        return parseFloat(a) * parseFloat(b);
      }

      function divide(a, b) {
        return parseFloat(a) / parseFloat(b);
      }
    
      // 暴露模块的公共成员
      exports.add = add;
      exports.subtract = subtract;
      exports.multiply = multiply;
      exports.divide = divide;    
});