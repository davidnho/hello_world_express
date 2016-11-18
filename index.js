var express = require('express');
var app = express();

//app.get('/',function(req,res){
// res.send('Hello Noel David. ');
//});
//
//app.get('/kumusta',function(req,res){
// res.send('Hello Noel David. ');
//});

var things = require('./things.js'); 
//both index.js and things.js should be in same directory
app.use('/things', things); 

app.listen(3000,function(){
    console.log('Server running at http://localhost:3000');
});
