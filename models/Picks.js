const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PickSchema = new Schema({
  confidence: { type: Number },
  userID: {
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the User model
    ref: "User"
  },
  game: {
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Games model
    ref: "Games"
  },
  pick: {
    // type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Teams model
    // ref: "Teams"
    type: String
  }

});

const Pick = mongoose.model("Pick", PickSchema);

module.exports = Pick;