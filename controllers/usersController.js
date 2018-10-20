const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    console.log("findAll - req.params.username = " + req.params.username);
    console.log("findAll - req.params = " + JSON.stringify(req.params));
    // console.log("findAll - req = " + JSON.stringify(req));
    // db.User
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
    db.User
    .find({username: req.params.username})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
  findOne: function(req, res) {
    console.log("findOne - req.params.username = " + req.params.username);
    console.log("findOne - req.params = " + JSON.stringify(req.params));
    db.User
    .find({username: req.params.username})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {
    console.log("req = " + JSON.stringify(req));
    console.log("req.params = " + JSON.stringify(req.params.username));
    db.User
      .find({username: req.params.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("usersController.js - create - req.body = " + req.body);
    db.User
      .create(req.body)
      // .then(dbModel => res.json(dbModel))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("usersController.js - update - req.body = " + req.body);
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
