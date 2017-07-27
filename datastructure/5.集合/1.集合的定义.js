/**
 * 集合是由一组无序且唯一(即不能重复)的项组成的。这个数据结构使用了与有限集合相同 
 * 的数学概念，但应用在计算机科学的数据结构中。
 * 我们可以把集合想象成一个既没有重复元素，也没有顺序概念的数组
 */


// 以下是我们的Set类的骨架:
function Set() {
    var items = {};
}

// 接下来，需要声明一些集合可用的方法(我们会尝试模拟与ECMAScript 6实现相同的Set类)。
// add(value):向集合添加一个新的项。
// remove(value):从集合移除一个值。
// has(value):如果值在集合中，返回true，否则返回false。
// clear():移除集合中的所有项。
// size():返回集合所包含元素的数量。与数组的length属性类似。 
// values():返回一个包含集合中所有值的数组。
this.has = function(value){
    return items.hasOwnProperty(value);
};
/**
 * 所有JavaScript对象都有hasOwnProperty方法。这个方法返回一个表明对象是否具有特定
 * 属性的布尔值。
 */