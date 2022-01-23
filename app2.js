const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(port);
});

// how to serve html static file
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function(req, res){
    res.end("About");
});

// routing
const router = require('./index');
app.use('/', router);

// name list to store different name

let nameList = [];
// get data from form using post request
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.post('/addName',function(req, res){
    let name = req.body.name;
    nameList.push(name);
    console.log(nameList);
    res.redirect('/');

});

// send data to html page using render
app.set('views','./public');
app.set('view engine','ejs');

app.get('/names', function(req, res){
    res.render(__dirname + '/public/names.ejs', {data: {nameList}});
});

