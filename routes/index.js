const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// module.exports=function(app,passport){
  //app.use(
    // require("./api")(app,passport)
  //);
  router.use("/api", apiRoutes);  // If no API routes are hit, send the React app
  router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../football/build/index.html"));
  });
// }
// API Routes
module.exports=router;