const path = require("path");
//const router = require("express").Router();
module.exports=function(app,passport){
  //app.use(
    require("./api")(app,passport)
  //);

  // If no API routes are hit, send the React app
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../football/build/index.html"));
  });
}
// API Routes