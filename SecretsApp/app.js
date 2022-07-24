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

const dbName = "userDB"
mongoose.connect("mongodb://localhost:27017/" + dbName, {useNewUrlParser: true});

// ========================= //

// Get homepage
app.get("/", function(req, res){
  res.render("home");
});

// Get Login
app.get("/login", function(req, res){
  res.render("login");
});

// Get Register
app.get("/register", function(req, res){
  res.render("register");
});

app.post("/register", function(req, res){
  const newUser = new User({
    email: req.body.username,
    password: req.body.password
  });
  newUser.save(function(err){
    if (err) {
      console.log(err);
    } else {
      res.render("secrets");
    }
  });
});

// ========================= //

app.listen(3000, function(){
  console.log("Server started on port 3000!");
})
