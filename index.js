var express = require('express');
var app = express();
app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));

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

// //MIDDLEWARES
// //Simple request time logger
// app.use(function(req, res, next){
// 	console.log("A new request received at " + Date.now());
// 	//This function call is very important. It tells that more processing is 
// 	//required for the current request and is in the next middleware function/route handler.
// 	next();
// });

// //Middleware function to log request protocol
// app.use(function(req, res, next){
// 	console.log("A request for things received at " + Date.now());
// 	next();
// });

// //Route handler that sends the response
// app.get('/things', function(req, res){
// 	res.send('Things');	
// });

// //First middleware before response is sent
// app.use(function(req, res, next){
// 	console.log("Start");
// 	next();
// });
// //Route handler
// app.get('/', function(req, res, next){
// 	res.send("Middle");
// 	next();
// });

// app.use('/', function(req, res){
// 	console.log('End');
// });

//pug - basic
app.get('/first_template',function(req, res){
	res.render('first_view');
});

//pug - dynamic view
app.get('/dynamic_view',function(req, res){
	res.render('dynamic',
	{
		name : "Tutorialspoint",
		user : {name : "Gail",age: 40},
		url : "http://www.tutorialspoint.com"
	}
	);
});

//components - headers , footers
app.get('/components', function(req, res){
    res.render('content');
});

app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});

app.listen(3000,function(){
    console.log('Server running at http://localhost:3000');
});
