var http = require('http');
var fs = require('fs');

http.createServer(function (request, response){
  fs.readFile('index.html', function readData(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
  });
}).listen(8000,"127.0.0.1");

console.log("Server running on port 8000");