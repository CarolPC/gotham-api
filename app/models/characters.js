const {mongoose, mongoSchema} = require('../db');

const nameRequired = [true, 'The character must have a name'];
const ocupationRequired = [true, 'The character must have a ocupation'];
const quoteRequired = [true, 'The character must have a quote'];
const minFirstAppearance = [1939, 'The first appearance year should be greater than 1939'];

const charactersSchema = mongoSchema({
  name: { type: String, upperCase: true, trim: true, required: nameRequired },
  ocupation: { type: String, upperCase: true, trim: true, required: ocupationRequired },
  quote: { type: String, trim: true, required: quoteRequired},
  firstAppearance: { type: Number, min: minFirstAppearance, default: 1939}
});

const characters = mongoose.model('characters', charactersSchema);

module.exports = characters;