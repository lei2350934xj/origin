var n = readInt();

var Arr = read_line();

function fn(str){
    var arr = str.split('');
    var index;
    var min = arr[0];
    for(var i=1; i<n; i++){
        if(arr[i] < min){
            min = arr[i];
            index = i;
        }
    }
    for(var i=0; i<n; i++){
        if(arr[i] > min){
            var temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            return;
        }
    }
}

fn(Arr);
print(Arr);