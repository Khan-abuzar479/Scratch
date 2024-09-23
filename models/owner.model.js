const mongoose = require('mongoose')
//mongoose.connect("mongoose.connect('mongodb://127.0.0.1:27017/scatch');")

const ownerSchema = mongoose.Schema({
  fullname: {
    type: String,
    miniLength: 3,
    trim:true,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: []
  },
  isadmin: Boolean,
  order: {
    type: Array,
    default: []
  },
  
  picture: String,
  gstin:String,
  
});
module.exports = mongoose.model("owner", ownerSchema);