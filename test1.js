var http=require('http');


http.createServer(function(req, res){
    res.write("Hiii Every One");
    res.end();
}).listen(8000);