const router = require("express").Router();
// const auth=require("./auth");
const signupRoute = require("./signup");
const usersRoute = require("./users");
const gamesRoute = require("./games");
// unit data routes

// module.exports={
  //app.use(
    // require("./auth")(app,passport);
    router.use("/signup", signupRoute)
    router.use("/users", usersRoute);
    router.use("/games", gamesRoute);
    
  //);
// 
module.exports=router;