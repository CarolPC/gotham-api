const {
  OK, NOT_FOUND, CREATED, UNPROCESSABLE_ENTITY
} = require('app/constants').statusCodes;

const { extractValidationError } = require('app/utils');
const { ValidationError } = require('app/constants').mongooseErrors;
const createCharacterService = require('app/services/characters/create-character-service');

const CharactersController = {

   create(req, res, next) {
    const character = req.body;

    createCharacterService.perform(character)
      .then((character) => {
        res.status(CREATED).json({
          message: 'Character added to database',
          data:character
        });
      })
      .catch((err) => {
        if (err instanceof ValidationError) {
          err.status = UNPROCESSABLE_ENTITY;
          err.description = extractValidationError(err.errors);
        }
        next(err);
      });
  },

}

module.exports = CharactersController;