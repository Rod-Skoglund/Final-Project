import axios from "axios";
const BASEURL = "https://api.mysportsfeeds.com/v2.0/pull/nfl/2018-regular/games.json";
const APIKEY = "1534a3f2-04d3-422e-92b3-b232fb";

export default {
  // Gets all Picks
  getPicks: function() {
    return axios.get("/api/picks");
  },
  // Gets the Picks with the given id
  getPick: function(id) {
    return axios.get("/api/pick/" + id);
  },
  // Saves a Picks to the database
  savePick: function(pickData) {
    return axios.post("/api/pick", pickData);
  },
  getUser: function(username) {
    return axios.get("/api/users/" + username);
  },
  getUsers: function() {
    return axios.get("/api/users/");
  },
  updateUser: function(userData) {
    console.log("utils/API.js - userData = " + JSON.stringify(userData));
    return axios.put("/api/users", userData);
  },
  saveUser: function(userData) {
    console.log("utils/API.js - userData = " + JSON.stringify(userData));
    return axios.post("/api/users", userData);
  }

};

