const express = require("express")
const { create, index, find, update, destroy } = require("./categoriesController");
const { uploadMulter } = require("../../../../services/multer/multerService");
const router = express()

router.get('/categories', index);

router.post('/categories', uploadMulter.single('categoryImage'), create);

router.get('/categories/:id', find);

router.put('/categories/:id', update);

router.delete('/categories/:id', destroy);

module.exports = router;