
var server = require('http');

server.createServer(function(req, res){

    res.write('Hello World!');
    res.end();
}).listen(8080, function(data){
    console.log("server is connected")
});
