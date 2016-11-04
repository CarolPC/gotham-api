const characters = require('express').Router();
const controller = require('app/controllers/characters-controller');

//characters.get('/', controller.index);
characters.post('/', controller.create);

module.exports = characters;