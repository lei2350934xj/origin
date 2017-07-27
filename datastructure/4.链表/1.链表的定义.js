/**
 * 链表的定义
 */
function LinkedList() {
    var Node = function (element) { // {1}
        this.element = element;
        this.next = null;
    }
    var length = 0; // {2}
    var head = null; // {3}存储第一个节点的引用
    this.append = function (element) {};
    this.insert = function (position, element) {};
    this.removeAt = function (position) {};
    this.remove = function (element) {};
    this.indexOf = function (element) {};
    this.isEmpty = function () {};
    this.size = function () {};
    this.toString = function () {};
    this.print = function () {};
}
/**
 * LinkedList数据结构还需要一个Node辅助类(行{1})。Node类表示要加入列表的项。它 包含一个element属性，
 * 即要添加到列表的值，以及一个next属性，即指向列表中下一个节点 项的指针。
 */
/** 
 * append(element):向列表尾部添加一个新的项。
 * insert(position, element):向列表的特定位置插入一个新的项。
 * remove(element):从列表中移除一项。
 * indexOf(element):返回元素在列表中的索引。如果列表中没有该元素则返回-1。
 * removeAt(position):从列表的特定位置移除一项。
 * isEmpty():如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。  size():返回链表包含的元素个数。与数组的length属性类似。
 * toString():由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
 */

/**
 * 向LinkedList对象尾部添加一个元素时，可能有两种场景:列表为空，添加的是第一个元素，
 * 或者列表不为空，向其追加元素
 */
this.append = function (element) {
    var node = new Node(element), //{1}Node是节点 有数据和指针
        current; //{2}
    if (head === null) { //列表中第一个节点 //{3} 
        head = node;
    } else {
        current = head; //{4}
        //循环列表，直到找到最后一项 
        while (current.next) {
            current = current.next;
        }
        //找到最后一项，将其next赋为node，建立链接
        current.next = node; //{5}
    }
    length++; //更新列表的长度 //{6} 
};