const db = require("../models");

// Defining methods for the gamesController
module.exports = {
  findAllGames: function(req, res) {
    console.log("findAll - req.params = ", parseInt(req.params.week));
    console.log("findAll - req.params = ", JSON.stringify(req.params));
    db.Games
    .find({week: req.params.week})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findByWeek: function(req, res) {
    console.log("req.params.week = ", req.params.week);
    console.log("req.params = ", JSON.stringify(req.params));
    db.Games
    .find({week: req.params.week})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    console.log("findOne - req.params.username = " + req.params.username);
    console.log("findOne - req.params = " + JSON.stringify(req.params));
    db.Games
    .find({username: req.params.username})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Games
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {
    console.log("req = " + JSON.stringify(req));
    console.log("req.params = " + JSON.stringify(req.params.username));
    db.Games
      .find({username: req.params.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("gamesController.js - create - req.body = " + req.body);
    db.Games
      .create(req.body)
      // .then(dbModel => res.json(dbModel))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("gamessController.js - update - req.body = " + req.body);
    db.Games
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Games
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllPicks: function(req, res) {
    console.log("findAll - req.params = ", parseInt(req.params.week));
    console.log("findAll - req.params = ", JSON.stringify(req.params));
    db.Picks
    .find({week: req.params.week})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  createPick: function(req, res) {
    console.log("gamesController.js - create - req.body = " + req.body);
    db.Picks
      .create(req.body)
      // .then(dbModel => res.json(dbModel))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
