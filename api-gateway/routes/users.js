const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = 'http://user-service:3001/users';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const response = await axios.post(BASE_URL, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
