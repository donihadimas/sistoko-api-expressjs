const paths = {
    "/permissions": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Permissions"],
            "summary": "Get all Permissions",
            "description": "Endpoint for Get All Permissions",
            "parameters": [
                {
                    "$ref": "#/components/parameters/page"
                },
                {
                    "$ref": "#/components/parameters/pageSize"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success get all permissions",
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
                                            "$ref": "#/components/schemas/permissionsSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get all permissions",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data Hak Akses berhasil ditampilkan",
                                        "totalData": 20,
                                        "page": "1",
                                        "pageSize": "10",
                                        "data": [
                                            {
                                                "_id": "65f1af5e67333070b7bfb124",
                                                "roleId": "65f1af5e67333070b7bfb124",
                                                "menuId": "65f1af5e67333070b7bfb124",
                                                "permissions": {
                                                    "list": false,
                                                    "create": false,
                                                    "read": false,
                                                    "update": false,
                                                    "delete": false,
                                                },
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
            "tags": ["Permissions"],
            "summary": "Create new permissions",
            "description": "Endpoint to Create Role",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/CreateOrUpdatePermissions"
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Success create permissions",
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
                                        "$ref": "#/components/schemas/permissionsSchemas"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/permissions/{id}": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Permissions"],
            "summary": "Get one Role",
            "description": "Endpoint for Get one Role",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success get one Role",
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
                                            "$ref": "#/components/schemas/permissionsSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get one role",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data karyawan berhasil ditampilkan",
                                        "data": {
                                            "_id": "65f1af5e67333070b7bfb124",
                                            "roleId": "65f1af5e67333070b7bfb124",
                                            "menuId": "65f1af5e67333070b7bfb124",
                                            "permissions": {
                                                "list": false,
                                                "create": false,
                                                "read": false,
                                                "update": false,
                                                "delete": false,
                                            },
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
            "tags": ["Permissions"],
            "summary": "Update existing permissions",
            "description": "Update existing permissions in database",
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
                            "$ref": "#/components/schemas/CreateOrUpdatePermissions"
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Success update permissions",
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
                                        "$ref": "#/components/schemas/permissionsSchemas"
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
            "tags": ["Permissions"],
            "summary": "Delete existing permissions",
            "description": "Delete existing permissions in database",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success delete permissions",
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
                                            "$ref": "#/components/schemas/permissionsSchemas"
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
    "permissionsSchemas": {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string"
            },
            "roleId": {
                "type": "string",
                "required": true
            },
            "menuId": {
                "type": "string",
                "required": true
            },
            "permissions": {
                "type": "object",
                "properties": {
                    "list": {
                        "type": "boolean",
                        "default": false
                    },
                    "create": {
                        "type": "boolean",
                        "default": false
                    },
                    "read": {
                        "type": "boolean",
                        "default": false
                    },
                    "update": {
                        "type": "boolean",
                        "default": false
                    },
                    "delete": {
                        "type": "boolean",
                        "default": false
                    },
                },
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
    "CreateOrUpdatePermissions": {
        "type": "object",
        "properties": {
            "roleId": {
                "type": "string",
                "required": true
            },
            "menuId": {
                "type": "string",
                "required": true
            },
            "permissions": {
                "type": "object",
                "properties": {
                    "list": {
                        "type": "boolean",
                        "default": false
                    },
                    "create": {
                        "type": "boolean",
                        "default": false
                    },
                    "read": {
                        "type": "boolean",
                        "default": false
                    },
                    "update": {
                        "type": "boolean",
                        "default": false
                    },
                    "delete": {
                        "type": "boolean",
                        "default": false
                    },
                },
            },
        }
    },
}

module.exports = {
    paths,
    schemas
}