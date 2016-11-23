var express = require('express');
var app = express();

// app.get('/',function(req,res){
// res.send('Hello Noel David. ');
// });

// app.get('/kumusta',function(req,res){
// res.send('Hello Noel David. Kumusta na ka ');
// });

// var things = require('./things.js'); 
// //both index.js and things.js should be in same directory
// app.use('/things', things); 

// // url building
// app.get('/:id', function(req, res){
//     res.send('The id you specified is ' + req.params.id);
// });

// app.get('/things/:name/:id', function(req, res){
//     res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
// });

// app.get('/things/:id([0-9]{5})', function(req, res){
//     res.send('id: ' + req.params.id);
// });

// //Simple request time logger
// app.use(function(req, res, next){
// 	console.log("A new request received at " + Date.now());
// 	//This function call is very important. It tells that more processing is 
// 	//required for the current request and is in the next middleware function/route handler.
// 	next();
// });

//Middleware function to log request protocol
app.use('/things', function(req, res, next){
	console.log("A request for things received at " + Date.now());
	next();
});

//Route handler that sends the response
app.get('/things', function(req, res){
	res.send('Things');	
});

app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});

app.listen(3000,function(){
    console.log('Server running at http://localhost:3000');
});
