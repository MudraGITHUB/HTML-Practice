var express=require('express'),
app=express();


app.get('/', function(req, res){
    res.send("Welcome")
})


app.use('/login', require('./routes'))

app.listen(8090)
module.exports=app;
