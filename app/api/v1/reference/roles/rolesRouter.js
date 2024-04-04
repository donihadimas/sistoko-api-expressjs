const express = require("express")
const { create, index, find, update, destroy } = require("./rolesController")
const router = express()

router.get('/roles', index);

router.post('/roles', create);

router.get('/roles/:id', find);

router.put('/roles/:id', update);

router.delete('/roles/:id', destroy);

module.exports = router;