var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});
var Person = mongoose.model("Person", personSchema);

app.post('/', function(req, res){
    console.log(req.body);
    res.send("recieved your request!");
});

app.listen(3000);