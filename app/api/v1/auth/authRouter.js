const express = require('express');
const { loginProcess, registerProcess } = require('./authController');
const router = express();

router.post('/auth/login', loginProcess);
router.post('/auth/register', registerProcess);

module.exports = router;
