import axios from "axios";

export default {
  // Gets all picks
  getPicks: function() {
    return axios.get("/api/picks");
  },
  // Gets the pick with the given id
  getPick: function(id) {
    return axios.get("/api/picks/" + id);
  },
  // Deletes the pick with the given id
  deletePick: function(id) {
    return axios.delete("/api/picks/" + id);
  },
  // Saves a pick to the database
  savePick: function(pickData) {
    return axios.post("/api/picks", pickData);
  },

  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }

};
