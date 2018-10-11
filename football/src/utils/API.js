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
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets all User with the given username
  getUser: function(username) {
    return axios.get("/api/users/" + username);
  },
  // Saves a Users to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }

};
