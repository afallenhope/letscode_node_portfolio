const express = require("express") // import express
const router  = express.Router() // create a router can also be called by doing required("express").Router();

// when user requests root /
router.get("/", (req,res,next) => {
 res.render("index")  // render our ./view/index page.
})

// when user requests /about
router.get("/about", (req,res,next)=>{
  res.render("about") // render our ./views/about page.
})

module.exports = router