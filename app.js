const express = require("express") // import our Express module
const app = express() // instantiate an Expres app.
const mainRouter = require("./routes/default") // import our default routes .
const port = process.env.PORT || 9999;

app
  .use("/", mainRouter)
  .listen(port, function(err,req,res){
    console.log("Listening http://127.0.0.1:" + port);
  })
