const mongoose = require('mongoose');

const statusCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER: 500
}

const mongooseErrors = mongoose.Error;

module.exports = {
  statusCodes,
  mongooseErrors
}