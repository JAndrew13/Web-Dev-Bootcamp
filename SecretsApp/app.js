//jshint esversion:6
require("dotenv").config();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");


// Require packacges related to passport, oauth, and authenticaton
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

// Tell app how to use passport with config
app.use(session({
  secret: "mySecretString",
  resave: false,
  saveUninitialized: false
}));

// initialize passport
app.use(passport.initialize());
// setup a new session using passport
app.use(passport.session());

// Connect App to LOCAL Database
mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

// Create user schema with encryption
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleID: String,
  secret: String
});

// add passport plugin to our mongoose Schema
// this plugin handles hashing and salting
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

// create cookie for user
passport.serializeUser(function(user, done){
  done(null, user.id);
});
// destroy cookie on logout
passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err, user);
  });
});


// Google OAuth
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      User.findOrCreate( {googleId: profile.id }, (err, user) => {
            return cb(err, user);
      });
  }));
// ========================= //

// Get homepage
app.get("/", function(req, res) {
  res.render("home");
});

// Get Login Page
app.get("/login", function(req, res) {
  res.render("login");
});

// Get Register Page
app.get("/register", function(req, res) {
  res.render("register");
});

// Get Secrets Page
app.get("/secrets", function(req, res) {
  User.find({"secret":{$ne:null}}, function(err, foundUsers){
    if (err) {
      console.log(err);
    } else {
      res.render("secrets", {usersWithSecrets: foundUsers});
      }
    });
});

// Get Submit Secrets
app.get("/submit", function(req, res){
  if (req.isAuthenticated()) {
    res.render("submit");
  } else {
    res.redirect("/login");
  }
});

// Post new secrets
app.post("/submit", function(req, res){
  const submittedSecret = req.body.secret;
  User.findById(req.user.id,  function(err, foundUser){
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.secret = submittedSecret;
        foundUser.save(function(){
          res.redirect("/secrets");
        });
      }
    }
  });
});

// Get Logout
app.get("/logout", function(req,res){
       req.logout((err)=>{
           if(err){
               console.log(err);
           }else{
               res.redirect("/");
           }
       });
   });

// Post @ Registration
app.post("/register", function(req, res) {

  User.register({username: req.body.username}, req.body.password, function(err, user){
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function(){
          res.redirect("/secrets");
        });
      }
    });
});

// Post @ Login
app.post("/login", function(req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  req.login(user, function(err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect("/secrets");
      });
    }
  })
});

// get Google Auth
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
// Get Google Auth redirect
app.get("/auth/google/secrets", passport.authenticate('google', {
  failureRedirect:("/login")}),
  function(req, res){
    res.redirect("/secrets");
  });

// ========================= //

app.listen(3000, function() {
  console.log("Server started on port 3000!");
})
