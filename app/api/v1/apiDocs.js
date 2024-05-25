const categoriesDoc = require('./master-data/categories/categoriesDoc')
const employeesDoc = require('./master-data/employees/employeesDoc')
const productDoc = require('./master-data/product/productDoc')
const supplierDoc = require('./master-data/supplier/supplierDoc')
const rolesDoc = require('./reference/roles/rolesDoc')
const menuDoc = require('./reference/menu/menuDoc')
const permissionsDoc = require('./reference/permissions/permissionDoc')
const usersDoc = require('./users/usersDoc')
const authDoc = require('./auth/authDoc')

let urlServer;

if (process.env.NODE_ENV === "development") {
    urlServer = `${process.env.BASE_URL_DEV}:${process.env.PORT}/{basePath}`;
} else if (process.env.NODE_ENV === "staging") {
    urlServer = `${process.env.BASE_URL}:${process.env.PORT}/{basePath}`;
} else {
    urlServer = `${process.env.BASE_URL_PROD}/{basePath}`;
}

const apiDocs = {
    "openapi": "3.1.0",
    "info": {
        "title": "DeHoli RESTful API Documentations v1",
        "version": "1.0.0",
        "description": "RESTful API Documentations for DeHoli SuperApps",
        "termsOfService": "http://swagger.io/terms/",
        "contact": {
            "name": "Doni Hadimas",
            "email": "donihadimas.dev@gmail.com"
        },
        "license": {
            "name": "APACHE 2.0",
            "url": "https://www.apache.org/licenses/LICENSE-2.0"
        }
    },
    "servers": [
        {
            "url": urlServer,
            "description": `The ${process.env.NODE_ENV} API server`,
            "variables": {
                "basePath": {
                    "default": "api/v1"
                }
            }
        }
    ],
    "paths": {
        ...authDoc.paths,
        ...categoriesDoc.paths,
        ...employeesDoc.paths,
        ...menuDoc.paths,
        ...productDoc.paths,
        ...permissionsDoc.paths,
        ...rolesDoc.paths,
        ...supplierDoc.paths,
        ...usersDoc.paths,
    },
    "components": {
        "securitySchemes": {
            "Auth": {
                "description": "Authentication for DeHoli RESTful API",
                "type": "apiKey",
                "in": "header",
                "name": "X-API-Key"
            }
        },
        "parameters": {
            "Id": {
                "name": "id",
                "in": "path",
                "required": true,
                "description": "id for updated",
                "schema": {
                    "type": "string"
                }
            },
            "page": {
                "name": "page",
                "in": "query",
                "required": false,
                "description": "The page number for pagination",
                "schema": {
                    "type": "integer",
                    "nullable": true,
                    "default": 1
                }
            },
            "pageSize": {
                "name": "pageSize",
                "in": "query",
                "required": false,
                "description": "The number of items per page",
                "schema": {
                    "type": "integer",
                    "nullable": true,
                    "default": 10
                }
            },
            "search": {
                "name": "search",
                "in": "query",
                "required": false,
                "description": "Search by category name",
                "schema": {
                    "type": "string",
                    "nullable": true
                }
            },
            "filtered": {
                "name": "filtered",
                "in": "query",
                "required": false,
                "description": "Show Filtered Menu",
                "schema": {
                    "type": "boolean",
                    "default": false,
                    "nullable": true
                }
            }
        },
        "schemas": {
            ...authDoc.schemas,
            ...categoriesDoc.schemas,
            ...employeesDoc.schemas,
            ...menuDoc.schemas,
            ...productDoc.schemas,
            ...permissionsDoc.schemas,
            ...rolesDoc.schemas,
            ...supplierDoc.schemas,
            ...usersDoc.schemas,
        }
    }
}

module.exports = {
    apiDocs
}