const charactersModel = require('app/models/characters');

const CreateCharacterService = {
  perform(character, next) {
    return new Promise((resolve, reject) => {
      characterObject = new charactersModel(character);

     characterObject.save()
        .then((characterCreated) => {
          resolve({
            data: {
              character: characterCreated
            }
          });
        })
        .catch((err) => {
          reject(err);
        });
    })
  }
}

module.exports = CreateCharacterService;

