const paths = {
    "/product": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Product"],
            "summary": "Get all Product",
            "description": "Endpoint for Get All Product",
            "parameters": [
                {
                    "$ref": "#/components/parameters/page"
                },
                {
                    "$ref": "#/components/parameters/pageSize"
                },
                {
                    "$ref": "#/components/parameters/search"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success get all product",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "success": {
                                        "type": "boolean"
                                    },
                                    "error_code": {
                                        "type": "string",
                                        "nullable": true
                                    },
                                    "message": {
                                        "type": "string"
                                    },
                                    "totalData": {
                                        "type": "integer"
                                    },
                                    "page": {
                                        "type": "integer",
                                        "format": "int32"
                                    },
                                    "pageSize": {
                                        "type": "integer",
                                        "format": "int32"
                                    },
                                    "data": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/productSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get all product",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data Produk berhasil ditampilkan",
                                        "totalData": 20,
                                        "page": "1",
                                        "pageSize": "10",
                                        "data": [
                                            {
                                                "_id": "65f1af5e67333070b7bfb124",
                                                "productName": "Administrator",
                                                "description": "CRUD",
                                                "brand": "Testing",
                                                "variant": "Testing",
                                                "unitTypeId": "Testing",
                                                "price": 1000000,
                                                "stock": "Testing",
                                                "image": "Testing",
                                                "barcode": "Testing",
                                                "discount": 200000,
                                                "categoryId": "Testing",
                                                "supplierId": "Testing",
                                                "createdAt": "2024-03-13T13:51:26.130Z",
                                                "updatedAt": "2024-03-13T13:51:26.130Z",
                                                "__v": 0
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "post": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Product"],
            "summary": "Create new product",
            "description": "Endpoint to Create Product",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/CreateOrUpdateProduct"
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Success create product",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "success": {
                                        "type": "boolean"
                                    },
                                    "error_code": {
                                        "type": "string",
                                        "nullable": true
                                    },
                                    "message": {
                                        "type": "string"
                                    },
                                    "data": {
                                        "$ref": "#/components/schemas/productSchemas"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/product/{id}": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Product"],
            "summary": "Get one Product",
            "description": "Endpoint for Get one Product",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success get one Product",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "success": {
                                        "type": "boolean"
                                    },
                                    "error_code": {
                                        "type": "string",
                                        "nullable": true
                                    },
                                    "message": {
                                        "type": "string"
                                    },
                                    "data": {
                                        "type": "object",
                                        "properties": {
                                            "$ref": "#/components/schemas/productSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get one product",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data Produk berhasil ditampilkan",
                                        "data": {
                                            "_id": "65f1af5e67333070b7bfb124",
                                            "productName": "Administrator",
                                            "description": "CRUD",
                                            "brand": "Testing",
                                            "variant": "Testing",
                                            "unitTypeId": "Testing",
                                            "price": 1000000,
                                            "stock": "Testing",
                                            "image": "Testing",
                                            "barcode": "Testing",
                                            "discount": 200000,
                                            "categoryId": "Testing",
                                            "supplierId": "Testing",
                                            "createdAt": "2024-03-13T13:51:26.130Z",
                                            "updatedAt": "2024-03-13T13:51:26.130Z",
                                            "__v": 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "put": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Product"],
            "summary": "Update existing product",
            "description": "Update existing product in database",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/CreateOrUpdateProduct"
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Success update product",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "success": {
                                        "type": "boolean"
                                    },
                                    "error_code": {
                                        "type": "string",
                                        "nullable": true
                                    },
                                    "message": {
                                        "type": "string"
                                    },
                                    "data": {
                                        "$ref": "#/components/schemas/productSchemas"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "delete": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Product"],
            "summary": "Delete existing product",
            "description": "Delete existing product in database",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success delete product",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "success": {
                                        "type": "boolean"
                                    },
                                    "error_code": {
                                        "type": "string",
                                        "nullable": true
                                    },
                                    "message": {
                                        "type": "string"
                                    },
                                    "data": {
                                        "type": "object",
                                        "properties": {
                                            "$ref": "#/components/schemas/productSchemas"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
}

const schemas = {
    "productSchemas": {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string"
            },
            "productName": {
                "type": "string",
                "required": true
            },
            "description": {
                "type": "string"
            },
            "brand": {
                "type": "string"
            },
            "variant": {
                "type": "string"
            },
            "unitTypeId": {
                "type": "string"
            },
            "price": {
                "type": "integer",
                "required": true
            },
            "stock": {
                "type": "integer"
            },
            "image": {
                "type": "string"
            },
            "barcode": {
                "type": "string"
            },
            "discount": {
                "type": "integer"
            },
            "categoryId": {
                "type": "string"
            },
            "supplierId": {
                "type": "string"
            },
            "createdAt": {
                "type": "string"
            },
            "updatedAt": {
                "type": "string"
            },
            "__v": {
                "type": "integer"
            }
        }
    },
    "CreateOrUpdateProduct": {
        "type": "object",
        "properties": {
            "productName": {
                "type": "string",
                "required": true
            },
            "description": {
                "type": "string"
            },
            "brand": {
                "type": "string"
            },
            "variant": {
                "type": "string"
            },
            "unitTypeId": {
                "type": "string"
            },
            "price": {
                "type": "integer",
                "required": true
            },
            "stock": {
                "type": "integer"
            },
            "image": {
                "type": "string"
            },
            "barcode": {
                "type": "string"
            },
            "discount": {
                "type": "integer"
            },
            "categoryId": {
                "type": "string"
            },
            "supplierId": {
                "type": "string"
            }
        }
    },
}

module.exports = {
    paths,
    schemas
}