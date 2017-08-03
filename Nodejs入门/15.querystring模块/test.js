var querystring = require("querystring");

var str = 'foo=bar&abc=xyz&abc=123';

    var obj = querystring.parse(str);
    // { foo: 'bar', abc: [ 'xyz', '123' ] }
    console.log(obj.foo);