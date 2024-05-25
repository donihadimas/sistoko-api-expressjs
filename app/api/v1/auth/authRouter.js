const express = require('express');
const { loginProcess } = require('./authController');
const router = express();

router.post('/auth/login', loginProcess);

module.exports = router;
