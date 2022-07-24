// jshint esversion:6

// Constants
const bodyParser = require("body-parser");
const express = require("express")
const ejs = require("ejs");
const mongoose = require("mongoose");

// -- APP -- //
// create app and set use connections
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// -- DATABASE -- //
// Mongoose connection
mongoose.connect("mongodb://localhost:27017/WikiDB", {useNewUrlParser: true});
// DB Schema setup
const articleSchema = new mongoose.Schema({title: String, content: String});
// DB Document setup
const Article = mongoose.model("Article", articleSchema);

// request targeting homepage
app.get("/", function(req, res){
  res.send("WikiDB!");
});

// -- APP -- // DB Control Router
app.route("/articles")

// ===================================== //
// Request targeting All Articles
// ===================================== //

  // Get all Articles
  .get(function(req, res){
    Article.find(function(err, foundArticle){
      if (!err){
        res.send(foundArticle);
      } else {
        console.log(err);
      }
    });
  })
  // Post New Articles
  .post(function(req, res){
      const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
      });
    newArticle.save(function(err){
      if (!err){
        res.send("Successfully added a new Article!")
      } else {
        res.send(err);
      }
    });
  })
  // Delete All articles
  .delete(function(req, res){
    articles.deleteMany(function(err){
      if (!err){
        res.send("Deleted all Articles!");
      }
    })
  });


  // ===================================== //
  // Request targeting SPECIFIC Articles
  // ===================================== //

  // Request Router
  app.route("/articles/:articleTitle")

  // Get Request
  .get(function(req, res){
    Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
      if (foundArticle){
        res.send(foundArticle);
      } else {
        res.send("No matching articles were found");
      }
    });
  })

  // Replace Request
  .put(function(req, res){

    Article.replaceOne(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      {overwrite: true},
      function(err){
        if(!err){
          res.send("Successfully updated the selected article.");
        }
      }
    );
  })

  // Update Request
  .patch(function(req, res){
    Article.updateOne(
      {title: req.params.articleTitle},
      {$set: req.body},
      function(err){
        if (!err){
          res.send("Successfully updated article!");
        } else {
          res.send(err);
        }
      }
    )
  })

  // Delete Request
  .delete(function(req, res){
    Article.deleteOne(
      {title: req.params.articleTitle},
      function(err){
        if (!err){
          res.send("Article Successfully Deleted!");
        } else {
          res.send(err);
        }
      }
    )
  });

// listen to server startup
app.listen("3000", function(req, res){
  console.log("Server Started on Port 3000");
});
