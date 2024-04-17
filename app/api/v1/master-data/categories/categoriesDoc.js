const paths = {
    "/categories": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Categories"],
            "summary": "Get all Category",
            "description": "Endpoint for Get All Categories",
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
                    "description": "Success get all categories",
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
                                            "$ref": "#/components/schemas/categoriesSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get all categories",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data kategori berhasil ditampilkan",
                                        "totalData": 20,
                                        "page": "1",
                                        "pageSize": "10",
                                        "data": [
                                            {
                                                "_id": "65f1af5e67333070b7bfb124",
                                                "categoryName": "Dsadasdas",
                                                "totalProductInCategory": 0,
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
            "tags": ["Categories"],
            "summary": "Create new categories",
            "description": "Endpoint to Create Category",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/CreateOrUpdateCategories"
                        },
                        "examples": {
                            "jarum": {
                                "description": "Example create category Jarum",
                                "value": {
                                    "categoryName": "Jarum",
                                    "totalProductInCategory": 3
                                }
                            },
                            "benang": {
                                "description": "Example create category Benang",
                                "value": {
                                    "categoryName": "Benang",
                                    "totalProductInCategory": 10
                                }
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Success create categories",
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
                                        "$ref": "#/components/schemas/categoriesSchemas"
                                    }
                                }
                            },
                            "examples": {
                                "benang": {
                                    "description": "Success create java Benang",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Kategori Berhasil ditambahkan",
                                        "data": {
                                            "categoryName": "Benang",
                                            "totalProductInCategory": 3,
                                            "_id": "661a60403e13e6399fff855b",
                                            "createdAt": "2024-04-13T10:36:48.460Z",
                                            "updatedAt": "2024-04-13T10:36:48.460Z",
                                            "__v": 0
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
    "/categories/{id}": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Categories"],
            "summary": "Get all Category",
            "description": "Endpoint for Get one Categories",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success get one categories",
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
                                            "$ref": "#/components/schemas/categoriesSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get one categories",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data kategori berhasil ditampilkan",
                                        "data": {
                                            "_id": "65f1af5e67333070b7bfb124",
                                            "categoryName": "Dsadasdas",
                                            "totalProductInCategory": 0,
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
            "tags": ["Categories"],
            "summary": "Update existing categories",
            "description": "Update existing categories in database",
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
                            "$ref": "#/components/schemas/CreateOrUpdateCategories"
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Success update categories",
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
                                        "$ref": "#/components/schemas/categoriesSchemas"
                                    }
                                }
                            },
                            "examples": {
                                "benang": {
                                    "description": "Success update  Benang",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Kategori Berhasil diubah",
                                        "data": {
                                            "categoryName": "Benang",
                                            "totalProductInCategory": 3,
                                            "_id": "661a60403e13e6399fff855b",
                                            "createdAt": "2024-04-13T10:36:48.460Z",
                                            "updatedAt": "2024-04-13T10:36:48.460Z",
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
        "delete": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Categories"],
            "summary": "Delete existing categories",
            "description": "Delete existing categories in database",
            "parameters": [
                {
                    "$ref": "#/components/parameters/CategoriesId"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success delete categories",
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
                                            "$ref": "#/components/schemas/categoriesSchemas"
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
    "categoriesSchemas": {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string"
            },
            "categoryName": {
                "type": "string"
            },
            "totalProductInCategory": {
                "type": "integer",
                "format": "int32"
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
    "ArrayCategories": {
        "type": "array",
        "items": {
            "$ref": "#/components/schemas/categoriesSchemas"
        }
    },
    "CreateOrUpdateCategories": {
        "type": "object",
        "properties": {
            "categoryName": {
                "type": "string"
            },
            "totalProductInCategory": {
                "type": "number"
            }
        }
    },
}

module.exports = {
    paths,
    schemas
}