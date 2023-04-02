const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
},{
  collection: 'adminData'
});

module.exports = mongoose.model("adminData", AdminSchema);