const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const GamesSchema = new Schema({
//   week: { type: Number },
//   gameDate: { type: Date },
//   home: {
//     type: Schema.Types.ObjectId,
//     // The ObjectIds will refer to the ids in the Teams model
//     ref: "Teams"
//   },
//   away: {
//     type: Schema.Types.ObjectId,
//     // The ObjectIds will refer to the ids in the Teams model
//     ref: "Teams"
//   },
//   winner: {
//     type: Schema.Types.ObjectId,
//     // The ObjectIds will refer to the ids in the Teams model
//     ref: "Teams"
//   }

// });

const GamesSchema = new Schema({
  week: { type: String },
  gameDate: { type: Date },
  home: { type: String },
  away: { type: String },
  winner: { type: String }

});

const Games = mongoose.model("Games", GamesSchema);

module.exports = Games;