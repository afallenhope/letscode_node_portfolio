const express = require("express") // import express
const router  = express.Router() // create a router can also be called by doing required("express").Router();
 

router.get("/", (req,res,next) => {
  res.send("Hello World! ")
  res.end()
})


module.exports = router