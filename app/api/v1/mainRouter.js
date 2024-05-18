const categoriesRouter = require("./master-data/categories/categoriesRouter")
const employeesRouter = require("./master-data/employees/employeesRouter")
const rolesRouter = require("./reference/roles/rolesRouter")
const productRouter = require("./master-data/product/productRouter")
const supplierRouter = require("./master-data/supplier/supplierRouter")
const menuRouter = require("./reference/menu/menuRouter")

module.exports = {
    categoriesRouter,
    employeesRouter,
    rolesRouter,
    productRouter,
    supplierRouter,
    menuRouter
}