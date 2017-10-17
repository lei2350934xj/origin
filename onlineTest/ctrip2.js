var str = read_line();

function unique(data){
    var a = {};
    for(var i=0;i<data.length;i++){
        var v = data[i];
        if(typeof(a[v])=='undefined'){
            a[v]=1;
        }
    }
    data.length=0; 
    for(var i in a){
        data[data.length]=i;
    }
    // data.join(',');
    return data;
}

var result = unique(str.split(','));

print(result);
