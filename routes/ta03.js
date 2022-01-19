//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const ta03Controller = require('../controllers/ta03');

router.get('/', ta03Controller.getTa03);

router.post("/", ta03Controller.postTa03);

module.exports = router;
