const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String },
  rating: { type: Number },
});

module.exports = mongoose.model('Content', contentSchema);
