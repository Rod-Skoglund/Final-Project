const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/footballDB"
);

const teamsSeed = [
  {
    city: "Arizona",
    teamName: "Cardinals",
    nickname: "ARI"
  },
  {
    city: "Atlanta", 
    teamName: "Falcons",
    nickname: "ATL"
  },
  {
    city: "Baltimore",
    teamName: "Ravens",
    nickname: "BAL"
  },
  {
    city: "Buffalo",
    teamName: "Bills",
    nickname: "BUF"
  },
  {
    city: "Carolina",
    teamName: "Panthers",
    nickname: "CAR"
  },
  {
    city: "Chicago",
    teamName: "Bears",
    nickname: "CHI"
  },
  {
    city: "Cincinnati",
    teamName: "Bengals",
    nickname: "CIN"
  },
  {
    city: "Cleveland",
    teamName: "Browns",
    nickname: "CLE"
  },
  {
    city: "Dallas",
    teamName: "Cowboys",
    nickname: "DAL"
  },
  {
    city: "Denver",
    teamName: "Broncos",
    nickname: "DEN"
  },
  {
    city: "Detroit",
    teamName: "Lions",
    nickname: "DET"
  },
  {
    city: "Green Bay",
    teamName: "Packers",
    nickname: "GB"
  },
  {
    city: "Houston",
    teamName: "Texans",
    nickname: "HOU"
  },
  {
    city: "Indianapolis",
    teamName: "Colts",
    nickname: "IND"
  },
  {
    city: "Jacksonville",
    teamName: "Jaguars",
    nickname: "JAX"
  },
  {
    city: "Kansas city",
    teamName: "Chiefs",
    nickname: "KC"
  },
  {
    city: "Los Angeles",
    teamName: "Rams",
    nickname: "LAR"
  },
  {
    city: "Los Angeles",
    teamName: "Chargers",
    nickname: "LAC"
  },
  {
    city: "Miami",
    teamName: "Dolphins",
    nickname: "MIA"
  },
  {
    city: "Minnesota",
    teamName: "Vikings",
    nickname: "MIN"
  },
  {
    city: "New England",
    teamName: "Patriots",
    nickname: "NE"
  },
  {
    city: "New Orleans",
    teamName: "Saints",
    nickname: "NO"
  },
  {
    city: "New York",
    teamName: "Jets",
    nickname: "NYJ"
  },
  {
    city: "New York",
    teamName: "Giants",
    nickname: "NYG"
  },
  {
    city: "Oakland",
    teamName: "Raiders",
    nickname: "OAK"
  },
  {
    city: "Philadelphia",
    teamName: "Eagles",
    nickname: "PHI"
  },
  {
    city: "Pittsburg",
    teamName: "Steelers",
    nickname: "PIT"
  },
  {
    city: "San Francisco",
    teamName: "49ers",
    nickname: "SF"
  },
  {
    city: "Seattle",
    teamName: "Seahawks",
    nickname: "SEA"
  },
  {
    city: "Tampa Bay",
    teamName: "Buccaneers",
    nickname: "TB"
  },
  {
    city: "Tennessee",
    teamName: "Titans",
    nickname: "TEN"
  },
  {
    city: "Washington",
    teamName: "Redskins",
    nickname: "WSH"
  }
]; // teamsSeed array







db.Teams
  .remove({})
  .then(() => db.Teams.collection.insertMany(teamsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
