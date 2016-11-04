const charactersModel = require('app/models/characters');
const { FindCharactersError } = require('app/custom-errors');

const ListCharactersService = {
  perform() {
    return new Promise((resolve, reject) => {

      charactersModel.find()
        .then((charactersList) => {
          if (!charactersList) {
            const err = new FindCharactersError('Characters not found');
            reject(err);
          }

        return resolve(charactersList);
        });
    });
  }
};


module.exports = ListCharactersService;
