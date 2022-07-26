//jshint esversion:6
require("dotenv").config();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


//connect App to Database
mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

// Create user schema with encryption
const userSchema = new mongoose.Schema ({
  email: String,
  password: String
});


const User = new mongoose.model("User", userSchema);

// ========================= //

// Get homepage
app.get("/", function(req, res){
  res.render("home");
});

// Get Login Page
app.get("/login", function(req, res){
  res.render("login");
});

// Get Register Page
app.get("/register", function(req, res){
  res.render("register");
});

// Post @ Registration
app.post("/register", function(req, res){
  bcrypt.hash(req.body.password, saltRounds, function(err, hash){
    const newUser = new User({
      email: req.body.username,
      password: hash
    });
    newUser.save(function(err){
      if (err) {
        console.log(err);
      } else {
        res.render("secrets");
      }
    });
  });


});

// Post @ Login
app.post("/login", function(req, res){
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({email: username}, function(err, foundUser){
    if (err){
      console.log(err);
    } else {
      if (foundUser){
        bcrypt.compare(password, foundUser.password, function(err, result){
          if (result === true){
            res.render("secrets");
          }
        });
      }
    }
  });
});


// ========================= //

app.listen(3000, function(){
  console.log("Server started on port 3000!");
})
