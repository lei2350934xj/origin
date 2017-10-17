var s = readline();
var t = readline();

var arr_s = s.split("");
var arr_t = t.split("");

var count = arr_t.length;
for (var i = 0; i < arr_s.length; i++) {
    for (var j = 0; j < arr_t.length; j++) {
        if ((arr_t[j] - arr_s[i]) > 0) {
            arr_s[i] = arr_t[j];
            arr_t.pop(arr_t[j]);
        }
    }
}

arr_s.join("");
print(arr_s);