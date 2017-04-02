const express = require("express") // import express
const router = express.Router() // create a router, can also be called by doing require("express").Router();

router
  // when user requests root /
  .get("/", (req, res) => res.render("index")) // render the ./view/index page.

  // when user requests /about
  .get("/about", (req, res) => res.render("about")) // render the ./views/about page.

  // when user requests /contact
  .get("/contact", (req, res) => res.render("contact")) // render the ./views/contact page

  // when we receive a post from our contact form.
  .post("/contact", (req, res) => {
    const post = req // get the information that's posted to express
    console.log(post) // log it to the console

    res.render("thank-you") // render the ./views/thank-you page.
  })


module.exports = router