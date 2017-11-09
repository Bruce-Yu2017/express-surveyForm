var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("index")
})

app.post("/survey", function(req, res) {
    req.session.data = req.body;
    res.redirect("/result")
})

app.get("/result", function(req, res) {
    res.render("result", {data: req.session.data})
})

app.listen(8000, function() {
    console.log("render success!")
})
