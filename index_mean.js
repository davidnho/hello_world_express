var express = require('express');
var app = express();

var cons = require('consolidate');

// view engine setup
app.engine('html', cons.swig)
app.set('views', 'views');
app.set('view engine', 'html');


app.get('/angular',function(req, res){
   res.render('index');
});

app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});

app.listen(3000,function(){
    console.log('Server running at http://localhost:3000');
});
