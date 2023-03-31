const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    reqiured: true,
  },
  email: {
    type: String,
    reqiured: true,
    unique: true,
  },
  username: {
    type: String,
    reqiured: true,
    unique: true,
  },
  password: {
    type: String,
    reqiured: true,
  }
},{
  collection: 'tempModel'
});

module.exports = mongoose.model("tempModel", UserSchema);