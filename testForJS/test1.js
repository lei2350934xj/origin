function Parent(){

}
Parent.prototype.name = "lll";
Parent.prototype.age = 50;
Parent.prototype.say = function(){
    console.log("Parent say");
};
function Child(){

}
Child.prototype = new Parent();
var child = new Child();
console.log(child.name);
console.log(child.age);
child.say();