// require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3002;
const passport = require("passport");
const session = require("express-session");
// require("dotenv").load();

const db = require("./models");
const models = require("./models");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
//passport
app.use(
  session({ secret: "dropKickPicks", resave: true, saveUninitialized: true })
); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

if (process.env.NODE_ENV === "production") {
  app.use(express.static("football/build"));
}

app.use(routes);

// Routes
require("./routes")(app, passport);
// require("./routes/htmlRoutes")(app);
// //passport strats
require("./config/passport/passport")(passport, models.user);
// //
// const syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// // Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });

// ******************************************************************************
// Connect to the Mongo DB
// ******************************************************************************
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/footballDB");

// ******************************************************************************
// Start Server 
// ******************************************************************************
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


module.exports = app;
//mysql://b91ddbd3dbcd14:4393ecdf@us-cdbr-iron-east-01.cleardb.net/heroku_5de9537cc37f621?reconnect=true

