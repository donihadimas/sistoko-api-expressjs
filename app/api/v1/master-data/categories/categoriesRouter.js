const express = require("express");

const { create, index, find, update, destroy } = require("./categoriesController");
const { uploadMulter } = require("../../../../services/multer/multerService");
const { authenticateUser } = require("../../../../middlewares/auth");

const router = express()

router.get('/categories', authenticateUser, index);

router.post('/categories', authenticateUser, uploadMulter.single('categoryImage'), create);

router.get('/categories/:id', authenticateUser, find);

router.put('/categories/:id', authenticateUser, update);

router.delete('/categories/:id', authenticateUser, destroy);

module.exports = router;