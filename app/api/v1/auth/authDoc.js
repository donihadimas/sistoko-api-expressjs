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
                    "description": "Success create auth/login",
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
}

module.exports = {
    paths,
    schemas
}