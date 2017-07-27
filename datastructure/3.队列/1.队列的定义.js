/**
 * 队列是遵循FIFO(First In First Out，先进先出，也称为先来先服务)原则的一组有序的项。 
 * 队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。
 */
function Queue() {
    var items = [];
    this.enqueue = function (element) {
        items.push(element);    // 从队尾入队列
    }
    this.dequeue = function () {
        return items.shift();   // 从队头出队列
    }
    this.front = function () {
        return items[0];
    }
    this.isEmpty = function () {
        return items.length == 0;
    }
    this.clear = function () {
        items = [];
    }
    this.size = function () {
        return items.length;
    }
    this.print = function () {
        console.log(items.toString());
    }
}

/**
 * 队列的使用
 */
var queue = new Queue(); 
console.log(queue.isEmpty()); //输出true
queue.enqueue("John");
queue.enqueue("Jack");
queue.print(); 
console.log(queue.size()); //输出3 
console.log(queue.isEmpty()); //输出false 
queue.dequeue();
queue.dequeue();
queue.print();