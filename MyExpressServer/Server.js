//jshint esversion:6


// initializes express and sets to "app"
const express = require("express");
const app = express();

// Server response to request
app.get("/", function(req, res){
    res.send("hello world");
});

app.get("/contact", function(req, res){
    res.send("Call me up dude!");
});

app.get("/about", function(req, res){
    res.send("Im just a guy trying to code my way up.");
});

// Server listen alert on startup
app.listen(3000, function(){
  console.log("Server started on Port : 3000");
});
