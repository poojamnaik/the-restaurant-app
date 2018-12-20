

var mongoose= require('mongoose');

var UserSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    role: String,
    token:String
  });

  // Schemas are then "compiled" into models and exported. 
  module.exports = mongoose.model('User', UserSchema);