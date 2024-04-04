const express = require("express")
const { create, index, find, update, destroy } = require("./employeesController")
const router = express()

router.get('/employees', index);

router.post('/employees', create);

router.get('/employees/:id', find);

router.put('/employees/:id', update);

router.delete('/employees/:id', destroy);

module.exports = router;