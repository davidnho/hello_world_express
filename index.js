var express = require('express');
var app = express();

app.get('/',function(req,res){
 res.send('Hello Noel David. Kumusta na?');
});

app.listen(3000);
