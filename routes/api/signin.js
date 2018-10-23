// var db = require("../models");
var authController = require("../../controllers/authcontroller");
module.exports = function(app, passport) {
  // app.get("/dashboard", isLoggedIn, planController.allPlans);
  //signin stuff below

  // app.delete("/dashboard", isLoggedIn, planController.deletePlan);

  app.get("/signin", authController.signin);
  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/",
      failureFlash: true,
      failureRedirect: "/signin"
    })
  );
  app.get("/logout", authController.logout);
  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/signin",
      failureFlash: true,
      failureRedirect: "/signin"
    })
  );
  app.get("/signin", authController.signin);
  // app.get("/allPlans", isLoggedIn, planController.allPlans); //gets all plans by a users id and sends it as json
  // app.get("/plan:planID", isLoggedIn, planController.onePlan); //gets plan by id and sends it as json
  // app.get("/jsonPlan:planID", isLoggedIn, planController.jsonPlan);
  // app.get("/newPlan", isLoggedIn, authController.newPlan); //renders new plan page
  // app.get("/myID", isLoggedIn, authController.myID);
  // app.post("/newPlan", isLoggedIn, authController.postNewPlan);
  //must be last
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
};
