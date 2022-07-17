//jshint esversion:6

// required packages
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// set app to express
const app = express();

//  create an array of list items
const items = [];
const workItems = [];

// set EJS view engine
app.set("view engine", "ejs");

// connect body-parser, public folder
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// get/set todays date and connect to EJS template
app.get("/", function(req, res){
  let day = date.getDate();

  // use EJS to render the text on Clients browser
  res.render("list", {listTitle: day, newListItems: items});
});

// handle post requests to home route
app.post("/", function(req, res){
  let item = req.body.newItem; // sets value of entered text to new item.

  if (req.body.list === "Work"){ // if list name is equal to "work"
    workItems.push(item);        // send new item to "work" list
    res.redirect("/work")        // redirect to "work" list
  } else {
    items.push(item);            // adds new item to list of Items
    res.redirect("/");           // redirects client to home with new data
  }
})


app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

// listen for server startup and display message when running
app.listen(3000, function() {
  console.log("server is up on port 3000.");
});
