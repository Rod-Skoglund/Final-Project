const router = require("express").Router();
// const auth=require("./auth");
const signupRoute = require("./signup");
// unit data routes

module.exports=function(app,passport){
  //app.use(
    require("./auth")(app,passport);
    router.use("/signup", signupRoute);
    
  //);
}