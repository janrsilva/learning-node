var http = require('http');
console.log('hi');
http.createServer(function(req, res){
    console.log('oi');
    res.end("<html><body><h1>Hello World with Node.js</h1></body></html>");
}).listen(80);