const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamsSchema = new Schema({
  city: { type: String },
  teamName: { type: String },
  nickName: { type: String },
});

const Teams = mongoose.model("Teams", TeamsSchema);

module.exports = Teams;