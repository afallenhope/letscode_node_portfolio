const express = require("express") // import our Express module
const app = express() // instantiate an Expres app.
const path = require("path")
const mainRouter = require("./routes/default") // import our default routes .
const port = process.env.PORT || 9999

app
  .set("views", "./views")  // sets the view folder to ./views
  .set("view engine", "ejs")  // use our EJS templating engine

  .use("/css", express.static(path.join(__dirname,"./assets/css"))) // look in our assets/css when search for /css
  .use("/js", express.static(path.join(__dirname,"./assets/js"))) // look in our assets/js when search for /js
  .use("/fonts",express.static(path.join(__dirname,"./assets/fonts"))) // look in our assets/fonts when we request /fonts
  .use("/images",express.static(path.join(__dirname,"./assets/images"))) // look in our assets/fonts when we request /fonts
  
  .use("/css",express.static(path.join(__dirname,"./node_modules/bootstrap/dist/css"))) // look in our assets/fonts when we request /fonts
  .use("/js",express.static(path.join(__dirname,"./node_modules/bootstrap/dist/js"))) // look in our assets/fonts when we request /fonts
  .use("/fonts",express.static(path.join(__dirname,"./node_modules/bootstrap/dist/fonts"))) // look in our assets/fonts when we request /fonts
  
  .use("/css",express.static(path.join(__dirname,"./node_modules/font-awesome/css"))) // look in our assets/fonts when we request /fonts
  .use("/fonts",express.static(path.join(__dirname,"./node_modules/font-awesome/fonts"))) // look in our assets/fonts when we request /fonts
   
  .use("/", mainRouter) // creates a path router to module ./routes/default.js  
  
  
  // listen on port 9999 
  .listen(port, (req,res) => {
    console.log("Listening http://127.0.0.1:" + port)
  })