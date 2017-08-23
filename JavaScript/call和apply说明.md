< pre >
function cat() {}
cat.prototype = {
    food: "fish",
    say: function () {
        alert("I love " + this.food);
    }
}
var blackCat = new cat;
blackCat.say();
</pre>
> 但是如果我们有一个对象whiteDog = {food:"bone"},我们不想对它重新定义say方法,那么我们可以通过call或apply用blackCat的say方法：blackCat.say.call(whiteDog);

- 1.call方法: 
语法：call([thisObj[,arg1[, arg2[,   [,.argN]]]]]) 
定义：调用一个对象的一个方法，以另一个对象替换当前对象。 
说明： 
call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。 
如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。 

- 2.apply方法： 
语法：apply([thisObj[,argArray]]) 
定义：应用某一对象的一个方法，用另一个对象替换当前对象。 
说明： 
如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。 
如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数。