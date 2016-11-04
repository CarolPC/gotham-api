const { STATUS_CODES } = require('http');

module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || STATUS_CODES[status];
  const description = err.description || null;
  const type = err.name;

  res.status(status).json({
    error: { type, message, description }
  })
}