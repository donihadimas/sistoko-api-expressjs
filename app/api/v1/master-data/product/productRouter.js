const express = require("express")
const { create, index, find, update, destroy } = require("./productController")
const router = express()

router.get('/product', index);

router.post('/product', create);

router.get('/product/:id', find);

router.put('/product/:id', update);

router.delete('/product/:id', destroy);

module.exports = router;