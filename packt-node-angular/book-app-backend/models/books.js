const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title:{
    required:true,
    unique:true,
    type:String,
  },
  isbn:{
    type:Number,
    required:true
  },
  author:{
    type:String,
    required: true
  },
  price:{
    type:Number,
    required:true
  }
})

module.exports = mongoose.model('Book', bookSchema);