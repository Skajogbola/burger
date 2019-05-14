var express = require("express");
var router = express.Router();

// Import the model
var burger = require("../models/burger.js");

// Create all our routes and set up the logic.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"], [
    req.body.burger_name], function(result) {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;