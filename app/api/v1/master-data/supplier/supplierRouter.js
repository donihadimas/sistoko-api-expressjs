const express = require("express")
const { create, index, find, update, destroy } = require("./supplierController")
const router = express()

router.get('/supplier', index);

router.post('/supplier', create);

router.get('/supplier/:id', find);

router.put('/supplier/:id', update);

router.delete('/supplier/:id', destroy);

module.exports = router;