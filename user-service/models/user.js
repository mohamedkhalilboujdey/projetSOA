const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  preferences: [String]
});

module.exports = mongoose.model('User', userSchema);
