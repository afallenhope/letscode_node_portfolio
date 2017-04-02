const express = require("express") // import our Express module
const app = express() // instantiate an Express app
const path = require("path") // import NodeJS's path functionality
const mainRouter = require("./routes/default") // import the default routes
const bodyParser = require("body-parser")
const port = process.env.PORT || 9999

app
  .set("views", "./views")  // sets the view folder to ./views
  .set("view engine", "ejs")  // use the EJS templating engine

  .use(bodyParser.json({type: "application/json"})) // allow json post
  .use(bodyParser.urlencoded({extended : false})) // user urlformencoded

  .use("/css", express.static(path.join(__dirname,"./assets/css"))) // look in our assets/css when request for /css
  .use("/js", express.static(path.join(__dirname,"./assets/js"))) // look in our assets/js when request for /js
  .use("/fonts",express.static(path.join(__dirname,"./assets/fonts"))) // look in our assets/fonts when we request /fonts
  .use("/images",express.static(path.join(__dirname,"./assets/images"))) // look in our assets/images when we request /images

  .use("/css",express.static(path.join(__dirname,"./node_modules/bootstrap/dist/css"))) // look in ./node_modules/bootstrap/dist/css when we request /css
  .use("/js",express.static(path.join(__dirname,"./node_modules/bootstrap/dist/js"))) // look in ./node_modules/bootstrap/dist/js when we request /js
  .use("/fonts",express.static(path.join(__dirname,"./node_modules/bootstrap/dist/fonts"))) // look in ./node_modules/bootstrap/dist/fonts when we request /fonts

  .use("/css",express.static(path.join(__dirname,"./node_modules/font-awesome/css"))) // look in ./node_modules/font-awesome/css when we request /css
  .use("/fonts",express.static(path.join(__dirname,"./node_modules/font-awesome/fonts"))) // look in ./node_modules/font-awesome/fonts when we request /fonts

  .use("/", mainRouter) // creates a path to the router module at ./routes/default.js


  // listen on port 9999
  .listen(port, (req, res) =>
    console.log("Listening http://127.0.0.1:" + port))