## 赛码编程题考试须知

- 1.使用JavaScript(Google V8 Engine(6.2.340))语言请注意：作答时不要进行DOM相关操作。
1.读取size个字符：gets(size)
    将读取至多size个字符，当还未达到size个时如果遇到回车或结束符，提前结束。回车符可能会包含在返回值中。
2.输出信息：printsth(sth, ...)
    往控制台输出sth，当有多个参数时，空格分隔；最后不加回车。
3.输出一行：print(sth, ...)
    往控制台输出sth，当有多个参数时，空格分隔；最后加回车。
4.读取一个（长）整数：readInt()
    从控制台读取一个（长）整数。
5.读取一个浮点型：readDouble()
    从控制台读取一个浮点型。
6.读取一行输入：read_line()
    将读取至多1024个字符，当还未达到1024个时如果遇到回车或结束符，提前结束。回车符可能会包含在返回值中。

- 2.编程题评测结果说明
评测结果	           缩写	    含义
Queuing	              QI	   提交太多了， 您的提交正处于排队状态。
Compiling	          CP	   您提交的代码正在被编译。
Running	              RN	   您的程序正在运行。
Judging	              JG	   我们 正在检查您程序的输出是否正确。
Accepted	          AC	   您的程序是正确的。
Presentation Error	  PE	   您的程序输出有格式问题，请检查是否多了或者少了空格 （'?'）、制表符（'\t'）或者换行符（'\n'）
Wrong Answer	      WA	   您的程序输出结果错误。
Runtime Error	      RE	   您的程序在运行时发生错误。
Time Limit Exceeded	  TLE	   您的程序运行的时间已经超出了题目的时间限制。
Memory Limit Exceeded	MLE	   您的程序运行的内存已经超出了题目的内存限制。
Output Limit Exceeded	OLE	   您的程序还在运行，但是输出内容字符数已经超过正确答案的字符数，明显已经是错误的，不必再运行下去了。
Compilation Error	  CE	   您的程序语法出现问题，编译器无法编译。
System Error	      SE	   评判系统内部出现错误 ，我们会尽快处理。
Out Of Contest Time	  OCT	   考试已经结束，不再评测提交。

- 3.样例题目及程序
A + B
描述
    给予两个整数 a 和 b ，计算它们的和 a + b
输入
    输入包含多组测试数据，每一行包含两个整数 a 和 b
输出
    在一行中输出 a + b 的值
<pre>
var a, b;
var solveMeFirst = (a,b) => a+b;
while((a=readInt())!=null && (b=readInt())!=null){
    let c = solveMeFirst(a, b);
    print(c);
}
</pre>