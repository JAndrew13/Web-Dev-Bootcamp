//jshint esversion:6

// required packages
const express = require("express");
const bodyParser = require("body-parser");

// set app to express
const app = express();

//  create an array of list items
let items = ["Buy Food", "Cook Food", "Eat Food"];

// set EJS view engine
app.set("view engine", "ejs");

// connect body-parser, public folder
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// get/set todays date and connect to EJS template
app.get("/", function(req, res){

  //get todays date
  let today = new Date();

  //set options for text display
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  // set day variable to processed date string
  let day = today.toLocaleDateString("en-US", options);

  // use EJS to render the text on Clients browser
  res.render("list", {kindOfDay: day, newListItems: items});
});

// handle post requests to home route
app.post("/", function(req, res){
  let item = req.body.newItem; // sets value of entered text to new item.
  items.push(item);            // adds new item to list of Items
  res.redirect("/");           // redirects client to home with new data
})

// listen for server startup and display message when running
app.listen(3000, function() {
  console.log("server is up on port 3000.");
});
