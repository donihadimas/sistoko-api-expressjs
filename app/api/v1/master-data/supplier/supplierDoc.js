const paths = {
    "/supplier": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Supplier"],
            "summary": "Get all Supplier",
            "description": "Endpoint for Get All Supplier",
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
                    "description": "Success get all Supplier",
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
                                            "$ref": "#/components/schemas/supplierSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get all supplier",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data Supplier berhasil ditampilkan",
                                        "totalData": 20,
                                        "page": "1",
                                        "pageSize": "10",
                                        "data": [
                                            {
                                                "_id": "65f1af5e67333070b7bfb124",
                                                "supplierName": "Testing",
                                                "address": "Testing",
                                                "phoneNumber": "Testing",
                                                "notes": "Testing",
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
            "tags": ["Supplier"],
            "summary": "Create new supplier",
            "description": "Endpoint to Create supplier",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/CreateOrUpdateSupplier"
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Success create supplier",
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
                                        "$ref": "#/components/schemas/supplierSchemas"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/supplier/{id}": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Supplier"],
            "summary": "Get one Supplier",
            "description": "Endpoint for Get one Supplier",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success get one Supplier",
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
                                            "$ref": "#/components/schemas/supplierSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get one Supplier",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data Produk berhasil ditampilkan",
                                        "data": {
                                            "_id": "65f1af5e67333070b7bfb124",
                                            "supplierName": "Administrator",
                                            "address": "CRUD",
                                            "phoneNumber": "Testing",
                                            "notes": "Testing",
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
            "tags": ["Supplier"],
            "summary": "Update existing Supplier",
            "description": "Update existing Supplier in database",
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
                            "$ref": "#/components/schemas/CreateOrUpdateSupplier"
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Success update Supplier",
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
                                        "$ref": "#/components/schemas/supplierSchemas"
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
            "tags": ["Supplier"],
            "summary": "Delete existing Supplier",
            "description": "Delete existing Supplier in database",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success delete Supplier",
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
                                            "$ref": "#/components/schemas/supplierSchemas"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const schemas = {
    "supplierSchemas": {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string"
            },
            "supplierName": {
                "type": "string",
                "required": true
            },
            "address": {
                "type": "string"
            },
            "phoneNumber": {
                "type": "string"
            },
            "notes": {
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
    "CreateOrUpdateSupplier": {
        "type": "object",
        "properties": {
            "supplierName": {
                "type": "string",
                "required": true
            },
            "address": {
                "type": "string"
            },
            "phoneNumber": {
                "type": "string"
            },
            "notes": {
                "type": "string"
            }
        }
    }
}

module.exports = {
    paths,
    schemas
}