/**
 * 二维数组
 */
var averageTemp = [];
averageTemp[0] = [23,26,31,29,36,22];
averageTemp[1] = [19,27,20,30,24,28];

// JavaScript只支持一维数组，并不支持矩阵。但是，我们可以像上面的代码一样，用数组套数 组，实现矩阵或任一多维数组。
// 或者
// day1
averageTemp[0] = [];
averageTemp[0][0] = 23;
averageTemp[0][1] = 26;
averageTemp[0][2] = 31;
averageTemp[0][3] = 29;
averageTemp[0][4] = 36;
averageTemp[0][5] = 22;
// day2
averageTemp[1] = [];
averageTemp[1][0] = 19;
averageTemp[1][1] = 27;
averageTemp[1][2] = 20;
averageTemp[1][3] = 30;
averageTemp[1][4] = 24;
averageTemp[1][5] = 28;

// 打印出书
function printMatrix(averageTemp){
    for(var i=0; i<averageTemp.length; i++){
        for(var j=0; j<averageTemp[i].length; j++){
            console.log(averageTemp[i][j]);
        }
    }
}