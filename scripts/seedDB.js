const mongoose = require("mongoose");
const db = require("../models");

// ********************************************************************************
// This file empties and initializes the collections that make up the footballDB 
// databse
// ********************************************************************************
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/footballDB"
);

// ********************************************************************************
// Empty and initialize the Teams collection
// ********************************************************************************
const teamsSeed = [
  { city: "Arizona",       teamName: "Cardinals",  nickname: "ARI" },
  { city: "Atlanta",       teamName: "Falcons",    nickname: "ATL" },
  { city: "Baltimore",     teamName: "Ravens",     nickname: "BAL" },
  { city: "Buffalo",       teamName: "Bills",      nickname: "BUF" },
  { city: "Carolina",      teamName: "Panthers",   nickname: "CAR" },
  { city: "Chicago",       teamName: "Bears",      nickname: "CHI" },
  { city: "Cincinnati",    teamName: "Bengals",    nickname: "CIN" },
  { city: "Cleveland",     teamName: "Browns",     nickname: "CLE" },
  { city: "Dallas",        teamName: "Cowboys",    nickname: "DAL" },
  { city: "Denver",        teamName: "Broncos",    nickname: "DEN" },
  { city: "Detroit",       teamName: "Lions",      nickname: "DET" },
  { city: "Green Bay",     teamName: "Packers",    nickname: "GB" },
  { city: "Houston",       teamName: "Texans",     nickname: "HOU" },
  { city: "Indianapolis",  teamName: "Colts",      nickname: "IND" },
  { city: "Jacksonville",  teamName: "Jaguars",    nickname: "JAX" },
  { city: "Kansas City",   teamName: "Chiefs",     nickname: "KC" },
  { city: "Los Angeles",   teamName: "Rams",       nickname: "LAR" },
  { city: "Los Angeles",   teamName: "Chargers",   nickname: "LAC" },
  { city: "Miami",         teamName: "Dolphins",   nickname: "MIA" },
  { city: "Minnesota",     teamName: "Vikings",    nickname: "MIN" },
  { city: "New England",   teamName: "Patriots",   nickname: "NE" },
  { city: "New Orleans",   teamName: "Saints",     nickname: "NO" },
  { city: "New York",      teamName: "Jets",       nickname: "NYJ" },
  { city: "New York",      teamName: "Giants",     nickname: "NYG" },
  { city: "Oakland",       teamName: "Raiders",    nickname: "OAK" },
  { city: "Philadelphia",  teamName: "Eagles",     nickname: "PHI" },
  { city: "Pittsburg",     teamName: "Steelers",   nickname: "PIT" },
  { city: "San Francisco", teamName: "49ers",      nickname: "SF" },
  { city: "Seattle",       teamName: "Seahawks",   nickname: "SEA" },
  { city: "Tampa Bay",     teamName: "Buccaneers", nickname: "TB" },
  { city: "Tennessee",     teamName: "Titans",     nickname: "TEN" },
  { city: "Washington",    teamName: "Redskins",   nickname: "WSH" }
]; // teamsSeed array

db.Teams
  .remove({})
  .then(() => db.Teams.collection.insertMany(teamsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// ********************************************************************************
// Empty and initialize the User collection
// ********************************************************************************
const userSeed = [
  { firstName: "Rod",     lastName: "Skoglund", username: "Dilbert",   password: "Dilbert",   active: false },
  { firstName: "George",  lastName: "Carlin",   username: "Stuff",     password: "Stuff",     active: false },
  { firstName: "Charlie", lastName: "Brown",    username: "Blockhead", password: "Blockhead", active: false },
  { firstName: "Snoopy",  lastName: "Brown",    username: "Peanuts",   password: "Peanuts",   active: false }
]; // userSeed array

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// ********************************************************************************
// Empty and initialize the Games collection
// ********************************************************************************
const gamesSeed = [
  { week: 1,  gameDate: "9/6/2018",   away: "ATL", home: "PHI", winner: "PHI" },
  { week: 1,  gameDate: "9/9/2018",   away: "PIT", home: "CLE", winner: "TIE" },
  { week: 1,  gameDate: "9/9/2018",   away: "CIN", home: "IND", winner: "CIN" },
  { week: 1,  gameDate: "9/9/2018",   away: "TEN", home: "MIA", winner: "MIA" },
  { week: 1,  gameDate: "9/9/2018",   away: "SF",  home: "MIN", winner: "MIN" },
  { week: 1,  gameDate: "9/9/2018",   away: "HOU", home: "NE",  winner: "NE" },
  { week: 1,  gameDate: "9/9/2018",   away: "TB",  home: "NO",  winner: "TB" },
  { week: 1,  gameDate: "9/9/2018",   away: "JAX", home: "NYG", winner: "JAX" },
  { week: 1,  gameDate: "9/9/2018",   away: "BUF", home: "BAL", winner: "BAL" },
  { week: 1,  gameDate: "9/9/2018",   away: "KC",  home: "LAC", winner: "KC" },
  { week: 1,  gameDate: "9/9/2018",   away: "SEA", home: "DEN", winner: "DEN" },
  { week: 1,  gameDate: "9/9/2018",   away: "WSH", home: "ARI", winner: "WSH" },
  { week: 1,  gameDate: "9/9/2018",   away: "DAL", home: "CAR", winner: "CAR" },
  { week: 1,  gameDate: "9/9/2018",   away: "CHI", home: "GB",  winner: "GB" },
  { week: 1,  gameDate: "9/10/2018",  away: "NYJ", home: "DET", winner: "NYJ" },
  { week: 1,  gameDate: "9/10/2018",  away: "LAR", home: "OAK", winner: "LAR" },
  { week: 2,  gameDate: "9/13/2018",  away: "BAL", home: "CIN", winner: "CIN" },
  { week: 2,  gameDate: "9/16/2018",  away: "CAR", home: "ATL", winner: "ATL" },
  { week: 2,  gameDate: "9/16/2018",  away: "LAC", home: "BUF", winner: "LAC" },
  { week: 2,  gameDate: "9/16/2018",  away: "MIN", home: "GB",  winner: "TIE" },
  { week: 2,  gameDate: "9/16/2018",  away: "HOU", home: "TEN", winner: "TEN" },
  { week: 2,  gameDate: "9/16/2018",  away: "CLE", home: "NO",  winner: "NO" },
  { week: 2,  gameDate: "9/16/2018",  away: "MIA", home: "NYJ", winner: "MIA" },
  { week: 2,  gameDate: "9/16/2018",  away: "KC",  home: "PIT", winner: "KC" },
  { week: 2,  gameDate: "9/16/2018",  away: "PHI", home: "TB",  winner: "TB" },
  { week: 2,  gameDate: "9/16/2018",  away: "IND", home: "WSH", winner: "IND" },
  { week: 2,  gameDate: "9/16/2018",  away: "ARI", home: "LAR", winner: "LAR" },
  { week: 2,  gameDate: "9/16/2018",  away: "DET", home: "SF",  winner: "SF" },
  { week: 2,  gameDate: "9/16/2018",  away: "OAK", home: "DEN", winner: "DEN" },
  { week: 2,  gameDate: "9/16/2018",  away: "NE",  home: "JAX", winner: "JAX" },
  { week: 2,  gameDate: "9/16/2018",  away: "NYG", home: "DAL", winner: "DAL" },
  { week: 2,  gameDate: "9/17/2018",  away: "SEA", home: "CHI", winner: "CHI" },
  { week: 3,  gameDate: "9/20/2018",  away: "NYJ", home: "CLE", winner: "CLE" },
  { week: 3,  gameDate: "9/23/2018",  away: "NO",  home: "ATL", winner: "NO" },
  { week: 3,  gameDate: "9/23/2018",  away: "SF",  home: "KC",  winner: "KC" },
  { week: 3,  gameDate: "9/23/2018",  away: "OAK", home: "MIA", winner: "MIA" },
  { week: 3,  gameDate: "9/23/2018",  away: "BUF", home: "MIN", winner: "BUF" },
  { week: 3,  gameDate: "9/23/2018",  away: "IND", home: "PHI", winner: "PHI" },
  { week: 3,  gameDate: "9/23/2018",  away: "GB",  home: "WSH", winner: "WSH" },
  { week: 3,  gameDate: "9/23/2018",  away: "CIN", home: "CAR", winner: "CAR" },
  { week: 3,  gameDate: "9/23/2018",  away: "TEN", home: "JAX", winner: "TEN" },
  { week: 3,  gameDate: "9/23/2018",  away: "DEN", home: "BAL", winner: "BAL" },
  { week: 3,  gameDate: "9/23/2018",  away: "NYG", home: "HOU", winner: "NYG" },
  { week: 3,  gameDate: "9/23/2018",  away: "LAC", home: "LAR", winner: "LAR" },
  { week: 3,  gameDate: "9/23/2018",  away: "CHI", home: "ARI", winner: "CHI" },
  { week: 3,  gameDate: "9/23/2018",  away: "DAL", home: "SEA", winner: "SEA" },
  { week: 3,  gameDate: "9/23/2018",  away: "NE",  home: "DET", winner: "DET" },
  { week: 3,  gameDate: "9/24/2018",  away: "PIT", home: "TB",  winner: "PIT" },
  { week: 4,  gameDate: "9/27/2018",  away: "MIN", home: "LAR", winner: "LAR" },
  { week: 4,  gameDate: "9/30/2018",  away: "CIN", home: "ATL", winner: "CIN" },
  { week: 4,  gameDate: "9/30/2018",  away: "TB",  home: "CHI", winner: "CHI" },
  { week: 4,  gameDate: "9/30/2018",  away: "DET", home: "DAL", winner: "DAL" },
  { week: 4,  gameDate: "9/30/2018",  away: "BUF", home: "GB",  winner: "GB" },
  { week: 4,  gameDate: "9/30/2018",  away: "PHI", home: "TEN", winner: "TEN" },
  { week: 4,  gameDate: "9/30/2018",  away: "HOU", home: "IND", winner: "HOU" },
  { week: 4,  gameDate: "9/30/2018",  away: "MIA", home: "NE",  winner: "NE" },
  { week: 4,  gameDate: "9/30/2018",  away: "NYJ", home: "JAX", winner: "JAX" },
  { week: 4,  gameDate: "9/30/2018",  away: "CLE", home: "OAK", winner: "OAK" },
  { week: 4,  gameDate: "9/30/2018",  away: "SEA", home: "ARI", winner: "SEA" },
  { week: 4,  gameDate: "9/30/2018",  away: "NO",  home: "NYG", winner: "NO" },
  { week: 4,  gameDate: "9/30/2018",  away: "SF",  home: "LAC", winner: "LAC" },
  { week: 4,  gameDate: "9/30/2018",  away: "BAL", home: "PIT", winner: "BAL" },
  { week: 4,  gameDate: "10/1/2018",  away: "KC",  home: "DEN", winner: "KC" },
  { week: 5,  gameDate: "10/4/2018",  away: "IND", home: "NE",  winner: "NE" },
  { week: 5,  gameDate: "10/7/2018",  away: "TEN", home: "BUF", winner: "BUF" },
  { week: 5,  gameDate: "10/7/2018",  away: "MIA", home: "CIN", winner: "CIN" },
  { week: 5,  gameDate: "10/7/2018",  away: "BAL", home: "CLE", winner: "CLE" },
  { week: 5,  gameDate: "10/7/2018",  away: "GB",  home: "DET", winner: "DET" },
  { week: 5,  gameDate: "10/7/2018",  away: "JAX", home: "KC",  winner: "KC" },
  { week: 5,  gameDate: "10/7/2018",  away: "DEN", home: "NYJ", winner: "NYJ" },
  { week: 5,  gameDate: "10/7/2018",  away: "ATL", home: "PIT", winner: "PIT" },
  { week: 5,  gameDate: "10/7/2018",  away: "NYG", home: "CAR", winner: "CAR" },
  { week: 5,  gameDate: "10/7/2018",  away: "OAK", home: "LAC", winner: "LAC" },
  { week: 5,  gameDate: "10/7/2018",  away: "MIN", home: "PHI", winner: "MIN" },
  { week: 5,  gameDate: "10/7/2018",  away: "ARI", home: "SF",  winner: "ARI" },
  { week: 5,  gameDate: "10/7/2018",  away: "LAR", home: "SEA", winner: "LAR" },
  { week: 5,  gameDate: "10/7/2018",  away: "DAL", home: "HOU", winner: "HOU" },
  { week: 5,  gameDate: "10/8/2018",  away: "WSH", home: "NO",  winner: "NO" },
  { week: 6,  gameDate: "10/11/2018", away: "PHI", home: "NYG", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "TB",  home: "ATL", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "PIT", home: "CIN", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "LAC", home: "CLE", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "SEA", home: "OAK", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "CHI", home: "MIA", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "ARI", home: "MIN", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "IND", home: "NYJ", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "CAR", home: "WSH", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "BUF", home: "HOU", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "LAR", home: "DEN", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "JAX", home: "DAL", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "BAL", home: "TEN", winner: "" },
  { week: 6,  gameDate: "10/14/2018", away: "KC",  home: "NE",  winner: "" },
  { week: 6,  gameDate: "10/15/2018", away: "SF",  home: "GB",  winner: "" },
  { week: 7,  gameDate: "10/18/2018", away: "DEN", home: "ARI", winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "TEN", home: "LAC", winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "NE",  home: "CHI", winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "BUF", home: "IND", winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "DET", home: "MIA", winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "MIN", home: "NYJ", winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "CAR", home: "PHI", winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "CLE", home: "TB",  winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "HOU", home: "JAX", winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "NO",  home: "BAL", winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "LAR", home: "SF",  winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "DAL", home: "WSH", winner: "" },
  { week: 7,  gameDate: "10/21/2018", away: "CIN", home: "KC",  winner: "" },
  { week: 7,  gameDate: "10/22/2018", away: "NYG", home: "ATL", winner: "" },
  { week: 8,  gameDate: "10/25/2018", away: "MIA", home: "HOU", winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "PHI", home: "JAX", winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "NYJ", home: "CHI", winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "TB",  home: "CIN", winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "SEA", home: "DET", winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "DEN", home: "KC",  winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "WSH", home: "NYG", winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "CLE", home: "PIT", winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "BAL", home: "CAR", winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "IND", home: "OAK", winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "GB",  home: "LAR", winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "SF",  home: "ARI", winner: "" },
  { week: 8,  gameDate: "10/28/2018", away: "NO",  home: "MIN", winner: "" },
  { week: 8,  gameDate: "10/29/2018", away: "NE",  home: "BUF", winner: "" },
  { week: 9,  gameDate: "11/1/2018",  away: "OAK", home: "SF",  winner: "" },
  { week: 9,  gameDate: "11/4/2018",  away: "CHI", home: "BUF", winner: "" },
  { week: 9,  gameDate: "11/4/2018",  away: "KC",  home: "CLE", winner: "" },
  { week: 9,  gameDate: "11/4/2018",  away: "NYJ", home: "MIA", winner: "" },
  { week: 9,  gameDate: "11/4/2018",  away: "DET", home: "MIN", winner: "" },
  { week: 9,  gameDate: "11/4/2018",  away: "ATL", home: "WSH", winner: "" },
  { week: 9,  gameDate: "11/4/2018",  away: "TB",  home: "CAR", winner: "" },
  { week: 9,  gameDate: "11/4/2018",  away: "PIT", home: "BAL", winner: "" },
  { week: 9,  gameDate: "11/4/2018",  away: "HOU", home: "DEN", winner: "" },
  { week: 9,  gameDate: "11/4/2018",  away: "LAC", home: "SEA", winner: "" },
  { week: 9,  gameDate: "11/4/2018",  away: "LAR", home: "NO",  winner: "" },
  { week: 9,  gameDate: "11/4/2018",  away: "GB",  home: "NE",  winner: "" },
  { week: 9,  gameDate: "11/5/2018",  away: "TEN", home: "DAL", winner: "" },
  { week: 10, gameDate: "11/8/2018",  away: "CAR", home: "PIT", winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "DET", home: "CHI", winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "NO",  home: "CIN", winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "ATL", home: "CLE", winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "MIA", home: "GB",  winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "NE",  home: "TEN", winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "JAX", home: "IND", winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "ARI", home: "KC",  winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "BUF", home: "NYJ", winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "WSH", home: "TB",  winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "LAC", home: "OAK", winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "SEA", home: "LAR", winner: "" },
  { week: 10, gameDate: "11/11/2018", away: "DAL", home: "PHI", winner: "" },
  { week: 10, gameDate: "11/12/2018", away: "NYG", home: "SF",  winner: "" },
  { week: 11, gameDate: "11/15/2018", away: "GB",  home: "SEA", winner: "" },
  { week: 11, gameDate: "11/18/2018", away: "DAL", home: "ATL", winner: "" },
  { week: 11, gameDate: "11/18/2018", away: "MIN", home: "CHI", winner: "" },
  { week: 11, gameDate: "11/18/2018", away: "CAR", home: "DET", winner: "" },
  { week: 11, gameDate: "11/18/2018", away: "TEN", home: "IND", winner: "" },
  { week: 11, gameDate: "11/18/2018", away: "PHI", home: "NO",  winner: "" },
  { week: 11, gameDate: "11/18/2018", away: "TB",  home: "NYG", winner: "" },
  { week: 11, gameDate: "11/18/2018", away: "HOU", home: "WSH", winner: "" },
  { week: 11, gameDate: "11/18/2018", away: "CIN", home: "BAL", winner: "" },
  { week: 11, gameDate: "11/18/2018", away: "OAK", home: "ARI", winner: "" },
  { week: 11, gameDate: "11/18/2018", away: "DEN", home: "LAC", winner: "" },
  { week: 11, gameDate: "11/18/2018", away: "PIT", home: "JAX", winner: "" },
  { week: 11, gameDate: "11/19/2018", away: "KC",  home: "LAR", winner: "" },
  { week: 12, gameDate: "11/22/2018", away: "CHI", home: "DET", winner: "" },
  { week: 12, gameDate: "11/22/2018", away: "WSH", home: "DAL", winner: "" },
  { week: 12, gameDate: "11/22/2018", away: "ATL", home: "NO",  winner: "" },
  { week: 12, gameDate: "11/25/2018", away: "JAX", home: "BUF", winner: "" },
  { week: 12, gameDate: "11/25/2018", away: "CLE", home: "CIN", winner: "" },
  { week: 12, gameDate: "11/25/2018", away: "MIA", home: "IND", winner: "" },
  { week: 12, gameDate: "11/25/2018", away: "NE",  home: "NYJ", winner: "" },
  { week: 12, gameDate: "11/25/2018", away: "NYG", home: "PHI", winner: "" },
  { week: 12, gameDate: "11/25/2018", away: "SF",  home: "TB",  winner: "" },
  { week: 12, gameDate: "11/25/2018", away: "SEA", home: "CAR", winner: "" },
  { week: 12, gameDate: "11/25/2018", away: "OAK", home: "BAL", winner: "" },
  { week: 12, gameDate: "11/25/2018", away: "ARI", home: "LAC", winner: "" },
  { week: 12, gameDate: "11/25/2018", away: "PIT", home: "DEN", winner: "" },
  { week: 12, gameDate: "11/25/2018", away: "GB",  home: "MIN", winner: "" },
  { week: 12, gameDate: "11/26/2018", away: "TEN", home: "HOU", winner: "" },
  { week: 13, gameDate: "11/29/2018", away: "NO",  home: "DAL", winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "BAL", home: "ATL", winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "DEN", home: "CIN", winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "LAR", home: "DET", winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "ARI", home: "GB",  winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "BUF", home: "MIA", winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "CHI", home: "NYG", winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "LAC", home: "PIT", winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "CAR", home: "TB",  winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "IND", home: "JAX", winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "CLE", home: "HOU", winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "NYJ", home: "TEN", winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "KC",  home: "OAK", winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "MIN", home: "NE",  winner: "" },
  { week: 13, gameDate: "12/2/2018",  away: "SF",  home: "SEA", winner: "" },
  { week: 13, gameDate: "12/3/2018",  away: "WSH", home: "PHI", winner: "" },
  { week: 14, gameDate: "12/6/2018",  away: "JAX", home: "TEN", winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "NYJ", home: "BUF", winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "LAR", home: "CHI", winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "CAR", home: "CLE", winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "ATL", home: "GB",  winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "BAL", home: "KC",  winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "NE",  home: "MIA", winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "NO",  home: "TB",  winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "NYG", home: "WSH", winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "IND", home: "HOU", winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "CIN", home: "LAC", winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "DEN", home: "SF",  winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "PHI", home: "DAL", winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "DET", home: "ARI", winner: "" },
  { week: 14, gameDate: "12/9/2018",  away: "PIT", home: "OAK", winner: "" },
  { week: 14, gameDate: "12/10/2018", away: "MIN", home: "SEA", winner: "" },
  { week: 15, gameDate: "12/13/2018", away: "LAC", home: "KC",  winner: "" },
  { week: 15, gameDate: "12/15/2018", away: "CLE", home: "DEN", winner: "" },
  { week: 15, gameDate: "12/15/2018", away: "HOU", home: "NYJ", winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "ARI", home: "ATL", winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "DET", home: "BUF", winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "GB",  home: "CHI", winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "OAK", home: "CIN", winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "DAL", home: "IND", winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "MIA", home: "MIN", winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "TEN", home: "NYG", winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "WSH", home: "JAX", winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "TB",  home: "BAL", winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "SEA", home: "SF",  winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "NE",  home: "PIT", winner: "" },
  { week: 15, gameDate: "12/16/2018", away: "PHI", home: "LAR", winner: "" },
  { week: 15, gameDate: "12/17/2018", away: "NO",  home: "CAR", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "CIN", home: "CLE", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "TB",  home: "DAL", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "MIN", home: "DET", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "WSH", home: "TEN", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "NYG", home: "IND", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "JAX", home: "MIA", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "BUF", home: "NE",  winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "GB",  home: "NYJ", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "HOU", home: "PHI", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "ATL", home: "CAR", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "LAR", home: "ARI", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "BAL", home: "LAC", winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "CHI", home: "SF",  winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "PIT", home: "NO",  winner: "" },
  { week: 16, gameDate: "12/23/2018", away: "KC",  home: "SEA", winner: "" },
  { week: 16, gameDate: "12/24/2018", away: "DEN", home: "OAK", winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "MIA", home: "BUF", winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "DET", home: "GB",  winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "IND", home: "TEN", winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "OAK", home: "KC",  winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "CHI", home: "MIN", winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "NYJ", home: "NE",  winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "CAR", home: "NO",  winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "DAL", home: "NYG", winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "CIN", home: "PIT", winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "ATL", home: "TB",  winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "PHI", home: "WSH", winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "CLE", home: "BAL", winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "JAX", home: "HOU", winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "LAC", home: "DEN", winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "SF",  home: "LAR", winner: "" },
  { week: 17, gameDate: "12/30/2018", away: "ARI", home: "SEA", winner: "" }
]; // userSeed array

db.Games
  .remove({})
  .then(() => db.Games.collection.insertMany(gamesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



// ********************************************************************************
// Empty and initialize the Picks collection
// ********************************************************************************
// db.Picks
//   .remove({})
//   .then(() => db.Picks.collection.insertMany(picksSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });



// ********************************************************************************
// Empty and initialize the UserScore collection
// ********************************************************************************
// db.UserScore
//   .remove({})
//   .then(() => db.UserScore.collection.insertMany(userScoreSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

