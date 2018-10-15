var authController = require("../../controllers/authController");
module.exports = function (app, passport) {

  app.get("/isLoggedIn", (req, res) => {
    //console.log(req.session.passport.user);
    if (req.session.passport) {
      res.send(true);
    }
    else {
      res.send(false);
    }

  });
  app.get(
    "/test",
    (req, res) => {
      res.send("the test was successful");
    }
  );
  app.post(
    "/signUp",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureFlash: true,
      failureRedirect: "/signUp"
    })
  );
  app.post(
    "/signin", (req, res, next) => {
      passport.authenticate("local-signin", (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { return res.send("signIn"); }
        req.logIn(user, err => {
          if (err) { return next(err); }
          return (res.send(""));
        })
      })(req, res, next);
    });
  app.get("/logout", authController.logout);
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
}