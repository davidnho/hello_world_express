var express = require('express');

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); 

var app = express();
app.set('view engine','pug');
app.set('views', './views');

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
    var personInfo = req.bodyParser; //Get the parsed information
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