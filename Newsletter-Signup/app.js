//jshint esversion: 6

// require modules
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

// create express app
const app = express();

// connect express to static files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

// connect express to html homepage
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// POST setup for form entry
app.post("/", function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  // Pack user data from form into JSON
  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      }
    }]
  };

  // Convert JSON data to string for use in API send
  const jsonData = JSON.stringify(data);

  // API Endpoint
  const url = process.env.MAILCHIMP_API_ENDPOINT;

  // API options
  const options = {
    method: "POST",
    auth: process.env.MAILCHIMP_API_KEY
  };

  // Create request to send to MailChimp API
  const request = https.request(url, options, function(response){
        // if no errors are detected
        if (response.statusCode === 200) {
          res.sendFile(__dirname + "/success.html")
        // otherwise if an error is detected
        } else {
          res.sendFile(__dirname + "/failure.html")
        }

      response.on("data", function(data) {
      console.log(JSON.parse(data));
    })
  })

// send request
request.write(jsonData);
request.end();
});

// if "try again" button is pressed, return to home
app.post("/failure", function(req, res){
  res.redirect("/");
});

// Log Server Status to console on startup
app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000.");
});
