var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req,res) {
  res.redirect("/index");
});

//Index page
router.get("/index", function(req, res) {
  //pass burger data into the function
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//create a burger
router.post("/burgers/insertOne", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function() {
    // Send back the ID of the new quote
    res.redirect("/index");
  });
});

//devour burger with updateOne 
router.post("/burgers/updateOne/:id", function(req, res) {
  burger.updateOne(
    req.params.id,
    function() {
     res.redirect("/index");
    });
});

// Export routes for server.js to use.
module.exports = router;