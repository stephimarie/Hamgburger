const express = require("express");
const router = express.Router();
const burger = require("../Models/burger.js");
// fix link

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