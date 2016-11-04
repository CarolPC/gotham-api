const {
  OK, NOT_FOUND, CREATED, UNPROCESSABLE_ENTITY
} = require('app/constants').statusCodes;

const { extractValidationError } = require('app/utils');
const { ValidationError, MongoError } = require('app/constants').mongooseErrors;
const { FindCharacterError } = require('app/custom-errors');
const createCharacterService = require('app/services/characters/create-character-service');
const listCharacterService = require('app/services/characters/index-characters-service');

const CharactersController = {

  index(req, res, next) {

    listCharacterService.perform()
      .then((charactersData) => {
        res.status(OK).json({ data: charactersData });
      })
      .catch((err) => {
        if (err instanceof FindCharacterError) {
          err.status = NOT_FOUND;
        }
        next(err);
      })
  },

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
        else if (err.name === 'MongoError' && err.code === 11000) {
          err.status = UNPROCESSABLE_ENTITY;
          err.message = {
            name: 'It is not allowed to have 2 characters with the same name'
          };
        }
        next(err);
      });
  },

}

module.exports = CharactersController;