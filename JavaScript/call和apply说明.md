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