const express = require('express');
const router = express.Router();

const categoriesRouter = require("./master-data/categories/categoriesRouter")
const employeesRouter = require("./master-data/employees/employeesRouter")
const rolesRouter = require("./reference/roles/rolesRouter")
const productRouter = require("./master-data/product/productRouter")
const supplierRouter = require("./master-data/supplier/supplierRouter")
const menuRouter = require("./reference/menu/menuRouter")
const permissionsRouter = require("./reference/permissions/permissionRouter")
const usersRouter = require("./users/usersRouter")
const authRouter = require("./auth/authRouter")

const subUrl = process.env.SUB_URL
router.use(subUrl, categoriesRouter)
    .use(subUrl, employeesRouter)
    .use(subUrl, rolesRouter)
    .use(subUrl, productRouter)
    .use(subUrl, supplierRouter)
    .use(subUrl, menuRouter)
    .use(subUrl, permissionsRouter)
    .use(subUrl, usersRouter)
    .use(subUrl, authRouter)

module.exports = router;