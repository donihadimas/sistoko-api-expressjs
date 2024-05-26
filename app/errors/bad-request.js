// import http-status-codes
const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api-error');
class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

module.exports = BadRequest;