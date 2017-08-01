const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entitySchema = new Schema({
  name: String,
  description: String,
  category: { type: String, enum: ['Computers', 'Phones', 'Accesories'] },
  price: { type: Number, default: 0 },
  picture: String
});

module.exports = mongoose.model('Entity', entitySchema);
