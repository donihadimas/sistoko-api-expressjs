const express = require("express");
const { create, index, find, update, destroy } = require("./permissionController");
const router = express()

router.get('/permissions', index);

router.post('/permissions', create);

router.get('/permissions/:id', find);

router.put('/permissions/:id', update);

router.delete('/permissions/:id', destroy);

module.exports = router;