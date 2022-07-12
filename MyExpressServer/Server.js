//jshint esversion:6


// initializes express and sets to "app"
const express = require("express");
const app = express();

// Server response to request
app.get("/", function(req, res){
    res.send("hello world");
});

// Server listen alert on startup
app.listen(3000, function(){
  console.log("Server started on Port : 3000");
});
