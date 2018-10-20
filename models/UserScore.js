const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserScoreSchema = new Schema({
  week: { type: Number },
  calculated: { type: Boolean },
  score: { type: Number },
  userID: {
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the User model
    ref: "User"
  }

});

const UserScore = mongoose.model("UserScore", UserScoreSchema);

module.exports = UserScore;