function FindCharactersError(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = 'FindCharacterError';
  this.message = message;
}

module.exports = {
  FindCharactersError
}