/**
 * 栈是一种遵从后进先出(LIFO)原则的有序集合。新添加的或待删除的元素都保存在栈的 末尾，称作栈顶，
 * 另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。
 */

/**
 * 栈的创建
 */
function Stack() {
    // 属性
    var items = []; // 数组保存栈中数据
    // 方法
    this.push = function(element){
        items.push(element);
    }
    this.pop = function(){
        return items.pop();
    }
    this.peek = function(){ // 返回栈顶元素
        return items[items.length-1];   
    }
    this.isEmpty = function(){
        return items.length == 0;
    }
    this.size = function(){
        return items.length;
    }
    this.clear = function(){
        items = [];
    }
    this.print = function(){
        console.log(items.toString());
    }
}

/**
 * 栈的使用
 */
var stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
