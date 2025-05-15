const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  recommendations: {
    type: [String], // Exemple : liste d’IDs de contenus recommandés
    default: [],
  },
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
