import axios from "axios";

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
  // Gets all Users
  // getUsers: function() {
  //   return axios.get("/api/users");
  // },
  // Gets all User with the given username
  // getUser: function(username) {
  //   console.log("API - username = " + username);
  //   return axios.get("/api/users");
  // },
  // Saves a Users to the database
  saveUser: function(userData) {
    console.log("utils/API.js - userData = " + JSON.stringify(userData));
    return axios.post("/api/users", userData);
  }
};
