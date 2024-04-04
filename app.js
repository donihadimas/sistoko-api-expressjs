const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()
const YAML = require('yamljs')
const swaggerjsDocs = YAML.load('./app/api/v1/api.yaml');
const swaggerUi = require("swagger-ui-express");
const notFoundMiddleware = require('./app/middlewares/not-found');
const handleErrorMiddleware = require('./app/middlewares/handle-error');
const cors = require('cors')


const app = express();
app.use(cors())

app.use(express.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// ? ROUTE
const categoriesRouter = require("./app/api/v1/master-data/categories/categoriesRouter")
const employeesRouter = require("./app/api/v1/master-data/employees/employeesRouter")
const rolesRouter = require("./app/api/v1/reference/roles/rolesRouter")

app.use(process.env.SUB_URL, categoriesRouter);
app.use(process.env.SUB_URL, employeesRouter);
app.use(process.env.SUB_URL, rolesRouter);

app.use("/api/v1", swaggerUi.serve, swaggerUi.setup(swaggerjsDocs))
app.use("/", (req, res) => {
    res.status(200).json(
        {
            success: true,
            error_code: null,
            message: "Welcome to DeHoli SuperApp Backend",
            data: {
                api_documentations: process.env.NODE_ENV == "staging" ? process.env.BASE_URL + ":" + process.env.PORT + process.env.SUB_URL : process.env.NODE_ENV == "production" ? process.env.BASE_URL_PROD + process.env.SUB_URL : process.env.BASE_URL_DEV + ":" + process.env.PORT + process.env.SUB_URL
            }
        }
    )
})

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

console.log(`DeHoli SuperApp Backend listening on port  ${process.env.NODE_ENV == "staging" ? process.env.BASE_URL : process.env.NODE_ENV == "production" ? process.env.BASE_URL_PROD : process.env.BASE_URL_DEV + ":" + process.env.PORT}`);
console.log(process.env.NODE_ENV);
module.exports = app;
