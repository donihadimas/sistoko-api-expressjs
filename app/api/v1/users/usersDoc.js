const paths = {
    "/users": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Users"],
            "summary": "Get all Users",
            "description": "Endpoint for Get All Users",
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
                    "description": "Success get all users",
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
                                            "$ref": "#/components/schemas/usersSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get all users",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data Pengguna berhasil ditampilkan",
                                        "totalData": 20,
                                        "page": "1",
                                        "pageSize": "10",
                                        "data": [
                                            {
                                                "_id": "65f1af5e67333070b7bfb124",
                                                "PenggunaUsername": "donihadimas",
                                                "PenggunaFullName": "Doni Hadimas",
                                                "PenggunaPhoneNumber": "0822961217567",
                                                "PenggunaAddress": "Bandung",
                                                "PenggunaRole": "Administrator",
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
            "tags": ["Users"],
            "summary": "Create new users",
            "description": "Endpoint to Create Employee",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/CreateOrUpdateUsers"
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Success create users",
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
                                        "$ref": "#/components/schemas/usersSchemas"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/users/{id}": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Users"],
            "summary": "Get one Employee",
            "description": "Endpoint for Get one Employee",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success get one Employee",
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
                                            "$ref": "#/components/schemas/usersSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get one Pengguna",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data karyawan berhasil ditampilkan",
                                        "data": {
                                            "_id": "65f1af5e67333070b7bfb124",
                                            "userName": "donihadimas",
                                            "fullName": "Doni Hadimas",
                                            "email": "0822961217567",
                                            "phoneNumber": "Bandung",
                                            "address": "Administrator",
                                            "roleId": "Administrator",
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
            "tags": ["Users"],
            "summary": "Update existing users",
            "description": "Update existing users in database",
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
                            "$ref": "#/components/schemas/CreateOrUpdateUsers"
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Success update Pengguna",
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
                                        "$ref": "#/components/schemas/usersSchemas"
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
            "tags": ["Users"],
            "summary": "Delete existing users",
            "description": "Delete existing users in database",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success delete Pengguna",
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
                                            "$ref": "#/components/schemas/usersSchemas"
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
    "usersSchemas": {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string"
            },
            "userName": {
                "type": "string",
                "required": true
            },
            "fullName": {
                "type": "string",
                "required": true
            },
            "email": {
                "type": "string",
                "required": true
            },
            "phoneNumber": {
                "type": "string",
                "required": true
            },
            "password": {
                "type": "string",
                "required": true
            },
            "confirmPassword": {
                "type": "string",
                "required": true
            },
            "address": {
                "type": "string",
                "required": true
            },
            "roleId": {
                "type": "string",
                "default": null
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
    "CreateOrUpdateUsers": {
        "type": "object",
        "properties": {
            "userName": {
                "type": "string",
                "required": true
            },
            "fullName": {
                "type": "string",
                "required": true
            },
            "email": {
                "type": "string",
                "required": true
            },
            "phoneNumber": {
                "type": "string",
                "required": true
            },
            "password": {
                "type": "string",
                "required": true
            },
            "confirmPassword": {
                "type": "string",
                "required": true
            },
            "address": {
                "type": "string",
                "required": true
            },
            "roleId": {
                "type": "string",
                "default": null
            }
        }
    },
}

module.exports = {
    paths,
    schemas
}