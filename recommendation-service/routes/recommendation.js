const express = require('express');
const router = express.Router();
const Recommendation = require('../models/recommendation');

// Récupérer toutes les recommandations
router.get('/', async (req, res) => {
  const recos = await Recommendation.find();
  res.json(recos);
});

// Récupérer une reco par userId
router.get('/:userId', async (req, res) => {
  const reco = await Recommendation.findOne({ userId: req.params.userId });
  if (!reco) return res.status(404).json({ message: 'Recommandation introuvable' });
  res.json(reco);
});

module.exports = router;
