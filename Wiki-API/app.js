// jshint esversion:6

// Constants
const bodyParser = require("body-parser");
const express = require("express")
const mongoose = require("mongoose");


// -- DATABASE -- //
// Mongoose connection
mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true});
// DB Schema setup
const articleSchema = new mongoose.Schema({title: String, content: String});
// DB Document setup
const Article = mongoose.model("Article", articleSchema);


// -- APP -- //
// create app and set use connections
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// -- APP -- // Controls
// --------- //



// --------- //

// listen to server startup
app.listen("3000", function(req, res){
  console.log("Server Started on Port 3000");
});
