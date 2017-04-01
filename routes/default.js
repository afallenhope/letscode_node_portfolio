const express = require("express") // import express
const router  = express.Router();

router.get("/", (req,res,next) => {
  res.send("Hello World! ");
  res.end();
});


module.exports = router;