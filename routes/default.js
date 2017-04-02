const express = require("express") // import express
const router  = express.Router() // create a router can also be called by doing required("express").Router();

// when user requests root /
router
  .get("/", (req,res,next) => {
    res.render("index")  // render our ./view/index page.
  })

  // when user requests /about
  .get("/about", (req,res,next)=>{
    res.render("about") // render our ./views/about page.
  })

  // when user requests /contact
  .get("/contact", (req,res,next) => {
    res.render("contact") // render our ./views/contact page
  })

  // when we receive a post from our contact form.
  .post("/contact", (req,res,next)=>{
    let post = req // get the information that's posted to express
    console.log(post) // log it to the console

    res.render("thank-you") //  render our ./views/thank-you page.
  })


module.exports = router