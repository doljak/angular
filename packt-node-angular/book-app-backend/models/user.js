const mongoose = require('mongoose');

const userchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email:{
    type:String,
    required:true,
    unique:true,
    match:/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  },
  password:{
    type:String,
    required:true,
  },
  name: String,
  user_type:String,
});

module.exports = mongoose.model('User', userchema);