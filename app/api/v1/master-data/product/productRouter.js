const express = require("express")
const { create, index, find, update, destroy } = require("./productController");
const { authenticateUser } = require("../../../../middlewares/auth");
const router = express()

router.get('/product', authenticateUser, index);

router.post('/product', authenticateUser, create);

router.get('/product/:id', authenticateUser, find);

router.put('/product/:id', authenticateUser, update);

router.delete('/product/:id', authenticateUser, destroy);

module.exports = router;