const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PicksSchema = new Schema({
  confidence: { type: Number },
  userID: {
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the User model
    ref: "User"
  },
  gamesID: {
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Games model
    ref: "Games"
  },
  pick: {
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Teams model
    ref: "Teams"
  }

});

const Picks = mongoose.model("Picks", PicksSchema);

module.exports = Picks;