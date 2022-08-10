// required packages
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");


// set app to express
const app = express();
// set EJS view engine
app.set("view engine", "ejs");

const mongoAtlasKey = process.env.MONGO_ATLAS_KEY;

// connect body-parser, public folder
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// connect to database server
mongoose.connect(mongoAtlasKey, {useNewUrlParser: true});

// create new items Schema
const itemsSchema = {name: String};
const Item = mongoose.model("Item", itemsSchema);

// create custom list schema
const listSchema = {name: String, items: [itemsSchema]};
const List = mongoose.model("list", listSchema);


// create default items for new To-do List
const item1 = new Item({name: "Welcome to your To-Do List!"});
const item2 = new Item({name: "Hit the + button to add new items."});
const item3 = new Item({name: "<---- Click this to remove an item."});
const defaultItems = [item1, item2, item3];




// connect to EJS template
app.get("/", function(req, res){

  Item.find({},function(err, foundItems){
    // if no items are found in db -> create defaut and redirect to home
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function(err){
        if (err){
          console.log(err);
        } else {
          console.log("Success!");
        }
      });
      res.redirect("/");
    } else {   // use EJS to render items on Clients browser
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    };
  })
});


// handle post requests to home route
app.post("/", function(req, res){
  const listName = req.body.list;
  const itemName = req.body.newItem;

  const item = new Item({name: itemName});

  if (listName === "Today"){
    item.save();
    res.redirect("/");
  } else {
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});



app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId, function(err){
      if (!err) {
        console.log("Successfully deleted checked item.");
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
      if (!err){
        res.redirect("/" + listName);
      }
    });
  }
});


app.get("/:customlistName", function(req, res){

  const customListName = _.capitalize(req.params.customlistName);

  List.findOne({name: customListName}, function(err, foundList){
    if (!err) {
      if(!foundList) { // create new list

        const list = new List({
          name: customListName,
          items: defaultItems
        });

        list.save();
        res.redirect("/" + customListName);

      }else{ // show existing list
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
      };
    }
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started succesfully");
});

// redirect to about page
app.get(port, function(req, res){
  res.render("about");
});
