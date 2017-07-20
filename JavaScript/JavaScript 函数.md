# JavaScript 函数

- 1. arguments、caller、callee介绍
> arguments:在函数调用时， 会自动在该函数内部生成一个名为 arguments的隐藏对象。 该对象类似于数组， 但又不是数组。可以使用[]操作符**获取函数调用时传递的实参**。

> caller:在一个函数调用另一个函数时，**被调用函数**会自动生成一个caller属性，**指向调用它的函数对象**。如果该函数当前未被调用，或并非被其他函数调用，则caller为null。

> callee:**当函数被调用时，它的arguments.callee对象就会指向自身**，也就是一个对自己的引用。
由于arguments在函数被调用时才有效，因此arguments.callee在函数未调用时是不存在的（即null.callee），且解引用它会产生异常。

> **总结** caller指向调用者 callee指向被调用的函数 arguments代表函数调用过程中传递的实际参数