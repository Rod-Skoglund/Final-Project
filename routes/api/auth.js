var authController = require("../../controllers/authController");
module.exports=function(app,passport){
  
  //must be last
  app.get(
    "/test",
    (req,res)=>{
      res.send("the test was successful");
    }
  )
  app.post(
    "/signUp",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureFlash: true,
      failureRedirect: "/signUp"
    })
  );
  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/",
      failureFlash: true,
      failureRedirect: "/signin"
    })
  );
  app.get("/logout", authController.logout);
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
}