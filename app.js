const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()
const YAML = require('yamljs')
const swaggerjsDocs = YAML.load('./app/api/v1/api.yaml');
const swaggerUi = require("swagger-ui-express");

const app = express();


app.use(express.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ? ROUTE
const categoriesRouter = require("./app/api/v1/master-data/categories/router")
app.use(process.env.SUB_URL, categoriesRouter);

app.use("/api/v1", swaggerUi.serve, swaggerUi.setup(swaggerjsDocs))
app.use("/", (req, res) => {
    res.status(200).json(
        {
            success: true,
            error_code: null,
            message: "Welcome to DeHoli SuperApp Backend",
            data: {
                api_documentations: process.env.NODE_ENV == "production" ? process.env.BASE_URL + ":" + process.env.PORT + process.env.SUB_URL : process.env.BASE_URL_DEV + ":" + process.env.PORT + process.env.SUB_URL
            }
        }
    )
})
console.log(`DeHoli SuperApp Backend listening on port  ${process.env.NODE_ENV == "production" ? process.env.BASE_URL : process.env.BASE_URL_DEV + ":" + process.env.PORT}`);
module.exports = app;
