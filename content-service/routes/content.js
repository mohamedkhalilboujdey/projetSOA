const express = require('express');
const router = express.Router();
const contentCtrl = require('../controllers/content.controller');

router.get('/', contentCtrl.getAllContent);
router.post('/', contentCtrl.addContent);

module.exports = router;
