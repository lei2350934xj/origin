const http = require("http");
const express = require("express");

let app = express();
http.createServer(app);

app.listen(3000,()=>{
    console.log("listen on 3000");
});