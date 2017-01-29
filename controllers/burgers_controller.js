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
// router.post("/burgers/create", function(req, res) {
//   db.Post.create(req.body).then(function(dbPost) {
//     res.json(dbPost);
//   });
// });
//
// router.put("/burgers/update/:id", function(req, res) {
//
// });
//
// // Delete route for deleting burgers
// router.delete("/burgers/delete/:id", function(req, res) {
//   db.Post.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(dbPost) {
//     res.json(dbPost);
//   });
// });

module.exports = router;
