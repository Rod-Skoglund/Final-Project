//load bcrypt
var bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, user) {
  var User = user;
  // if (passport && user) {
  //   console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  // }
  var LocalStrategy = require("passport-local").Strategy;
  //signin
  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email

        usernameField: "username",

        passwordField: "password",

        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, username, password, done) {
        var User = user;

        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({
          where: {
            username: username
          }
        })
          .then(function(user) {
            if (!user) {
              console.log("User Name does not exist");
              return done(null, false, {
                message: "User Name does not exist"
              });
            }

            if (!isValidPassword(user.password, password)) {
              console.log("Incorrect password.");
              return done(null, false, {
                message: "Incorrect password."
              });
            }

            var userinfo = user.get();
            return done(null, userinfo);
          })
          .catch(function(err) {
            console.log("Error:", err);

            return done(null, false, {
              message: "Something went wrong with your Signin"
            });
          });
      }
    )
  );
  //signup
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",

        passwordField: "password",

        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, username, password, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({
          where: {
            username: username
          }
        }).then(function(user) {
          if (user) {
            console.log("That username is taken");
            return done(null, false, {
              message: "That username is already taken"
            });
          } else {
            var userPassword = generateHash(password);

            var data = {
              username: username,

              passwordHash: userPassword,

              firstName: req.body.firstname,

              lastName: req.body.lastname
            };

            User.create(data).then(function(newUser) {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    ),
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    }),
    // deserialize user
    passport.deserializeUser(function(id, done) {
      User.findById(id).then(function(user) {
        if (user) {
          done(null, user.get());
        } else {
          done(user.errors, null);
        }
      });
    })
  );
};

// ****************************************************************

// const mongoose = require('mongoose');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');

// const Users = mongoose.model('Users');

// passport.use(new LocalStrategy({
//   usernameField: 'user[email]',
//   passwordField: 'user[password]',
// }, (email, password, done) => {
//   Users.findOne({ email })
//     .then((user) => {
//       if(!user || !user.validatePassword(password)) {
//         return done(null, false, { errors: { 'email or password': 'is invalid' } });
//       }

//       return done(null, user);
//     }).catch(done);
// }));