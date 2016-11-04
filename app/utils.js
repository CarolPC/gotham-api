const extractValidationError = (errors) => {
  return Object.keys(errors).reduce((result, key) => {
    result[key] = errors[key].message;

    return result;
  }, {});
}

module.exports = {
  extractValidationError
};