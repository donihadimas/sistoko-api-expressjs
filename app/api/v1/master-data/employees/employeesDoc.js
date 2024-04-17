const paths = {
    "/employees": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Employees"],
            "summary": "Get all Employees",
            "description": "Endpoint for Get All Employees",
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
                    "description": "Success get all employees",
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
                                            "$ref": "#/components/schemas/employeesSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get all employees",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data Karyawan berhasil ditampilkan",
                                        "totalData": 20,
                                        "page": "1",
                                        "pageSize": "10",
                                        "data": [
                                            {
                                                "_id": "65f1af5e67333070b7bfb124",
                                                "employeeUsername": "donihadimas",
                                                "employeeFullName": "Doni Hadimas",
                                                "employeePhoneNumber": "0822961217567",
                                                "employeeAddress": "Bandung",
                                                "employeeRole": "Administrator",
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
            "tags": ["Employees"],
            "summary": "Create new employees",
            "description": "Endpoint to Create Employee",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/CreateOrUpdateEmployees"
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Success create employees",
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
                                        "$ref": "#/components/schemas/employeesSchemas"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/employees/{id}": {
        "get": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Employees"],
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
                                            "$ref": "#/components/schemas/employeesSchemas"
                                        }
                                    }
                                }
                            },
                            "examples": {
                                "success": {
                                    "description": "Example success get one employee",
                                    "value": {
                                        "success": true,
                                        "error_code": null,
                                        "message": "Data karyawan berhasil ditampilkan",
                                        "data": {
                                            "_id": "65f1af5e67333070b7bfb124",
                                            "employeeUsername": "donihadimas",
                                            "employeeFullName": "Doni Hadimas",
                                            "employeePhoneNumber": "0822961217567",
                                            "employeeAddress": "Bandung",
                                            "employeeRole": "Administrator",
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
            "tags": ["Employees"],
            "summary": "Update existing employees",
            "description": "Update existing employees in database",
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
                            "$ref": "#/components/schemas/CreateOrUpdateEmployees"
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Success update employee",
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
                                        "$ref": "#/components/schemas/employeesSchemas"
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
            "tags": ["Employees"],
            "summary": "Delete existing employees",
            "description": "Delete existing employees in database",
            "parameters": [
                {
                    "$ref": "#/components/parameters/Id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success delete employee",
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
                                            "$ref": "#/components/schemas/employeesSchemas"
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
    "employeesSchemas": {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string"
            },
            "employeeUsername": {
                "type": "string",
                "required": true
            },
            "employeeFullName": {
                "type": "string",
                "required": true
            },
            "employeePhoneNumber": {
                "type": "string",
                "required": true
            },
            "employeeAddress": {
                "type": "string",
                "required": true
            },
            "employeeRole": {
                "type": "string",
                "nullable": true
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
    "CreateOrUpdateEmployees": {
        "type": "object",
        "properties": {
            "employeeUsername": {
                "type": "string",
                "required": true
            },
            "employeeFullName": {
                "type": "string",
                "required": true
            },
            "employeePhoneNumber": {
                "type": "string",
                "required": true
            },
            "employeeAddress": {
                "type": "string",
                "required": true
            },
            "employeeRole": {
                "type": "string"
            }
        }
    },
}

module.exports = {
    paths,
    schemas
}