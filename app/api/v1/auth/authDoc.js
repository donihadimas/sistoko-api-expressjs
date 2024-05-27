const paths = {
    "/auth/login": {
        "post": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Authentications"],
            "summary": "Login Process",
            "description": "Endpoint to Login Process",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/LoginProcessSchemas"
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Success authentication",
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
                                        "$ref": "#/components/schemas/loginSchemas"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/auth/register": {
        "post": {
            "security": [
                {
                    "Auth": []
                }
            ],
            "tags": ["Authentications"],
            "summary": "Register Process",
            "description": "Endpoint to Register Process",
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/RegisterProcessSchemas"
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Success authentication",
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
                                        "$ref": "#/components/schemas/RegisterSchemas"
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
    "loginSchemas": {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string"
            },
            "userName": {
                "type": "string",
                "required": true
            },
            "password": {
                "type": "string",
                "required": true
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
    "LoginProcessSchemas": {
        "type": "object",
        "properties": {
            "userName": {
                "type": "string",
                "required": true
            },
            "password": {
                "type": "string",
                "required": true
            },
        }
    },
    "RegisterSchemas": {
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
    "RegisterProcessSchemas": {
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
        }
    },
}

module.exports = {
    paths,
    schemas
}