const express = require("express");
const router = express.Router();
const burger = require("../Models/burger");

// Create all our routes 
router.get("/", (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/", (req, res) => {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burgerName, 0
    ], () => {
      res.redirect("/");
    });
  });

  router.put("/:id", (req, res) => {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, () => {
      res.redirect("/");
    });
  });


// Export routes for server.js to use.
    module.exports = router;
