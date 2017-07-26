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
    
      // 方式1 暴露模块的公共成员
      exports.add = add;
      exports.subtract = subtract;
      exports.multiply = multiply;
      exports.divide = divide;    
      /**
       * 或者 把function(require,exports,module){ var obj = {// 属性和方法};} 
       * 内部写成对象的形式 用 module.exports = obj; 的形式
       */
      // 方式2
      var obj = {};
      obj.add = add;
      obj.subtract = subtract;
      obj.multiply = multiply;
      obj.divide = divide;
      module.exports = obj;
      // 方式3
      function Person(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
      }
      Person.prototype.sayHi = function(){
        console.log(this.name+"say hi");
      }
      module.exports = Person;
      /**
       * 使用 seajs.use("./calculator.js",function(Person){//});
       * var person = new Person("llt",23,"男");
       * person.sayHi();
       */
});