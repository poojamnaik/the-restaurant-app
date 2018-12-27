const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: String,
  username: String,
  password: String,
  salt: String,
  firstName: String,
  lastName: String,
  role: String
});

// Schemas are then "compiled" into models and exported. 
module.exports = mongoose.model('User', UserSchema);