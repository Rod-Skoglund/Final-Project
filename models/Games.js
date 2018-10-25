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

const GameSchema = new Schema({
  week: { type: String },
  gameDate: { type: Date },
  home: { type: String },
  away: { type: String },
  winner: { type: String },
  picks: [{ type: Schema.Types.ObjectId, ref: 'Pick' }]
});

const Game = mongoose.model("Games", GameSchema);

module.exports = Game;