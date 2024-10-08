const mongoose = require('mongoose')
//mongoose.connect("mongoose.connect('mongodb://127.0.0.1:27017/scatch');")

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    miniLength: 3,
    trim:true,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: []
  },
  isadmin: Boolean,
  order: {
    type: Array,
    default: []
  },
  contact: Number,
  picture: String,
  
});
module.exports = mongoose.model("user", userSchema);