const mongoose = require("mongoose");
const db = require("../models");

// collections: users, games, picks, teams, userScore
//


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dropkick"
);

const userSeed = [
  {
    username: "johndoe",
    password: "abc",
    firstName: "john",
    lastName: "doe",
    totalPoints: "100",
    date: new Date(Date.now())
  },
  {
    username: "janedoe",
    password: "def",
    firstName: "jane",
    lastName: "doe",
    totalPoints: "150",
    date: new Date(Date.now())
  }

];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


const pickSeed = [
  {
    gameId: "1",
    homeTeam: "Team 1",
    awayTeam: "Team 2",
    pick: "Team 1",
    date: new Date(Date.now())
  },
  {
    gameId: "2",
    homeTeam: "Team 3",
    awayTeam: "Team 4",
    pick: "Team 3",
    date: new Date(Date.now())
  }

];

db.Pick
  .remove({})
  .then(() => db.Pick.collection.insertMany(pickSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  