var express = require('express');
var app = express();
app.set('view engine','pug');
// app.set('view engine', 'form');
app.set('views', './views');

// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'root'
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/my_db');

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});
var Person = mongoose.model("Person", personSchema);

app.get('/person', function(req, res){
    res.render('person');
});

app.post('/person', function(req, res){
    var personInfo = req.body; //Get the parsed information
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
        res.render('show_message', {message: "Sorry, you provided worng info", type: "error"});
    }
    else{
        var newPerson = new Person({
            name: personInfo.name,
            age: personInfo.age,
            nationality: personInfo.nationality
        });
        newPerson.save(function(err, res){
            if(err)
                res.render('show_message', {message: "Database error", type: "error"});
            else
                res.render('show_message', {message: "New person added", type: "success", person: personInfo});
        });
    }
});

app.listen(3000);