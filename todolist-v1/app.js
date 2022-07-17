//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(res, req){

  var today = new Data();
  var currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0) {
    res.sendFile(__dirname + "weekend.html");
  } else {
    res.sendFile(__dirname + "weekday.html")
  }
});

app.listen(3000, function(){
  console.log("server is up on port 3000.");
});
