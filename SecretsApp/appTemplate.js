//jshint esversion:6

const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

const dbName = "<dbName>"
mongoose.connect("mongodb://localhost:27017/" + dbName, {useNewUrlParser: true});

// ========================= //

// Get homepage
app.get("/", function(req, res){
  res.render("home");
});


// ========================= //

app.listen(3000, function(){
  console.log("Server started on port 3000!");
})
