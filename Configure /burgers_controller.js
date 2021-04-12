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