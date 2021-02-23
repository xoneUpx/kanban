const express = require('express');
const router = express.Router();
const register = require('../controllers/register.js');
router.post('/post', register);

module.exports = router;
