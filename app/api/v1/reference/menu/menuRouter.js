const express = require("express");
const { create, index, find, update, destroy } = require("./menuController");
const router = express()

router.get('/menu', index);

router.post('/menu', create);

router.get('/menu/:id', find);

router.put('/menu/:id', update);

router.delete('/menu/:id', destroy);

module.exports = router;