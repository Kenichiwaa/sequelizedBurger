var express = require("express");
var router = express.Router();
// Import the model burger.js to use its database function.
var db = require("../models/");

// Create all our routes and set up logic within those routes required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll()
  .then(function(dbBurger) {
    console.log(dbBurger);
  var hbsObject = { burgers: dbBurger };
  return res.render("index", hbsObject);
  });
});

// POST route for saving a new burger
router.post("/burgers/create", function(req, res) {
  db.Burger.create(req.body)
  .then(function(dbPost) {
    res.redirect("/");
  });
});

// Send buger to devoured section on the right
router.put("/burgers/devour/:id", function(req, res) {
 db.Burger.update(
   {
   devoured: true
 },{
   where: {
     id: req.params.id
   }
 }
 ).then(function(dbPost) {
   console.log("Update burger devoured "+dbPost);
   res.redirect("/");
 });
});

// Put burger back
router.put("/burgers/putback/:id", function(req, res) {
 db.Burger.update(
   {
   devoured: false
 },{
   where: {
     id: req.params.id
   }
 }
 ).then(function(dbPost) {
   console.log("Update burger devoured "+ dbPost);
   res.redirect("/");
 });
});

// Delete route for deleting burgers
router.delete("/burgers/delete/:id", function(req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbPost) {
    console.log("Deleting burger: " + dbPost);
    res.redirect("/");
  });
});

module.exports = router;
