const mongoose = require('mongoose')
//mongoose.connect("mongoose.connect('mongodb://127.0.0.1:27017/scatch');")

const productSchema = mongoose.Schema({
  image: String,
  price: Number,
  discount: {
    type: Number,
    default:[]
  },
  bgcolor: String,
  panelcolor: String,
  textcolor:String,
  
});
module.exports = mongoose.model("product", productSchema);