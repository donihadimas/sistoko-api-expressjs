const paths = {
    "/menu": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Menu"],
            "summary": "Get all Menu",
            "description": "Endpoint for Get All Menu",
            "parameters": [
                {
                    "$ref": "#/components/parameters/page"
                },
                {
                    "$ref": "#/components/parameters/pageSize"
                },
                {
                    "$ref": "#/components/parameters/search"
                },
                {
                    "$ref": "#/components/parameters/filtered"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success get all menu",
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
                                            "$ref": "#/components/schemas/menuSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get all menu",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data Menu berhasil ditampilkan",
                                        "totalData": 20,
                                        "page": "1",
                                        "pageSize": "10",
                                        "data": [
                                            {
                                                "_id": "65f1af5e67333070b7bfb124",
                                                "menuParentId": "65f1af5e67333070b7bfb124",
                                                "name": "Menu",
                                                "path": "/menu",
                                                "icon": "icon-menu",
                                                "active": true,
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
            "tags": ["Menu"],
            "summary": "Create new menu",
            "description": "Endpoint to Create Menu",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/CreateOrUpdateMenu"
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Success create menu",
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
                                        "$ref": "#/components/schemas/menuSchemas"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/menu/{id}": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Menu"],
            "summary": "Get one Menu",
            "description": "Endpoint for Get one Menu",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success get one Menu",
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
                                            "$ref": "#/components/schemas/menuSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get one menu",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data Menu berhasil ditampilkan",
                                        "data": {
                                            "_id": "65f1af5e67333070b7bfb124",
                                            "menuParentId": "65f1af5e67333070b7bfb124",
                                            "name": "Menu",
                                            "path": "/menu",
                                            "icon": "icon-menu",
                                            "active": true,
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
            "tags": ["Menu"],
            "summary": "Update existing menu",
            "description": "Update existing menu in database",
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
                            "$ref": "#/components/schemas/CreateOrUpdateMenu"
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Success update menu",
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
                                        "$ref": "#/components/schemas/menuSchemas"
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
            "tags": ["Menu"],
            "summary": "Delete existing menu",
            "description": "Delete existing menu in database",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success delete menu",
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
                                            "$ref": "#/components/schemas/menuSchemas"
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
    "menuSchemas": {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string"
            },
            "menuParentId": {
                "type": "string",
                'default': null
            },
            "name": {
                "type": "string",
                "required": true
            },
            "path": {
                "type": "string",
                "required": true
            },
            "icon": {
                "type": "string",
                "required": true
            },
            "active": {
                "type": "boolean",
                "default": true
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
    "CreateOrUpdateMenu": {
        "type": "object",
        "properties": {
            "menuParentId": {
                "type": "string",
                "default": null
            },
            "name": {
                "type": "string",
                "required": true
            },
            "path": {
                "type": "string",
                "required": true
            },
            "icon": {
                "type": "string",
                "required": true
            },
            "active": {
                "type": "boolean",
                "default": true
            },
        }
    },
}

module.exports = {
    paths,
    schemas
}