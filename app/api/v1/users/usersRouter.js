const express = require("express")
const { create, index, find, update, destroy } = require("./usersController")
const router = express()

router.get('/users', index);

router.post('/users', create);

router.get('/users/:id', find);

router.put('/users/:id', update);

router.delete('/users/:id', destroy);

module.exports = router;