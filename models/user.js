const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  active: { type: Boolean }
});

UserSchema.plugin(uniqueValidator);

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// UserSchema.virtual("password").set(function(value) {
//   this.password = bcrypt.hashSync(value, 12);
// });

const User = mongoose.model("User", UserSchema);

module.exports = User;