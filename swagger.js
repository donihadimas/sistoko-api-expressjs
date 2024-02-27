// ? swagger Config
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = 5000;

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "DeHoli Superapp APIs",
            version: "0.1.0",
            description:
                "API Made with Express Js and Swagger UI",
            contact: {
                name: "Doni Hadimas",
                email: "donihadimas.dev@gmail.com",
            },
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            }
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use("/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs, { explorer: true }))
}