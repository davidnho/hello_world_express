var express = require('express');
var app = express();

app.get('/',function(req,res){
 res.send('Hello Noel David. ');
});

app.listen(3000);
