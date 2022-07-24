//jshint esversion:6

const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express");

const app = express():

app.set("view engine", "ejs");
app.use(express.static("public"));
app.user(bodyParser.urlencoded({
  extended: true
}));

// ========================= //


// ========================= //

app.listen(3000, function(){
  console.log("Server started on port 3000!");
})
